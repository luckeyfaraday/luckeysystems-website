# LuckeySystems Website

Marketing site for **LuckeySystems** and the **Athena** ecosystem —
Athena Desktop, Athena Code, Athena Loops, and Athena Whisper — with a
company section linking the whole family: Jarvis (commercial voice copilot),
Solutions (services), and the Foundation (stewardship, in formation).

Static site, zero build step, zero dependencies, zero trackers.

## Structure

```
index.html      single-page site (luckeysystems.com)
css/style.css   design system ("engineer's field manual": cream / forest green / gold)
js/main.js      typed terminal demo, copy button, scroll reveals
assets/         Athena brand marks (synced from context-workspace/client/src/assets)

jarvis/         jarvis.luckeysystems.com      (nested repo — Jarvis product site)
foundation/     foundation.luckeysystems.com  (nested repo — Foundation vision)
solutions/      solutions.luckeysystems.com   (nested repo — services, ES + /en/)
docs/           docs.luckeysystems.com        (nested repo — Astro Starlight docs)
```

## Develop

Any static server works:

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## Deploy

Push to GitHub and enable Pages (deploy from branch, root). No build needed.

## Design notes

- Palette: paper `#F3EDE3`, ink `#0F1C16`, gold `#D9C48A` (from the Athena brand lockup).
- Type: Bricolage Grotesque (display), IBM Plex Mono (data/terminal), Silkscreen (pixel micro-labels).
- Aesthetic reference: hermes-agent.nousresearch.com — bordered grid cells, tracking labels,
  blinking cursors, terminal demo, single accent color.
