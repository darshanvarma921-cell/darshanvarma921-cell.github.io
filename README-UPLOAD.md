# Upload this folder to GitHub Pages

This folder is a finished, static build of the franchise app. There is no build
step left to run and no server needed — every file here is meant to be served
exactly as it sits. Upload the **contents** of this folder (not the folder
itself), and the app runs.

Built from `master` at commit `c87627b`, with `--base=./` so it works at any URL
depth.

**This build contains the played-engine back-port.** The gameplay engine is now
the one from the stand-alone build — the eight-pose sprites, the thumbstick, the
tap-a-receiver passing model and the play-call sheet — running on a franchise
preset that calibrates it to this league's own scoring. PLAY GAME on a franchise
fixture and Exhibition both use it.

---

## The three things worth knowing first

1. **It works at any URL, root or subfolder.** Every asset path in this build is
   relative, so `https://you.github.io/` and `https://you.github.io/gridiron-gm/`
   both work with no rebuild and no configuration. Verified headless: served
   under `/gridiron-gm/`, the app boots to the mode-selection screen, and an
   Exhibition game loads the engine chunk and mounts its canvas with **zero
   console errors and zero failed requests**.

2. **Nothing needs a server.** The app has a Cloudflare Worker in the repo, but
   it only answers `/api/health` and returns a polite 503 for
   `/api/generateDraftClass` — and the front end never calls either one. Saves
   live in your browser's IndexedDB, which works identically on GitHub Pages.
   Nothing is lost by hosting this statically.

3. **Offline mode only turns on at a root deployment.** The app registers its
   service worker at `/sw.js` — the origin root. Put this at `you.github.io/`
   and offline caching works. Put it at `you.github.io/gridiron-gm/` and that
   request 404s, registration fails silently, and the app runs normally without
   offline support. Nothing breaks either way.

---

## Option A — a project page (recommended)

Gives you `https://<username>.github.io/<repo>/`.

1. Go to <https://github.com/new>. Name it whatever you like (`gridiron-gm` is
   fine). Set it **Public**. Do **not** tick "Add a README". Click
   **Create repository**.
2. On the empty repo page, click **uploading an existing file**.
3. Open this `gh-pages-pack` folder on your computer, select **everything
   inside it** — `index.html`, `404.html`, `sw.js`, `manifest.webmanifest`,
   `gridiron-icon.svg`, and the `assets`, `emblems`, `gameplay` and
   `team-logos` folders — and drag them into the browser window.
   - **Drag the contents, not the folder.** If `index.html` ends up inside a
     `gh-pages-pack/` folder in the repo, the site will 404.
   - GitHub's uploader caps a single drag at 100 files. This pack has more than
     that, so drag the loose files first, commit, then drag each folder in and
     commit again. Folders dragged from your file manager keep their structure.
4. After each drag, scroll down and click **Commit changes**.
5. **Important:** the `.nojekyll` file in this pack is hidden on macOS and
   Linux. Press `Cmd+Shift+.` (macOS) or `Ctrl+H` (Linux) in the file picker to
   reveal it, and make sure it gets uploaded. Without it, GitHub's Jekyll step
   silently discards folders whose names begin with an underscore.
6. Go to **Settings → Pages**.
7. Under **Build and deployment → Source**, choose **Deploy from a branch**.
8. Set **Branch** to `main` and the folder to `/ (root)`. Click **Save**.
9. Wait about a minute, then reload the Settings → Pages screen. The live URL
   appears in a banner at the top.

## Option B — a `gh-pages` branch

Use this if the repo already holds the source and you want the built site kept
apart from it.

1. In the repo, click the branch dropdown, type `gh-pages`, and choose
   **Create branch: gh-pages**.
2. Switch to that branch and delete everything on it, so only the built site
   remains.
3. Upload the contents of this folder exactly as in Option A, steps 2–5.
4. **Settings → Pages → Deploy from a branch**, branch `gh-pages`, folder
   `/ (root)`, **Save**.

## Option C — user or organisation page

Name the repository exactly `<username>.github.io` and upload the contents to
its default branch. The site appears at `https://<username>.github.io/`. This is
the only option where the service worker registers and offline play works.

---

## What does not work in a static build

Nothing that the app actually uses. For completeness:

- **`/api/generateDraftClass`** was already disabled in the hosted build — the
  worker returned a 503 explaining that hosted games use the built-in historical
  and procedural draft classes. Statically the route does not exist, and the app
  never calls it. No behaviour changes.
- **`/api/health`** was a deployment probe. Nothing in the UI reads it.
- **Offline play** only at a root deployment; see point 3 above.

## Known cosmetic gaps, present in every build

These are missing files in the repository, not something this pack dropped, and
each already falls back cleanly. They are listed so a 404 in the browser console
does not look alarming:

- `gameplay/sfx/*.mp3` — the six sound effects are not in the repository at all.
  The audio layer is built to fall back to silence when a file is missing, so
  the game plays silently. Adding those six files to `gameplay/sfx/` in a future
  build turns sound on with no code change.
- `emblems/empty/exhibition-emblem.png` — the mode-selection screen asks for the
  emblem first and falls back to the gameplay artwork, which is what you see.
- `team-logos/NYJ-sm.png` — one club is missing its small logo and renders as a
  monogram instead. The other 63 logo files are present.

## Re-deploying later

Rebuild from the repository root with:

```
npx vite build --base=./
```

Then copy `dist/client/` over this folder again, and re-add the three files that
are not part of the Vite output:

- `.nojekyll` — an empty file.
- `404.html` — a byte-for-byte copy of `index.html`. GitHub Pages serves it for
  any unknown path, which keeps a refresh on a deep URL from showing GitHub's
  own 404 page. The app itself has no URL routing, so this is belt-and-braces.
- `manifest.webmanifest` — the built copy has absolute `/` paths; change
  `start_url`, `scope` and the icon `src` to `./` so "Add to Home Screen" works
  under a subfolder.

If you would rather pin the build to a known subfolder instead of using relative
paths, use `npx vite build --base=/<repo-name>/`. Relative is more forgiving —
it survives being moved — so it is what this pack ships with.
