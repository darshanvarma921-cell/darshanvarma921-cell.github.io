# Gridiron GM — PREVIEW pack (played-engine back-port branch)

This is the FRANCHISE app built from branch engine-backport-round-1
(commit 53d1b47): season mode with the improved played-game engine and
the sim-calibrated franchise preset wired in. Built 3 Sep 2026,
relative paths (works at a user-site root or a project subfolder).

KNOWN PREVIEW QUIRKS (the two gates pending final re-pin):
- The favourite team can feel slightly too beatable (one club scores a
  hair hot vs the balance tolerance).
- Casual difficulty's deep ball is generous (~53% completions).
Neither changes when the branch lands - the pending changes are
test-spec re-pins, not gameplay.

## Upload (2 minutes)
1. New public GitHub repo (e.g. gridiron-gm-preview).
2. Upload the CONTENTS of this folder (not the folder). index.html at
   repo root; include the hidden .nojekyll (Ctrl+H shows hidden files).
   If the uploader caps file counts, upload subfolders across a few
   commits.
3. Settings -> Pages -> Deploy from a branch -> main, / (root) -> Save.
4. ~1 minute later: https://<username>.github.io/<repo>/

Notes: saves are IndexedDB (stay in your browser); the API worker is
not needed; offline caching only works at a root deploy.
