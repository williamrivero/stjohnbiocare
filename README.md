# St. John Biocare & Dialysis Center Foundation, Inc. — website

The official website for St. John Biocare, built with [Astro](https://astro.build)
and published free on **GitHub Pages**. Warm, human, hopeful — a foundation-run
network of hemodialysis and diagnostic centers across Metro Manila.

## How publishing works

Every time a change is pushed to the `main` branch, GitHub Actions automatically
builds the site and publishes it. There is nothing to run by hand.

## Editing the most common things (no coding needed)

| To change… | Edit this file |
|---|---|
| A center's address, phone, hours, team | `src/data/branches.ts` (one block per center) |
| Site phone/email, menu, BIOCARE values | `src/data/site.ts` |
| Brand colours & fonts | `src/styles/global.css` (top of file) |
| Homepage content | `src/pages/index.astro` |
| A Kidney Health article | `src/pages/kidney-health/*.astro` |

`// TODO` comments mark the details still to be confirmed before launch.

## Running it locally (optional, for developers)

```bash
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # produce the production site in dist/
```

## Structure

```
public/            # CNAME (domain), robots.txt, favicon
src/
  data/            # branches.ts, site.ts  ← edit these
  styles/          # global.css (brand tokens)
  layouts/         # BaseLayout (SEO, header, footer)
  components/      # Header, Footer, BiocareValues
  pages/           # every page & the /centers/[slug] branch template
.github/workflows/ # deploy.yml (auto-publish)
```
