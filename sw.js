// H2-1: the version token below is replaced at build time (vite.config.ts) from src/appVersion.ts, so every release gets a new
// cache, a new worker, and the old caches are deleted on activate. Nobody edits this by hand.
const CACHE_NAME = 'gridiron-gm-shell-v26-5';
const SHELL = ['/', '/manifest.webmanifest', '/gridiron-icon.svg'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL)).catch(() => undefined));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put('/', copy));
          return response;
        })
        .catch(() => caches.match('/'))
    );
    return;
  }

  const put = response => {
    if (response.ok) { const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)); }
    return response;
  };

  // Content-hashed JS/CSS under /assets/ never change: cache-first. Everything else is un-hashed (gameplay GLBs,
  // player-busts, cards, team-logos, fonts, headshots): stale-while-revalidate, so a changed file is picked up
  // on the next load instead of being served from cache forever.
  if (new URL(event.request.url).pathname.startsWith('/assets/')) {
    event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(put)));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => {
    const fresh = fetch(event.request).then(put).catch(() => cached);
    return cached || fresh;
  }));
});
