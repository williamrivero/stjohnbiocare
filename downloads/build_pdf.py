#!/usr/bin/env python3
"""Render a downloads/*.html companion to public/downloads/*.pdf (WeasyPrint).
Fonts: Noto Sans + Figtree must be installed (see downloads/README).
Usage: python3 downloads/build_pdf.py wgmr-phosphorus-food-guide"""
import sys, os
from weasyprint import HTML
name = sys.argv[1] if len(sys.argv) > 1 else 'wgmr-phosphorus-food-guide'
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src = os.path.join(root, 'downloads', f'{name}.html')
out = os.path.join(root, 'public', 'downloads', f'{name}.pdf')
base = os.path.join(root, 'public')  # so images/... resolve
HTML(filename=src, base_url=base).write_pdf(out)
print('wrote', out, os.path.getsize(out), 'bytes')
