# Luckey Faraday — landing page

The page behind the link on the **@luckeyfaraday** X profile, served at
luckeysystems.com. It says who Luckey Faraday is and sells two things:
**AI Builders with Luckey** (the Whop community) and **Jarvis AI** (the voice
copilot). The bench, the arcade and the open-source work are the proof.
See `BRAND.md` for the reasoning, the identity and the open items.

Static site, zero build step, zero dependencies, zero trackers.

## Structure

```
index.html      the landing page (luckeysystems.com)
css/style.css   white / ink, coral for the community, night + cyan for Jarvis; Archivo
js/main.js      live Jarvis price from jarvis.luckeysystems.com/api/offer, scroll-in
assets/luckey/     avatar, favicons, OG card
assets/jarvis-orb/ the Jarvis orb clip (the real orb renderer, recorded on a fixed 30 fps clock)
assets/community/  the Arena FPS starter walkthrough members get
assets/bench/      the AK-47 four-model head-to-head
assets/arcade/     game screenshots from games.luckeysystems.com

jarvis/         jarvis.luckeysystems.com      (nested repo — Jarvis product site)
foundation/     foundation.luckeysystems.com  (nested repo — archive)
docs/           docs.luckeysystems.com        (nested repo — Athena docs, archive)
```

## Develop

Any static server works:

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## Deploy

Push to GitHub and enable Pages (deploy from branch, root). No build needed.
