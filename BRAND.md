# Luckey Faraday — the landing page

The link on the @luckeyfaraday X profile goes to one page, and that page has one job. Someone
taps the link and within a few seconds knows who Luckey Faraday is and what he sells. Two things
are for sale, and the page is built around them:

| | Offer | Price | Call to action | Link |
|---|---|---|---|---|
| 1 | **AI Builders with Luckey**, the community on Whop | $29.99/month | Join AI Builders | `whop.com/luckeyfaraday/ai-builders-community-4e/` |
| 2 | **Jarvis AI**, a voice copilot for coding agents | $99 once, founding price (live from `/api/offer`) | Buy Jarvis | `jarvis.luckeysystems.com/#founding` |

Everything else on the page is proof that supports those two offers: the model head-to-heads,
the 68 games, the 49 open-source repos and the open books. None of it gets its own call to action.

## Who the page says he is

First person, in Luckey's voice: *"Hi, I'm Luckey Faraday. I build games, tools and a voice
copilot with AI agents, and I post every receipt: prompts, costs, failures and revenue."*
- **The face is the X avatar**, the blue baby in a tuxedo raising a glass. The visitor just saw
  it on the profile, so seeing it again at the top of the page confirms they're in the right place.
- **LuckeySystems is the label on the work** (the bench, the arcade and Jarvis), not a second
  brand to explain. It's named once, at the end of "The story".
- "Luckey Faraday" is the only name used. Nothing on the page, in the assets or in the metadata
  identifies the person behind the persona. The contact address is the persona's proton.me address.

## Page structure

1. **Intro strip.** Avatar, "Hi, I'm Luckey Faraday." and the one-line receipts pitch. On phones,
   two chips sit under it ("Community · $29.99/mo", "Jarvis AI · $99"), so both offers show on the
   first screen even though the Jarvis panel is lower down.
2. **Two doors (the hero).** The screen splits down the middle. The left half is coral:
   *"Learn how I build."*, three real game screenshots, $29.99/month and **Join AI Builders**.
   The right half is night navy: *"Or use what I built."*, the live Jarvis orb, $99 once and
   **Buy Jarvis**. The headline is the offer: each phrase sits over the product it describes.
   On a 1280×800 laptop, both prices and both buttons are above the fold.
3. **As seen in.** A thin strip right under the doors: New York Post, Tom's Hardware, GuruGamer
   and GameRiv, set as words in the display face (no publisher logos), each linking to its
   article, plus "Read the story ↓". It sits just under the fold on a laptop, as the first thing
   past the offers.
4. **Proof.** "Every build ships with its receipts." The AK-47 four-model clip, the prompt word
   for word, two numbers ($0.38 for the cheapest rifle; Sonnet used 18× Sol's tokens), counts
   (68 games, 27 models, 49 repos, 368 stars) and four game cards that link into the arcade.
5. **AI Builders in full** (coral band). What the community teaches, your first hour, the
   60-second starter walkthrough video, the six things members get, and the price again.
6. **Jarvis in full** (night band). What it does, local by default, pay once, platforms, and the
   price again.
7. **The story** (replaces "Who I am"). *"I started a trend. Activision ended it."* A dated
   timeline in his voice: **Aug 29** I started the AI browser ports (157K views on the first
   post) · **Sep 17** then I started game mixing, Black Ops 2 running natively inside Minecraft
   (862K views) · **Oct 9** Activision DMCA'd me, an ink card with 13 "withheld" post stubs and a
   link to his still-live post about it (203K views) · **Now** I build my own, linking down to
   the two offers. Then four press cards with a verbatim line from each article, and the open
   books (Jarvis $99 total revenue, AI Builders $360 annual run rate) with the X/YouTube links.
8. **Two ways in.** One coral card and one cyan card, the same two calls to action.

## Identity: a fresh start

The cream/ink/gold field-manual look is gone, along with the pixel micro-labels, the "FIG. 00X"
captions, the bordered grid cells and the asterisk mark. The new look gets its personality from
the type and the media:
- **Colour has a job.** Paper white and ink for Luckey himself. **Coral `#ff5a36`** is the
  community (it matches the coral accent already used in the starter walkthrough video).
  **Night `#030a16` and cyan `#62e2ff`** are Jarvis, the colours the Jarvis app and site already
  use, so clicking through to `jarvis.` feels like the same product.
- **One typeface, two voices.** Archivo, with headlines pulled to its narrowest width (62%) at a
  heavy weight with tight leading, and text at normal width. No mono, no tracked capitals.
- **Real media does the decorating:** game screenshots, the bench clip, the real Jarvis orb (cut
  from the HUD orb renderer, with the HUD text removed) and the community's own walkthrough
  video. No textures, constellations or ornaments.
- **OG card** (`assets/luckey/og-card.png`): the two doors with the avatar on the seam, so a
  shared link looks like the page.

## Copy rules

- First person. "I build", "my community", "what I built".
- Every number is real, dated where it can drift, and never rounded up. Small numbers stay in.
  Showing them is the brand.
- Say what something doesn't do as plainly as what it does. For example, Jarvis lists
  "No macOS, ARM or Wayland-only sessions yet" next to its price.

## X profiles

- **@luckeyfaraday:** the profile link goes to this page (`luckeysystems.com`). It's the
  persona's page, and it's where the paid offers live.
- **@luckeysystems:** this account posts the bench runs. Its link should go here too, so every
  post on either account ends up at the two offers. The receipts-style bio and the AK-47
  replacement for the old Athena pin in the earlier draft (`BRAND.md` on the `umbrella` branch)
  still work with that link.
- If a persona domain (such as a luckeyfaraday domain) is ever registered, move this page there
  and keep luckeysystems.com redirecting to it.

## Risks and open items

_My judgment, not rules you've set._
- **DMCA.** @luckeyfaraday has one Activision strike (2026-10-09). The story section names it in
  text and links the press and his own reaction post
  (`x.com/luckeyfaraday/status/2108722723849379986`, live on 2026-11-08), but shows no Call of
  Duty image, clip or asset and links none of the ports. Pastel Nuketown (an Activision map name) and the
  trademarked-character runs (Mario, Mickey, Pokémon, Halo Ringfall) are left off on purpose. The
  **Whop listing itself** still has a "BROWSER PORTS — CALL OF DUTY" tile in its banner, and
  every Join button on this page links to that listing. Swap the tile out on Whop.
- **Press links checked 2026-11-08:** NY Post (Shane Galvin, 2026-10-24), Tom's Hardware (Mark
  Tyson, 2026-09-17), GuruGamer (John Drake, 2026-10-12) and GameRiv (Ali Ahmed Akib,
  2026-10-11). TweakTown's takedown piece is left out because its bot wall blocked every read,
  so it couldn't be checked for the real name. XDA and CharlieIntel couldn't be found.
- **"I started" is his claim.** The press supports the timeline, but no article says in so many
  words that he started either trend. Keep it in the first person.
- **Whop sales copy** still lists Athena material among the member perks. Athena was retired on
  2026-11-07.
- **Hardcoded numbers:** 68 games, 27 models, 49 repos, 368 stars, the $29.99 price and the open
  books, all as of 2026-11-08. The Jarvis price and "N left" update live from `/api/offer`.
  The OG card says $99 and needs re-rendering when the founding price steps up to $199.
- **Open books on a sales page.** $99 and $360 are small. They stay because the receipts are the
  brand and they already appear in the X bio. Delete the `.books` block if they start to hurt sales.
- **Jarvis platforms:** Windows 10/11 and Linux on X11 only. The page says so next to the price,
  so Mac users don't buy and then ask for a refund.

## Keep out

- The real name, anywhere. Every press link was read in full before linking, and none of them
  prints it.
- Call of Duty images, video, screenshots or assets, and links to the ports or to the struck
  posts. The story tells it in text, the press links and the one surviving X post.
- The consulting brand: no link, no mention.
