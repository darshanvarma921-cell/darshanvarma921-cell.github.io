Generated team marks - do not edit by hand.

Built by scripts/prepare-team-logos.ps1 from the full-resolution source renders,
which are NOT kept in this repo. The script knocks the background out to alpha,
crops to the mark, and re-centres every team at the same optical scale so the set
reads consistently.

  <CODE>.png      256px  hero marks, anything rendered above ~48px
  <CODE>-sm.png    96px  list rows, chips, nav

Any team without a file falls back to its text monogram automatically
(src/components/common/TeamMark.tsx). NYJ is currently missing artwork.

To rebuild after adding or replacing a source render:
  pwsh scripts/prepare-team-logos.ps1 -SourceDir "<folder of renders>" -Force

These are original redesigns for an unofficial fan project - not NFL artwork,
and not affiliated with or endorsed by the NFL.
