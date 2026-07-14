#!/usr/bin/env python3
"""
Builds the downloadable invitation letter for the St. John Biocare
Hemodialysis Nurse Training Program.

All programme facts below are taken verbatim from
https://stjohnbiocare.com/training-academy/ — when a new batch opens,
edit the BATCH / FEE constants and re-run. Nothing else needs to change.

    python3 make_invitation_letter.py

Output: hd-nurse-training-invitation.pdf  (A4, print-ready)
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, Color
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_JUSTIFY
from reportlab.platypus import Paragraph, Frame
from reportlab.pdfgen import canvas as rl_canvas
from reportlab.lib.utils import ImageReader
import os

# ── Brand ────────────────────────────────────────────────────────────────────
FOREST  = HexColor('#006028')   # ring of the logo
LIFE    = HexColor('#089838')   # the green figure
CRIMSON = HexColor('#E02048')   # the crimson figure
INK     = HexColor('#222A24')
SOFT    = HexColor('#5F6B60')
SAND    = HexColor('#F3E9D8')
MIST    = HexColor('#E8F1EA')
CREAM   = HexColor('#FBF7F0')
LINE    = HexColor('#E3E0D8')

# ── Programme details (source: /training-academy) ────────────────────────────
ORG_LEGAL = "St. John Biocare & Dialysis Center Foundation, Inc."
BATCH       = "20 July – 28 August 2026"
DURATION    = "6 weeks"
DAYS        = "Monday to Friday"
TIME        = "8:00 AM – 4:00 PM"
FORMAT      = "On-site lectures + supervised hands-on clinical exposure"
ATTIRE      = "Emerald-green scrub suit"
VENUE_NAME  = "St. John Biocare — Quezon Avenue (Main Branch)"
VENUE_ADDR  = "2nd Floor, 1198 Casman Building, Barangay Paligsahan, Quezon Avenue, Quezon City 1100"
FEE         = "PHP 14,000"
FEE_NOTE    = ("Inclusive of the HD in-house manual and consumables (gloves and N95 masks). "
               "Payable in cash or by installment.")
DOWN        = "PHP 7,000 (50%) on or before the training start"
BALANCE     = "Remaining 50% during the training period, at least two weeks before it ends"
BANK        = ("Bank transfer — PBCOM, Quezon Avenue Branch<br/>"
               "Account name: St. John Biocare and Dialysis Center Foundation, Inc.<br/>"
               "Savings account no.: 235 10 000905 3<br/>"
               "<i>Kindly send your proof of payment after depositing.</i><br/>"
               "You may also pay at the cashier on your training start date.")
PHONE1 = "+63 (2) 8375 1575"
PHONE2 = "+63 (2) 8921 8921"
FB     = "facebook.com/sjbdc"
WEB    = "stjohnbiocare.com/training-academy"
SIGNATORY = "Ms. Mercy J. Alhambra"
SIG_TITLE = "Nursing Director & Head Faculty"

LEARN = [
    "Patient care and assessment",
    "Basic hemodialysis skills",
    "Vascular access safeguarding",
    "Infection-control protocols",
]
REQS = [
    "Updated résumé",
    "Photocopy of PRC ID",
    "Updated Hepatitis profile (Anti-HCV, Anti-HBs, HBsAg)",
    "Vaccination records (COVID-19)",
]

HERE = os.path.dirname(os.path.abspath(__file__))
LOGO = os.environ.get("SJB_LOGO", os.path.join(HERE, "..", "public", "images", "logos", "logo-sjbdc.png"))
SIGN = os.environ.get("SJB_SIGN", os.path.join(HERE, "..", "public", "images", "signature-mja.png"))
OUT  = os.path.join(HERE, "hd-nurse-training-invitation.pdf")

W, H = A4
M = 16 * mm  # page margin


def style(name, size=9.6, leading=14, color=INK, **kw):
    return ParagraphStyle(name, fontName='Helvetica', fontSize=size,
                          leading=leading, textColor=color, **kw)


BODY   = style('body', 9.3, 13.4, INK, alignment=TA_JUSTIFY)
LEAD   = style('lead', 10.2, 14, INK)
SMALL  = style('small', 8.2, 11.4, SOFT)
LABEL  = ParagraphStyle('label', fontName='Helvetica-Bold', fontSize=7.6, leading=10,
                        textColor=FOREST, spaceAfter=1)
VALUE  = style('value', 9.0, 12.2, INK)
ITEM   = style('item', 9.0, 12.6, INK)


def draw_para(c, text, st, x, y, w):
    """Draw a paragraph with its top-left at (x, y). Returns the new y."""
    p = Paragraph(text, st)
    _, h = p.wrap(w, H)
    p.drawOn(c, x, y - h)
    return y - h


def section_rule(c, x, y, w, label):
    c.setFont('Helvetica-Bold', 8)
    c.setFillColor(FOREST)
    c.drawString(x, y, label.upper())
    tw = c.stringWidth(label.upper(), 'Helvetica-Bold', 8)
    c.setStrokeColor(LINE)
    c.setLineWidth(0.6)
    c.line(x + tw + 6, y + 2.6, x + w, y + 2.6)
    return y - 12


RECIP_H = 19 * mm   # height reserved for date + name + 2 address lines


def build(out=OUT, recipient=None):
    c = rl_canvas.Canvas(out, pagesize=A4)
    c.setTitle("Invitation — Hemodialysis Nurse Training Program | St. John Biocare")
    c.setAuthor(ORG_LEGAL)
    c.setSubject("Hemodialysis Nurse Training Program — %s" % BATCH)

    # ── Letterhead ───────────────────────────────────────────────────────────
    c.setFillColor(FOREST)
    c.rect(0, H - 4 * mm, W, 4 * mm, stroke=0, fill=1)   # top brand bar

    top = H - 4 * mm - 9 * mm
    logo_size = 23 * mm
    if os.path.exists(LOGO):
        c.drawImage(ImageReader(LOGO), M, top - logo_size + 4 * mm,
                    width=logo_size, height=logo_size,
                    preserveAspectRatio=True, mask='auto')

    tx = M + logo_size + 7 * mm
    c.setFillColor(FOREST)
    c.setFont('Helvetica-Bold', 15.5)
    c.drawString(tx, top - 4 * mm, "St. John Biocare")
    c.setFillColor(SOFT)
    c.setFont('Helvetica', 8.4)
    c.drawString(tx, top - 9.4 * mm, "& Dialysis Center Foundation, Inc.")
    c.setFillColor(CRIMSON)
    c.setFont('Helvetica-Bold', 8.2)
    c.drawString(tx, top - 15.4 * mm, "TRAINING ACADEMY")
    c.setFillColor(SOFT)
    c.setFont('Helvetica', 7.6)
    c.drawRightString(W - M, top - 4 * mm, PHONE1 + "  ·  " + PHONE2)
    c.drawRightString(W - M, top - 8.4 * mm, WEB)
    c.drawRightString(W - M, top - 12.8 * mm, FB)

    y = top - logo_size - 1 * mm
    c.setStrokeColor(LINE)
    c.setLineWidth(0.8)
    c.line(M, y, W - M, y)
    y -= 5.5 * mm

    CW = W - 2 * M  # content width

    # ── Title ────────────────────────────────────────────────────────────────
    c.setFillColor(INK)
    c.setFont('Helvetica-Bold', 17)
    c.drawString(M, y, "An invitation to train with us")
    y -= 6.6 * mm
    c.setFillColor(CRIMSON)
    c.setFont('Helvetica-Bold', 10.6)
    c.drawString(M, y, "Hemodialysis Nurse Training Program  ·  For Registered Nurses")
    y -= 6 * mm

    # ── Recipient block (blank in the template; stamped in the browser) ──────
    RECIP_TOP = y                      # anchor: first line of the recipient block
    if recipient:
        c.setFillColor(SOFT)
        c.setFont('Helvetica', 8.6)
        c.drawString(M, y, recipient.get('date', ''))
        y -= 4.8 * mm
        c.setFillColor(INK)
        c.setFont('Helvetica-Bold', 9.6)
        c.drawString(M, y, recipient.get('name', ''))
        y -= 4.4 * mm
        c.setFillColor(SOFT)
        c.setFont('Helvetica', 8.8)
        for line in recipient.get('address', [])[:2]:
            c.drawString(M, y, line)
            y -= 4.2 * mm
        y -= 1.2 * mm
    else:
        y -= RECIP_H                   # reserve the space, leave it blank

    SALUT_Y = y                        # anchor: the "Dear ..." line
    c.setFillColor(INK)
    c.setFont('Helvetica-Bold', 10.2)
    if recipient is None:
        pass                           # template: salutation stamped in the browser
    else:
        c.drawString(M, y, recipient.get('salutation', 'Dear Colleague,'))
    y -= 5.5 * mm

    y = draw_para(c,
        "We would like to invite you to join the <b>Hemodialysis Nurse Training Program</b> of "
        "St. John Biocare — a registered foundation caring for patients with kidney failure across "
        "Metro Manila and Bulacan since 2011. Over <b>six weeks</b>, our senior renal nurses and clinical "
        "leads will build your hemodialysis skills from the ground up; no prior dialysis experience is "
        "required. Classroom lectures are paired with supervised, hands-on exposure in a working dialysis "
        "unit, so you finish genuinely ready to care for patients. On successful completion you receive a "
        "<b>Certificate of Training</b>, and many of our graduates go on to join the St. John Biocare family.",
        BODY, M, y, CW) - 3.5 * mm

    # ── Batch highlight band ─────────────────────────────────────────────────
    band_h = 15 * mm
    c.setFillColor(SAND)
    c.roundRect(M, y - band_h, CW, band_h, 3 * mm, stroke=0, fill=1)
    c.setFillColor(SOFT)
    c.setFont('Helvetica-Bold', 7.4)
    c.drawString(M + 6 * mm, y - 6 * mm, "NEXT BATCH — NOW ENROLLING")
    c.setFillColor(FOREST)
    c.setFont('Helvetica-Bold', 14)
    c.drawString(M + 6 * mm, y - 12.6 * mm, BATCH)
    c.setFillColor(SOFT)
    c.setFont('Helvetica', 9)
    c.drawRightString(W - M - 6 * mm, y - 8.2 * mm, "%s  ·  %s" % (DURATION, DAYS))
    c.drawRightString(W - M - 6 * mm, y - 12.8 * mm, TIME)
    y -= band_h + 5 * mm

    # ── Two-column detail grid ───────────────────────────────────────────────
    colw = (CW - 8 * mm) / 2
    left_x, right_x = M, M + colw + 8 * mm

    ly = section_rule(c, left_x, y, colw, "Programme")
    for lab, val in [("Format", FORMAT), ("Attire", ATTIRE),
                     ("Venue", "%s<br/>%s" % (VENUE_NAME, VENUE_ADDR))]:
        ly = draw_para(c, lab, LABEL, left_x, ly, colw)
        ly = draw_para(c, val, VALUE, left_x, ly, colw) - 2.4 * mm

    ly = section_rule(c, left_x, ly - 0.5 * mm, colw, "What you'll learn")
    for it in LEARN:
        c.setFillColor(LIFE)
        c.circle(left_x + 1.4 * mm, ly - 1.6 * mm, 0.9 * mm, stroke=0, fill=1)
        ly = draw_para(c, it, ITEM, left_x + 5 * mm, ly + 0.4 * mm, colw - 5 * mm) - 1.4 * mm

    ly = section_rule(c, left_x, ly - 2.5 * mm, colw, "Requirements")
    for it in REQS:
        c.setFillColor(LIFE)
        c.circle(left_x + 1.4 * mm, ly - 1.6 * mm, 0.9 * mm, stroke=0, fill=1)
        ly = draw_para(c, it, ITEM, left_x + 5 * mm, ly + 0.4 * mm, colw - 5 * mm) - 1.4 * mm
    ly = draw_para(c, "<i>Please bring the originals on your first day.</i>",
                   SMALL, left_x, ly - 1.5 * mm, colw)

    ry = section_rule(c, right_x, y, colw, "Training fee")
    c.setFillColor(CRIMSON)
    c.setFont('Helvetica-Bold', 15)
    c.drawString(right_x, ry - 5 * mm, FEE)
    ry -= 9.6 * mm
    ry = draw_para(c, FEE_NOTE, SMALL, right_x, ry, colw) - 2.4 * mm
    ry = draw_para(c, "Down payment", LABEL, right_x, ry, colw)
    ry = draw_para(c, DOWN, VALUE, right_x, ry, colw) - 2.2 * mm
    ry = draw_para(c, "Balance", LABEL, right_x, ry, colw)
    ry = draw_para(c, BALANCE, VALUE, right_x, ry, colw) - 3.2 * mm

    ry = section_rule(c, right_x, ry, colw, "How to pay")
    ry = draw_para(c, BANK, SMALL, right_x, ry, colw)

    y = min(ly, ry) - 4 * mm

    # ── How to enrol ─────────────────────────────────────────────────────────
    box_h = 14 * mm
    c.setFillColor(MIST)
    c.roundRect(M, y - box_h, CW, box_h, 3 * mm, stroke=0, fill=1)
    c.setFillColor(FOREST)
    c.setFont('Helvetica-Bold', 9.4)
    c.drawString(M + 6 * mm, y - 5.6 * mm, "To reserve your slot")
    c.setFillColor(INK)
    c.setFont('Helvetica', 8.8)
    c.drawString(M + 6 * mm, y - 10.2 * mm,
                 "Register online at %s, call %s or %s," % (WEB, PHONE1, PHONE2))
    c.drawString(M + 6 * mm, y - 14.2 * mm,
                 "or message us on %s. Slots are limited and filled on a first-come basis." % FB)
    y -= box_h + 4 * mm

    # ── Sign-off ─────────────────────────────────────────────────────────────
    y = draw_para(c,
        "We look forward to training with you, and to the patients you will one day care for.",
        BODY, M, y, CW) - 4 * mm

    c.setFillColor(INK)
    c.setFont('Helvetica', 9.4)
    c.drawString(M, y, "Warmly,")
    y -= 5 * mm

    # Wet signature, sitting on the rule.
    if os.path.exists(SIGN):
        sig = ImageReader(SIGN)
        sw, sh = sig.getSize()
        sig_w = 44 * mm
        sig_h = sig_w * sh / sw
        c.drawImage(sig, M - 1.5 * mm, y - sig_h + 1.5 * mm,
                    width=sig_w, height=sig_h,
                    preserveAspectRatio=True, mask='auto')
        y -= sig_h - 4.5 * mm
    else:
        y -= 4.5 * mm

    c.setStrokeColor(LINE)
    c.setLineWidth(0.7)
    c.line(M, y + 1 * mm, M + 62 * mm, y + 1 * mm)
    y -= 5.8 * mm
    c.setFillColor(INK)
    c.setFont('Helvetica-Bold', 10)
    c.drawString(M, y, SIGNATORY)
    y -= 4.2 * mm
    c.setFillColor(SOFT)
    c.setFont('Helvetica', 8.4)
    c.drawString(M, y, SIG_TITLE)

    # ── Footer ───────────────────────────────────────────────────────────────
    c.setStrokeColor(LINE)
    c.setLineWidth(0.6)
    c.line(M, 13.5 * mm, W - M, 13.5 * mm)
    c.setFillColor(SOFT)
    c.setFont('Helvetica', 7)
    c.drawString(M, 9.6 * mm,
                 "%s  ·  Quezon Avenue, Quezon City  ·  %s" % (ORG_LEGAL, PHONE1))
    c.drawRightString(W - M, 9.6 * mm, WEB)
    c.setFillColor(FOREST)
    c.rect(0, 0, W, 3 * mm, stroke=0, fill=1)

    c.showPage()
    c.save()
    return {'recipTop': round(RECIP_TOP, 2), 'salutY': round(SALUT_Y, 2),
            'left': round(M, 2), 'pageW': round(W, 2), 'pageH': round(H, 2)}


if __name__ == "__main__":
    import json, datetime

    # 1. Blank template — the browser stamps the recipient block onto this.
    tpl = os.path.join(HERE, "hd-nurse-training-invitation-template.pdf")
    anchors = build(tpl, recipient=None)

    # 2. Generic letter — for anyone who just wants the plain download.
    build(OUT, recipient={
        'date': '', 'name': '', 'address': [], 'salutation': 'Dear Colleague,',
    })

    with open(os.path.join(HERE, "letter-anchors.json"), "w") as f:
        json.dump(anchors, f, indent=2)

    print("template :", tpl)
    print("generic  :", OUT)
    print("anchors  :", anchors)
