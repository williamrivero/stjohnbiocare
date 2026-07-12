# Vision & Mission — proposed rewrites (pending board approval)

**Status:** Draft for board review. The website currently shows the **existing**
(current) wording below. When the board approves a rewrite, it's a one-line swap
in `src/pages/about.astro` (the `.vm-quote` paragraphs) — and anywhere else the
statements appear.

## Why revise

Standard guidance for writing these two statements:

- **Vision** = the *future you are working toward* — aspirational, outcome/impact-
  focused, timeless, ideally one line. It should describe the *change for patients*,
  not the organization's rank or its day-to-day operations.
- **Mission** = what you do *now*, *for whom*, and *how* — clear, active, present-
  tense, concise.

Issues with the current statements:
- The **vision** ("to become the leading… center and diagnostic facility") is
  inward-facing (being #1) and carries operational detail ("free-standing…
  diagnostic facility") that belongs in the mission.
- The **mission** is a single long run-on and uses dated wording ("manned by").

---

## Current (live on the site)

**Vision**
> "To become the leading free-standing dialysis center and diagnostic facility in
> providing exemplary service to patients with end-stage renal disease."

**Mission**
> "To provide the best-quality expert clinical care through state-of-the-art,
> innovative and affordable hemodialysis treatments and diagnostics manned by
> outstanding and compassionate personnel, responsive to the needs of our patients."

---

## Proposed — Vision

**Recommended (future / impact / concise):**
> "A Philippines where every family facing kidney failure can reach excellent,
> dignified dialysis — no matter what they can afford."

**Alternative (keeps an ambition note):**
> "To be the most trusted name in Filipino dialysis care — so that no family ever
> has to choose between safety and cost."

## Proposed — Mission

**Recommended (what / who / how, active, one clean sentence):**
> "We provide the highest-quality hemodialysis and diagnostic care — expert, safe
> and genuinely affordable — delivered by outstanding, compassionate people who put
> the needs of every patient and family first."

**Alternative (closest to the original wording):**
> "To deliver best-quality, expert clinical care through modern, innovative and
> affordable hemodialysis and diagnostics — provided by outstanding and
> compassionate people, and always responsive to the needs of our patients."

---

## How to apply once approved

Edit the two `<p class="vm-quote">…</p>` lines in the Vision & Mission section of
`src/pages/about.astro`. Keep the surrounding pill labels and definitions as-is.
Then check for the same statements anywhere else before publishing:

```
grep -rn "become the leading\|manned by" src/
```
