# Motion-capture attribution

`player.glb` is built from Quaternius' Ultimate Modular Men Pack (February 2022), CC0 1.0. The source `.blend`, conversion script, and preserved legacy player asset are in `assets/characters/quaternius/`, `scripts/build-football-player.py`, and `assets/characters/player-legacy.glb`.

`qb_throw_cmu33_01.glb` is a retargeted, in-place animation derived from Carnegie Mellon Graphics Lab Motion Capture Database, subject 33, trial 01 (football throw/catch), retrieved September 22, 2026.

`jump_ball_cmu16_03.glb` is a retargeted, in-place animation derived from Carnegie Mellon Graphics Lab Motion Capture Database, subject 16, trial 03 (“high jump”), retrieved September 22, 2026.

`dive_cmu128_10.glb` is a retargeted, in-place animation derived from the same database, subject 128, trial 10 (“run dive over roll run”), retrieved September 22, 2026. Only the extension-and-fall window of that trial is used.

CMU permits use in commercial products provided the source data is not resold directly. The original CMU ASF/AMC sources and the reproducible Blender retarget scripts live in `assets/mocap/cmu/`, `scripts/build-jump-ball-mocap.py`, and `scripts/build-dive-catch-mocap.py`.

Both animations’ root travel is intentionally removed. Gridiron GM’s simulation remains responsible for player location, collisions, and catch outcome.
