# Invitation letter generator

Builds the downloadable invitation letter for the Hemodialysis Nurse Training
Program, in two forms:

| File | Purpose |
|---|---|
| `hd-nurse-training-invitation.pdf` | The general letter — linked directly from the Training Academy page. |
| `hd-nurse-training-invitation-template.pdf` | Identical, but with the recipient block left blank. The browser stamps the visitor's name, address, date and salutation onto this with pdf-lib, so a personalised letter is produced entirely on their own device — nothing is uploaded. |

Both are signed by the Nursing Director (`public/images/signature-mja.png`).

## Updating for a new batch

1. Edit the constants at the top of `make_invitation_letter.py`
   (`BATCH`, `FEE`, `DOWN`, `BALANCE`, requirements, etc.).
2. Run it, then copy both PDFs into `public/downloads/`:

   ```bash
   pip install reportlab pillow
   cd tools && python3 make_invitation_letter.py
   cp hd-nurse-training-invitation*.pdf ../public/downloads/
   ```

3. The script prints `letter-anchors.json`. If the layout above the recipient
   block changed, copy the new `recipTop` / `salutY` / `left` values into the
   `ANCHOR` constant in `src/pages/training-academy.astro`, or the stamped text
   will land in the wrong place.
