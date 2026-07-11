# St. John Biocare — OG (social share) image plan · 1200 × 630

Open Graph cards are the preview images shown when a page link is shared on
Facebook, Messenger, Viber, LinkedIn, etc. Spec: **1200 × 630 px** (ratio ~1.91:1),
text baked in, on-brand.

---

## ⭐ Recommended: let me generate these (perfect text + real logo)

OG cards are **text-forward**, and two things make GPT a poor fit here:
1. GPT image tools frequently **misspell or garble text**.
2. They **can't reproduce your exact logo**.

I can generate all 10 cards **programmatically** — crisp, correctly-spelled text,
your **real logo**, identical layout across every page, in a couple of minutes
(the same method as your current `og-image.png`). If you want that, just say
*"generate the OG cards"* and skip the GPT step below.

The GPT prompts are provided below in case you'd rather produce them yourself.

---

## How to use the GPT prompts

1. Paste the **BASE PROMPT** into ChatGPT → Create image.
2. Swap `[HEADLINE]` and `[SUBTITLE]` with the row for the page you're making
   (see the table).
3. Ask for **landscape 1200×630** (or 1.91:1). Regenerate until the **text is
   spelled correctly** and legible.
4. Save as the **filename** in the table, send them to me, and I'll optimize them
   and wire each into its page's `og:image`.

> Tip: leave the **top-left logo area clean** — send me the cards and I'll drop
> your **real logo** on afterward for brand accuracy (optional but recommended).

---

## BASE PROMPT (reuse for every card)

```
Design a clean, premium 1200 x 630 pixel social-share card (Open Graph, landscape
1.91:1 ratio) for "St. John Biocare," a warm Filipino dialysis-care foundation.

Layout:
- Warm cream background (#FBF7F0), with soft rounded organic green shapes bleeding
  in from the corners (forest green #006028 and life green #089838) echoing a
  friendly rounded logo.
- Reserve a small clean area in the TOP-LEFT for a circular logo mark plus the
  wordmark "St. John Biocare" (keep it simple and uncluttered).
- A large, bold, friendly humanist sans-serif HEADLINE in deep forest green
  (#006028), reading EXACTLY: "[HEADLINE]"
- Below it, a smaller subtitle in warm grey, reading EXACTLY: "[SUBTITLE]"
- One small, tasteful heart-crimson (#E02048) accent detail.

Style: flat, modern, editorial medical-brand look; generous spacing; high
legibility at small sizes; warm and hopeful, never clinical-cold. No dark
backgrounds. Optional: a soft, blurred warm care scene occupying only the right
third, kept subtle so text stays readable.

CRITICAL: render ALL text crisply and SPELLED CORRECTLY exactly as quoted, with
no extra or gibberish letters. No watermark.
```

**Negative / avoid:** misspelled or gibberish text; dark or charcoal backgrounds;
clutter; more than the two lines of text; cheesy stock look; tiny unreadable type;
real-looking logos of other brands.

---

## Per-page text & filenames

| Page | Filename | `[HEADLINE]` | `[SUBTITLE]` |
|---|---|---|---|
| Home | `og-home.png` | Kidney care that sees the person | Warm, honest dialysis care across Metro Manila |
| About | `og-about.png` | Born from a family story | A foundation, not a chain · since 2011 |
| Services | `og-services.png` | Everything your dialysis care needs | Hemodialysis · physicians · dietitians · social workers |
| Our Centers | `og-centers.png` | Centers across Metro Manila & Bulacan | Open Mon–Sat from 5:30 AM |
| New Patients | `og-new-patients.png` | Starting is simpler than you fear | Your first visit, step by step |
| Training Academy | `og-training.png` | Hemodialysis Nurse Training Program | For Registered Nurses · now enrolling |
| Careers | `og-careers.png` | Work somewhere that invests in you | Join our growing team |
| Kidney Health Hub | `og-kidney-health.png` | Kidney health, in plain terms | Nephrologist-reviewed patient guides |
| Contact | `og-contact.png` | Talk to us | We're here to help — call, message, or visit |
| PhilHealth & cost (article) | `og-philhealth-cost.png` | PhilHealth & the cost of dialysis | The real numbers, explained honestly |

*(Other Kidney Health articles and legal pages can keep the default logo card, or
tell me which extra ones you want their own card.)*

---

## Where they go / wiring

- Optimized files → `public/images/og/`
- I set each page's card via the `image` prop on `<BaseLayout>` (already supported).
- Recommended file weight: JPG/PNG under ~200 KB each (I'll handle optimization).
