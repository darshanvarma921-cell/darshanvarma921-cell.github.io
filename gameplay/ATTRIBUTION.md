# Motion-capture attribution

`player.glb` is built from Quaternius' Ultimate Modular Men Pack (February 2022), CC0 1.0. The source `.blend`, conversion script, and preserved legacy player asset are in `assets/characters/quaternius/`, `scripts/build-football-player.py`, and `assets/characters/player-legacy.glb`.

`qb_throw_cmu33_01.glb` is a retargeted, in-place animation derived from Carnegie Mellon Graphics Lab Motion Capture Database, subject 33, trial 01 (football throw/catch), retrieved September 22, 2026. Only frames 1915-2035 (one pass: set, cock, release, follow-through) are used; the feet are re-seated on the ankles in `scripts/build-qb-throw-mocap.py`.

`jump_ball_cmu16_03.glb` is a retargeted, in-place animation derived from Carnegie Mellon Graphics Lab Motion Capture Database, subject 16, trial 03 (“high jump”), retrieved September 22, 2026. Only frames 1915-2035 (one pass: set, cock, release, follow-through) are used; the feet are re-seated on the ankles in `scripts/build-qb-throw-mocap.py`.

`dive_cmu128_10.glb` is a retargeted, in-place animation derived from the same database, subject 128, trial 10 (“run dive over roll run”), retrieved September 22, 2026. Only frames 1915-2035 (one pass: set, cock, release, follow-through) are used; the feet are re-seated on the ankles in `scripts/build-qb-throw-mocap.py`. Only the extension-and-fall window of that trial is used.

`swat_cmu14_08.glb` is a retargeted, in-place animation derived from the same database, subject 14, trial 08 (“jump up to grab, reach for, tiptoe”), retrieved September 23, 2026 (BVH via the cgspeed conversion mirrored at github.com/una-dinosauria/cmu-mocap). Only frames 216-296 (the leap and landing) are used; the right-hand slap off the apex is authored on top of the mocap in `scripts/build-swat-mocap.py`.

CMU permits use in commercial products provided the source data is not resold directly. The original CMU ASF/AMC sources and the reproducible Blender retarget scripts live in `assets/mocap/cmu/`, `scripts/build-jump-ball-mocap.py`, and `scripts/build-dive-catch-mocap.py`.

Both animations’ root travel is intentionally removed. Gridiron GM’s simulation remains responsible for player location, collisions, and catch outcome.

`spin_move_cmu102_12.glb` is a retargeted, in-place animation derived from the Carnegie Mellon Graphics Lab Motion Capture Database, subject 102, trial 12 (“OffensiveMoveSpinLeft”, basketball), retrieved September 23, 2026. Frames 31-141 are used, played into the 0.45 s spin window; the performer's heading is rescaled to one full turn and the ball arm keeps the Quaternius carry pose.

`stiff_arm_cmu144_14.glb` blends the Quaternius carry cycle with the left arm of the same database's subject 144, trial 14 (“Left_Punch_Sequence002”), retrieved September 23, 2026. Frames 1226-1268 are time-warped into a 0.40 s extend-hold-retract and the elbow is locked toward straight. Both are rebuilt by `scripts/build-carrier-moves-mocap.py` from the sources in `assets/mocap/cmu/`.
