# Emblems

Flavour art. **Everything here is optional** — the game renders its existing
text badges and icons whenever a file is absent, so drop batches in as they are
finished and they light up on the next build.

Format: PNG, transparent background, square. Baked art is stored at **256px,
palette-quantised** — that is 15x smaller than a 512px RGBA master (17MB -> 1.1MB
across the set) with no visible loss at the sizes these render.

**Size matters more than you would expect.** The archetype and position art are
detailed illustrations, not glyphs: below roughly 40px they turn to mush. They
are rendered at 44px (player sheet) and 34px (roster group headers). Only simple
geometric marks — the dev-trait stars — survive at 16-20px.

`normal` dev trait is deliberately absent: it is the default state, so marking it
would put a badge on most of the league.

Filenames must match exactly — they are looked up by slug, not by search.
The generation prompts and the full filename list live in
`Downloads/Gridiron-GM-emblem-prompts.txt`.

| Folder | What it is | Count |
|---|---|---|
| `archetypes/` | one per player archetype (`run-and-hit.png`, `cannon.png`, …) | 36 — **all present** |
| `devtraits/` | `star` `superstar` `x-factor` (no `normal` — by design) | 3 |
| `awards/` *(not yet drawn)* | `mvp` `opoy` `dpoy` `oroy` `droy` `championship-trophy` `afc-trophy` `nfc-trophy` `all-pro` | 9 |
| `draft/` *(not yet drawn)* | `draft-crest` `on-the-clock` `round-1`…`round-7` `steal` `bust` | 11 |
| `events/` *(not yet drawn)* | `trade` `signing` `injury` `breakout` `retirement` `milestone` `award` `transaction` | 8 |
| `positions/` | `qb` `rb` `wr` `te` `ol` `edge` `idl` `lb` `cb` `s` `k` `p` | 12 — **all present** |
| `empty/` *(not yet drawn)* | `empty-fa-pool` `no-trade-market` `offseason-quiet` | 3 |

Slugs are kebab-case of the display name: `Run & Hit` → `run-and-hit`. Build them
with `emblemSlug()` from `src/components/common/Emblem.tsx` rather than by hand.

No real NFL logos, team marks or player likenesses.
