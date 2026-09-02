# Emblems

Flavour art. **Everything here is optional** — the game renders its existing
text badges and icons whenever a file is absent, so drop batches in as they are
finished and they light up on the next build.

Format: PNG, transparent background, square. Baked by
`scripts/prepare-emblems.ps1`, which resamples to **192px** and posterises RGB to
5 bits (alpha untouched): 81 MB of source across the full set becomes ~1.9 MB
with no visible loss at the sizes these render.

**Size matters more than you would expect, and it is not uniform.** Measured on
the current art:

- **Archetype art needs ~64px.** These are full figures rather than symbols, and
  a figure needs roughly half again the size a symbol does before it stops
  reading as noise. At 44px they were an unidentifiable smudge.
- **Awards and events read at 44–56px** — trophies, laurels, a football with a
  cross are bold enough shapes to survive.
- **Draft crests read down to 34px** — they are simple shields.
- **Dev-trait stars survive at 16–20px**, being geometric marks.

Do not put the archetype or award art in tiny filter chips.

`normal` dev trait is deliberately absent: it is the default state, so marking it
would put a badge on most of the league.

Filenames must match exactly — they are looked up by slug, not by search.

| Folder | What it is | Count |
|---|---|---|
| `archetypes/` | one per player archetype (`run-and-hit.png`, `cannon.png`, …) | 36 — **all present** |
| `devtraits/` | `star` `superstar` `x-factor` (no `normal` — by design) | 3 |
| `awards/` | `mvp` `opoy` `dpoy` `oroy` `droy` `championship-trophy` `afc-trophy` `nfc-trophy` `all-pro` | 9 — **all present** |
| `draft/` | `draft-crest` `on-the-clock` `round-1`…`round-7` `steal` `bust` | 11 — **all present** |
| `events/` | `trade` `signing` `injury` `breakout` `retirement` `milestone` `award` `transaction` | 8 — **all present** |
| `positions/` | `qb` `rb` `wr` `te` `ol` `edge` `idl` `lb` `cb` `s` `k` `p` | 12 — **all present** |
| `empty/` | `empty-fa-pool` `no-trade-market` `offseason-quiet` | 3 — **all present** |

Slugs are kebab-case of the display name: `Run & Hit` → `run-and-hit`. Build them
with `emblemSlug()` from `src/components/common/Emblem.tsx` rather than by hand.
The archetype set is checked 1:1 against `ARCHETYPES_BY_FAMILY` in
`src/domain/attributeModel.ts` — 36 names, 36 files, none missing or orphaned.

Where each set is used: archetypes on the player sheet, awards in the season
awards ceremony, draft crests in the draft room header, events on the hub news
feed, positions on the roster group headers, empty states where a list has
nothing in it.

No real NFL logos, team marks or player likenesses.
