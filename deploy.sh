#!/bin/bash
#
# Build every worksheet, check it, and publish the site to GitHub Pages.
#
#   ./deploy.sh             pull, build, check and publish
#   ./deploy.sh --preview   build and check, then stage the site without publishing
#
# Targets are DISCOVERED from project.ptx rather than listed here, so adding a
# worksheet means editing project.ptx and adding a row to site/index.html --
# never this script.
#
# What gets published, on the gh-pages branch of origin:
#   /              -> site/index.html  (landing page listing every worksheet)
#   /worksheetNN/  -> that worksheet
# A published site can be read by anyone.
#
# Needs the PreTeXt CLI, Node.js, and Firefox or Chrome for the audit. PreTeXt
# is looked for in .venv/, then ~/.venv/pretext/, then on PATH; set PRETEXT to
# use an executable from somewhere else.
#
set -eu
cd "$(dirname "$0")"

PREVIEW=0
case "${1:-}" in
  "") ;;
  --preview) PREVIEW=1 ;;
  *) echo "usage: ./deploy.sh [--preview]" >&2; exit 2 ;;
esac

fail() { echo "deploy: $*" >&2; exit 1; }

if [ -z "${PRETEXT:-}" ]; then
  if [ -x .venv/bin/pretext ]; then
    PRETEXT=.venv/bin/pretext
  elif [ -x ~/.venv/pretext/bin/pretext ]; then
    PRETEXT=~/.venv/pretext/bin/pretext
  else
    PRETEXT=$(command -v pretext) || fail "PreTeXt not found; see 'Build a worksheet' in README.md"
  fi
fi
command -v node >/dev/null || fail "Node.js not found on PATH; the worksheet theme needs it"

# Only publish what is committed on main, so the site always matches the source.
if [ "$PREVIEW" -eq 0 ]; then
  [ "$(git branch --show-current)" = "main" ] || fail "not on main; publish from main, or use --preview"
  [ -z "$(git status --porcelain)" ] || fail "uncommitted changes; commit them first, or use --preview"
  git pull --ff-only
fi

"$PRETEXT" build --deploys --clean
tools/strip-debug-assets.sh
tools/audit.py

if [ "$PREVIEW" -eq 1 ]; then
  "$PRETEXT" deploy --stage-only
  echo
  echo "Staged in output/stage; nothing was published. To look at it:"
  echo "  python3 -m http.server 8000 --directory output/stage --bind 127.0.0.1"
else
  "$PRETEXT" deploy
fi
