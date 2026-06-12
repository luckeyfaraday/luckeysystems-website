/* ATHENA / LUCKEYSYSTEMS — interactions
   typed terminal demo · copy button · scroll reveals */

(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- copy install command ---------- */

  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const target = document.querySelector(btn.dataset.copy);
      if (!target) return;
      try {
        await navigator.clipboard.writeText(target.textContent.trim());
        btn.textContent = "COPIED ✳";
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = "COPY";
          btn.classList.remove("copied");
        }, 1600);
      } catch {
        /* clipboard unavailable (http, old browser) — select text instead */
        const range = document.createRange();
        range.selectNodeContents(target);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
    });
  });

  /* ---------- scroll reveals ---------- */

  const sections = document.querySelectorAll(".section, .closing, .ticker");
  sections.forEach((el) => el.classList.add("scroll-reveal"));
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          revealObserver.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  sections.forEach((el) => revealObserver.observe(el));

  /* ---------- terminal demo ---------- */

  const screen = document.querySelector("[data-screen]");
  const memCount = document.querySelector("[data-memcount]");
  if (!screen) return;

  // each step: html chunk, typing mode, per-char delay, pause after
  const SCRIPT = [
    { html: '<span class="tc-prompt">$ </span>', mode: "instant", pause: 400 },
    { html: "athena-code", mode: "type", cps: 70, pause: 500 },
    { html: "\n", mode: "instant", pause: 250 },
    { html: '<span class="tc-dim">◆ athena-code v0.2.1 — memory online</span>\n', mode: "instant", pause: 350 },
    { html: '<span class="tc-ok">▸ recall:</span> 3 memories loaded for <span class="tc-dim">~/projects/api-server</span>\n', mode: "instant", pause: 200, mem: 3 },
    { html: '<span class="tc-dim">    · prefers pytest over unittest</span>\n', mode: "instant", pause: 160 },
    { html: '<span class="tc-dim">    · auth tokens rotate via scripts/rotate.sh</span>\n', mode: "instant", pause: 160 },
    { html: '<span class="tc-dim">    · staging deploys from the release branch</span>\n\n', mode: "instant", pause: 600 },
    { html: '<span class="tc-prompt">you ▸ </span>', mode: "instant", pause: 300 },
    { html: "add rate limiting to the /login route", mode: "type", cps: 55, pause: 700 },
    { html: "\n", mode: "instant", pause: 300 },
    { html: '<span class="tc-prompt">athena ▸ </span>', mode: "instant", pause: 200 },
    {
      html:
        "Reading src/routes/auth.ts… last month we used the sliding-window\n" +
        "         limiter in middleware/limits.ts — applying the same pattern here.\n",
      mode: "type", cps: 220, pause: 350,
    },
    { html: '<span class="tc-ok">         ✓ 2 files changed · tests passing (pytest, as you prefer)</span>\n\n', mode: "instant", pause: 800 },
    { html: '<span class="tc-prompt">you ▸ </span>', mode: "instant", pause: 250 },
    { html: '/memory write "login rate limit: 5/min sliding window"', mode: "type", cps: 55, pause: 500 },
    { html: "\n", mode: "instant", pause: 300 },
    { html: '<span class="tc-prompt">athena ▸ </span><span class="tc-ok">saved.</span> I’ll remember that next session.\n', mode: "instant", pause: 200, mem: 4 },
    { html: '<span class="tc-dim">         (and the session after that. and in Athena Desktop. and on your phone.)</span>\n', mode: "instant", pause: 5200 },
  ];

  const cursor = '<span class="tc-cursor"></span>';
  let buffer = "";

  const render = () => { screen.innerHTML = buffer + cursor; };

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  async function typeChunk(step) {
    if (step.mem && memCount) memCount.textContent = step.mem;
    if (reduceMotion || step.mode === "instant") {
      buffer += step.html;
      render();
      await sleep(reduceMotion ? 40 : step.pause);
      return;
    }
    // plain-text typing (only used for chunks without nested tags, or
    // tag-safe: we type character by character but flush whole entities)
    const text = step.html;
    const delay = 1000 / (step.cps || 50);
    for (let i = 0; i < text.length; i++) {
      buffer += text[i];
      render();
      await sleep(delay + Math.random() * delay * 0.6);
    }
    await sleep(step.pause);
  }

  let playing = false;
  async function play() {
    if (playing) return;
    playing = true;
    // loop forever
    for (;;) {
      buffer = "";
      render();
      for (const step of SCRIPT) {
        await typeChunk(step);
      }
      if (memCount) memCount.textContent = "0";
    }
  }

  const termObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          play();
          termObserver.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );
  termObserver.observe(screen);

  /* ---------- footer status easter egg ---------- */

  const status = document.querySelector("[data-status]");
  if (status) {
    const states = [
      "ALL SYSTEMS LOCAL",
      "MEMORY: PERSISTENT",
      "CLOUD DEPENDENCY: NOT FOUND",
      "RECALL CACHE: WARM",
      "UPTIME: AS LONG AS YOURS",
    ];
    let i = 0;
    setInterval(() => {
      i = (i + 1) % states.length;
      status.textContent = states[i];
    }, 4000);
  }
})();
