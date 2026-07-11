# St. John Biocare — Site-wide Image Plan & Art Direction

**Goal:** a coherent visual system across every page, produced with the
`williamriveromd-*` graphic skills, re-skinned from their default
renalcarematters clinical-nephrology look to St. John Biocare's brand:
**warm · human · hopeful.**

---

## 0. The non-negotiable brand override (read first)

Every `williamriveromd-*` skill bakes in the **renalcarematters.com** house
style and copyright line. For this site, **every prompt authored from these
skills must be overridden** with:

| Setting | renalcarematters default | **St. John Biocare override** |
|---|---|---|
| Brand / attribution | `renalcarematters.com` | `stjohnbiocare.com` |
| Palette | clinical teal/navy | Forest `#006028` · Life `#089838` · Heart Crimson `#E02048` · Cream `#FBF7F0` · Sand `#F3E9D8` |
| Mood | clinical, textbook | warm, human, hopeful — real people, morning light, soft rounded forms |
| Type feel in-image | Inter/Manrope | Noto Sans headings, Figtree body |
| People | generic | Filipino patients, caregivers, nurses; Metro Manila context |
| Motif | — | the logo's "two figures forming a heart" as a subtle divider/accent |

> **Two visual registers on this site.** Marketing/conversion pages =
> *warm human editorial*. Kidney Health Hub articles = *clean clinical
> education* (this is where the mechanism/algorithm/figure skills shine).
> Keep the two registers distinct but united by palette + type.

> **⚠️ Distinct from renalcarematters.** renalcarematters' signature hero is the
> **circular vignette**. To keep St. John Biocare its own brand, we do **NOT**
> use circular-vignette heroes here. Marketing heroes are **FULL-BLEED
> photographic** — a warm human photo spans the hero, with the HTML headline
> set over a soft forest-green gradient scrim (left third). The
> `hero-vignette` skill is therefore **not used** for heroes on this site;
> heroes are authored in the `infographic-skill` **editorial-photo register**
> (wordless landscape photo, left text-safe zone).

---

## 1. The pipeline (how the skills fit together)

**Stage 1 — author prompts** (one skill per image type):

| Skill | Produces | Use for |
|---|---|---|
| `williamriveromd-hero-vignette` | Circular-vignette hero (2048×2048, people-forward) | **All page heroes** — matches our copy-left / round-image-right hero layout |
| `williamriveromd-infographic-skill` | Editorial poster heroes, **OG share cards**, multi-panel infographics | Per-page OG cards; big educational posters in the Hub |
| `williamriveromd-simple-figure` | One focused figure: step sequence, comparison, panel | "First visit in 4 steps," "HD vs the kidney," diet plates |
| `williamriveromd-biomedical-mechanism-figure` | Organ→cellular mechanism schematic | "What happens in kidney failure," "how dialysis cleans blood" |
| `williamriveromd-algorithm-generator-skill` | AHA-style clinical flowchart | "When do I start dialysis?", "Transfer-of-care flow" |
| `williamriveromd-organ-crosstalk-sigil-graphic` | Minimal monoline organ-crosstalk diagram | Cardiorenal / gut-kidney explainers in Hub articles |

**Stage 2 — assemble & wire** (`williamriveromd-local-image-generator`):
consumes the Stage-1 prompt pack, builds the folder structure, writes
`image-manifest.csv/json`, and appends `og:image` tags. **Adapt its output
targets for this Astro repo** (it defaults to the renalcarematters Downloads
path + guide HTML):

- Generated images → `public/images/{heroes,og,figures}/`
- OG tags → the `image` prop on `<BaseLayout>` per page (not raw HTML)
- Heroes referenced via `<img>` in the page (add `fetchpriority="high"` — it's the LCP)

**Human-in-the-loop:** these skills emit *ChatGPT Image Generator prompts*.
The flow is: I author the prompt → **you paste it into ChatGPT's image
generator** → you drop the result back to me → I optimize (WebP/size),
place it, and wire it in.

---

## 2. Global / site-wide images

| Asset | Spec | Status |
|---|---|---|
| Favicon (32) + Apple touch (180) | PNG, transparent circle | ✅ done (from logo) |
| Default OG card | `og-image.png` 1200×630, cream + logo | ✅ done (fallback for pages without a custom card) |
| Logo mark | `logo.png` 512, transparent | ✅ done |
| "Embrace/heart" divider motif | transparent PNG/SVG, ~1600×200 | ⬜ `infographic-skill` — reusable section divider |

---

## 3. Per-page image plan

Legend — **H** = hero, **OG** = share card, **F** = in-content figure(s).

### Marketing / conversion pages (warm human register)

| Page | H (hero-vignette) | OG (infographic) | In-content figures | Priority |
|---|---|---|---|---|
| **Home** `/` | Warm caregiver + patient moment, morning light (currently the logo — hero image will sit beside/behind it) | Branded card: headline + logo | Optional: BIOCARE values illustrated strip (`infographic`) | **P1** |
| **About** `/about` | Hopeful family/foundation moment; heart motif | "A foundation, born from a family story" card | Timeline 2011→today (`simple-figure`) | **P1** |
| **Services** `/services` | Bright, reassuring clinic-care moment | Services overview card | 5 service mini-panels or icons (`simple-figure`) | P2 |
| **Our Centers** `/centers` | Metro Manila warmth / map feel | "5 centers across Metro Manila" card | Stylized locator map graphic (`infographic`) | **P1** |
| **Branch ×4** `/centers/[slug]` | ⚠️ **REAL photos of each actual center** (AI can't fake these) | Per-branch card (name + area) | — | **P3** (needs photo shoot; branded placeholder meanwhile) |
| **New Patients** `/new-patients` | Reassuring "your first visit" moment | "Starting with us is simpler than you fear" card | **First visit in 4 steps** (`simple-figure`); what-to-bring checklist graphic | **P1** |
| **Training Academy** `/training-academy` | Nurse mentorship / training moment | "We train the nurses others hire" card | Curriculum-at-a-glance panel (`simple-figure`) | P2 |
| **Careers** `/careers` | Warm team / staff moment | Benefits card | Benefits grid graphic (`infographic`) | P2 |
| **Contact** `/contact` | Friendly "talk to us" moment or map | default OG ok | — | P3 |
| **Legal** `/legal/*` | none | default OG | — | — |

### Kidney Health Hub (clinical education register) — the skill showcase

Every Hub article uses this **image set template**:

| Slot | Skill | Example (for "Understanding kidney disease & ESRD") |
|---|---|---|
| Article hero | `hero-vignette` | Hopeful patient portrait, kidney-health theme |
| OG card | `infographic-skill` | Titled share card |
| Mechanism figure | `biomedical-mechanism-figure` | Healthy nephron → failing nephron → what builds up |
| Process figure | `simple-figure` | "How hemodialysis cleans your blood" 3-step |
| Decision figure | `algorithm-generator-skill` | (where relevant) "When is it time to start dialysis?" |
| Crosstalk (opt.) | `organ-crosstalk-sigil-graphic` | Heart–kidney link for cardiorenal topics |

**Current 3 articles → figure assignments:**

1. **Understanding kidney disease & ESRD** — hero + `biomedical-mechanism-figure` (nephron/filtration) + `simple-figure` (CKD stages ladder).
2. **Starting dialysis: what to expect** — hero + `simple-figure` (a session, step by step) + `infographic` (what to bring).
3. **PhilHealth & the cost of dialysis** ★ — hero + `infographic` (how a case rate works, plain-language money flow). *(Highest-traffic page — invest here.)*

**Backlog articles (from blueprint) that will each need the template set:**
Living well on dialysis (diet/work/travel), Transfer of care, FAQ (with
`FAQPage` schema), Vascular access, Dialyzer reuse & infection control.

---

## 4. Technical specs & naming

| Type | Format | Size | Folder | Wiring |
|---|---|---|---|---|
| Page hero | WebP | 1400–2048px (square for vignette) | `public/images/heroes/` | `<img fetchpriority="high">` in page |
| OG card | JPG/PNG | 1200×630 | `public/images/og/` | `image="/images/og/<page>.png"` on `<BaseLayout>` |
| In-content figure | WebP | ~1200px wide | `public/images/figures/` | `<figure><img loading="lazy">…<figcaption>` |

- **Naming:** `<page-slug>-hero.webp`, `<page-slug>-og.png`, `<article-slug>-<figure-key>.webp`.
- **Alt text:** required on every image (accessibility is a core brand value).
- **Optimization:** I convert every ChatGPT output to WebP + correct size before commit (as done with the logo: 925 KB → 211 KB).
- **Optional upgrade:** add `@astrojs/image`/`<Image>` for automatic responsive srcsets once volume grows.

---

## 5. Phased rollout (recommended order)

- **Phase 1 (biggest impact):** Home hero + OG · About hero · Centers hero ·
  New Patients hero + "first visit" figure · the 3 Hub article heroes + the
  PhilHealth/cost infographic. → the pages that convert and rank.
- **Phase 2:** remaining page heroes + per-page OG cards · service & careers
  figures · Hub mechanism/algorithm figures for articles 1–2.
- **Phase 3:** real branch photography (5-center shoot per blueprint) ·
  testimonial portraits (consented) · backlog Hub articles as they're written.

---

## 6. Skill cheat-sheet (which to reach for)

- Need a **page hero**? → `hero-vignette` (warm, people, circular).
- Need a **share card** or **big educational poster**? → `infographic-skill`.
- Explaining **how something works in the body**? → `biomedical-mechanism-figure`.
- **One** clean step/comparison/checklist panel? → `simple-figure`.
- A **decision/flow** ("when do I…", "what if…")? → `algorithm-generator-skill`.
- **Organ-to-organ relationship**? → `organ-crosstalk-sigil-graphic`.
- Ready to **assemble + wire** a batch? → `local-image-generator` (adapted to `public/images/` + BaseLayout `image` prop).

> Reminder: apply the §0 brand override to **every** prompt.
