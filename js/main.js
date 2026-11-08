/* Luckey Faraday — live Jarvis price · scroll-in · reduced motion */

(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- live Jarvis offer ----------
     The markup ships a correct static price. This only refines it as the
     founding tiers step up ($99 -> $199 -> ...) and says how many are left
     at the current price. Any failure leaves the static price alone. */

  const setText = (attr, text) =>
    document.querySelectorAll(`[data-${attr}]`).forEach((el) => { el.textContent = text; });

  fetch("https://jarvis.luckeysystems.com/api/offer", {
    headers: { Accept: "application/json" },
    cache: "no-store",
  })
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((offer) => {
      if (typeof offer.currentPrice !== "number") return;
      setText("jarvis-num", `$${offer.currentPrice}`);
      setText(
        "jarvis-note",
        typeof offer.remainingInTier === "number"
          ? `founding price, ${offer.remainingInTier} left`
          : "standard price"
      );
    })
    .catch(() => {
      /* offline, blocked, or Jarvis is down: the static price stands */
    });

  /* ---------- scroll-in ---------- */

  if (!reduceMotion && "IntersectionObserver" in window) {
    const blocks = document.querySelectorAll(
      ".sec-head, .bench, .counts, .shelf, .offer, .perks, .story-head, .beat, .quotes, .story-foot, .close-doors"
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    blocks.forEach((el) => {
      el.classList.add("rise");
      io.observe(el);
    });
  }

  /* ---------- videos: poster frames for reduced motion, otherwise play only on screen ---------- */

  const videos = document.querySelectorAll("video[autoplay]");
  if (reduceMotion) {
    videos.forEach((v) => {
      v.removeAttribute("autoplay");
      v.pause();
    });
  } else if ("IntersectionObserver" in window) {
    // the orb plays twice on the page; offscreen copies stop decoding
    const vio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.play().catch(() => {});
          else e.target.pause();
        });
      },
      { rootMargin: "200px 0px" }
    );
    videos.forEach((v) => vio.observe(v));
  }
})();
