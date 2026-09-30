# Motion-capture attribution

`player.glb` is built from Quaternius' Ultimate Modular Men Pack (February 2022), CC0 1.0. The source `.blend`, conversion script, and preserved legacy player asset are in `assets/characters/quaternius/`, `scripts/build-football-player.py`, and `assets/characters/player-legacy.glb`.

Its blocking and stance clips (`block_engage`, `pass_set`, `drive_block`, `beaten`, `three_point`, `crouch`; round 20) are original, hand-keyed in the same script on the Quaternius rig; no third-party motion. Pass rushers' sheds reuse the spin and stiff-arm companion clips below. Its backfield clips (`under_center`, `snap_receive`, `crossover_drop`, `gun_catch`, `handoff_give`, `pitch`; round 22) are original and hand-keyed the same way; `handoff_take` and `pitch_catch` are the pack's own Run legs with hand-keyed arms.

`qb_throw_cmu33_01.glb` is a retargeted, in-place animation derived from Carnegie Mellon Graphics Lab Motion Capture Database, subject 33, trial 01 (football throw/catch), retrieved September 22, 2026. Only frames 1915-2035 (one pass: set, cock, release, follow-through) are used; the feet are re-seated on the ankles in `scripts/build-qb-throw-mocap.py`.

`jump_ball_cmu16_03.glb` is a retargeted, in-place animation derived from Carnegie Mellon Graphics Lab Motion Capture Database, subject 16, trial 03 (“high jump”), retrieved September 22, 2026. Only frames 1915-2035 (one pass: set, cock, release, follow-through) are used; the feet are re-seated on the ankles in `scripts/build-qb-throw-mocap.py`.

`dive_cmu128_10.glb` is a retargeted, in-place animation derived from the same database, subject 128, trial 10 (“run dive over roll run”), retrieved September 22, 2026. Only frames 1915-2035 (one pass: set, cock, release, follow-through) are used; the feet are re-seated on the ankles in `scripts/build-qb-throw-mocap.py`. Only the extension-and-fall window of that trial is used.

`swat_cmu14_08.glb` is a retargeted, in-place animation derived from the same database, subject 14, trial 08 (“jump up to grab, reach for, tiptoe”), retrieved September 23, 2026 (BVH via the cgspeed conversion mirrored at github.com/una-dinosauria/cmu-mocap). Only frames 216-296 (the leap and landing) are used; the right-hand slap off the apex is authored on top of the mocap in `scripts/build-swat-mocap.py`.

CMU permits use in commercial products provided the source data is not resold directly. The original CMU ASF/AMC sources and the reproducible Blender retarget scripts live in `assets/mocap/cmu/`, `scripts/build-jump-ball-mocap.py`, and `scripts/build-dive-catch-mocap.py`.

Both animations’ root travel is intentionally removed. Gridiron GM’s simulation remains responsible for player location, collisions, and catch outcome.

`spin_move_cmu102_12.glb` is a retargeted, in-place animation derived from the Carnegie Mellon Graphics Lab Motion Capture Database, subject 102, trial 12 (“OffensiveMoveSpinLeft”, basketball), retrieved September 23, 2026. Frames 31-141 are used, played into the 0.45 s spin window; the performer's heading is rescaled to one full turn and the ball arm keeps the Quaternius carry pose.

`stiff_arm_cmu144_14.glb` blends the Quaternius carry cycle with the left arm of the same database's subject 144, trial 14 (“Left_Punch_Sequence002”), retrieved September 23, 2026. Frames 1226-1268 are time-warped into a 0.40 s extend-hold-retract and the elbow is locked toward straight. Both are rebuilt by `scripts/build-carrier-moves-mocap.py` from the sources in `assets/mocap/cmu/`.

`mixamo_clips.glb` (R38) holds twelve in-place animations retargeted from Adobe Mixamo (mixamo.com, free with an Adobe ID; royalty-free for use inside games, not for redistribution as standalone animation files), downloaded September 29, 2026: Standard Run (`jog`), Fast Run (`run`, `carry`), Sprint (`sprint`, `carry_sprint`), Football Catch (`catch`), Football Catch variant (`catch_high`), Quarterback Pass (`qb_set`, `qb_throw`), Football Stance (`stance_skill`) and Defender (`pursue`, `dive_tackle`). Root travel is removed (the simulation owns position), each clip's own speed is measured for stride matching, and the carry clips hold the ball arm in an authored tuck. Rebuilt by the fork's `scripts/build-mixamo-clips.py` from the downloaded FBX files.

R42 (September 30, 2026) adds eight clips made with Rokoko Vision (rokoko.com, AI motion capture from video, free tier) from reference game footage, exported on the Mixamo skeleton and retargeted by the same script: a jump cut (`jump_cut`, mirrored `jump_cut_l`), a receiver's route break (`route_break_l`, mirrored `route_break`), a cornerback's backpedal and plant-and-drive (`cb_backpedal`, `cb_break`) and a quarterback rollout (`qb_rollout`, mirrored `qb_rollout_r`). Video capture drifts upward, so those takes are pinned to the ground.
