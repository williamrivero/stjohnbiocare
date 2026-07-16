# Downloadable patient companions (HTML → PDF)

Source HTML for the branded patient-companion PDFs served at `/downloads/*.pdf`.
Rendered with WeasyPrint; output goes to `public/downloads/`.

## Build

```bash
pip install weasyprint fonttools
# Fonts: the house type is Noto Sans (headings) + Figtree (body). Install them
# into fontconfig before building (e.g. via @fontsource TTFs), or WeasyPrint
# falls back to a system sans.
python3 downloads/build_pdf.py wgmr-phosphorus-food-guide
```

Each `<div class="page">` is one A4 page. Images resolve from `public/`
(the build sets `base_url` there), so reference them as `images/...`.

## House style

St. John Biocare network brand — forest `#006028` / life `#089838` /
crimson `#E02048`, cream/mist tints. Header carries the three network logos
(St. John Biocare · St. Josef Renal Care · Core Renal Center). Traffic-light
heat-map (crimson = high, amber = moderate, green = low) is intentional.
