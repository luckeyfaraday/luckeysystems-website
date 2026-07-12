#!/usr/bin/env bash
# Renders the 1200x630 social-preview cards and copies them into each site.
# Requires Chrome/Chromium and network access (Google Fonts) for all cards
# except jarvis, which uses the local woff2 files in jarvis/fonts/.
set -euo pipefail
cd "$(dirname "$0")"

CHROME="${CHROME:-google-chrome}"

render() {
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars \
    --window-size=1200,630 --force-device-scale-factor=1 \
    --allow-file-access-from-files --virtual-time-budget=12000 \
    --screenshot="$2" "file://$PWD/$1" 2>/dev/null
  echo "rendered $2"
}

render main.html         ../../assets/og-card.png
render foundation.html   ../../foundation/assets/og-card.png
render docs.html         ../../docs/public/og-card.png
render solutions-es.html ../../solutions/assets/og-card-es.png
render solutions-en.html ../../solutions/assets/og-card-en.png
render jarvis.html       ../../jarvis/assets/og-card.png

echo "Done. Remember: docs needs 'npm run build' to copy public/ into dist/."
