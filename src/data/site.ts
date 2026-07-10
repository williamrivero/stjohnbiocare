// ---------------------------------------------------------------------------
// SITE-WIDE settings: organisation details, navigation, contact channels.
// Edit here to change the header menu, footer, phone numbers, etc.
// ---------------------------------------------------------------------------

export const site = {
  name: 'St. John Biocare',
  legalName: 'St. John Biocare & Dialysis Center Foundation, Inc.',
  tagline: 'Kidney care that sees the person, not just the patient.',
  domain: 'https://stjohnbiocare.com',

  // Contact channels — TODO confirm real numbers/links before launch
  phone: '(02) 0000 0000',
  phoneHref: 'tel:+6320000000',
  email: 'hello@stjohnbiocare.com',
  messenger: 'https://m.me/stjohnbiocare',   // TODO real page
  viber: '',                                  // TODO if used
  facebook: '',                               // TODO

  // The BIOCARE values — the brand's own device
  biocare: [
    { letter: 'B', title: 'Best-quality care', text: 'Exemplary clinical care as our first promise.' },
    { letter: 'I', title: 'Innovative technology', text: 'State-of-the-art, modern hemodialysis and diagnostics.' },
    { letter: 'O', title: 'Outstanding service', text: 'Service that goes beyond the expected, every visit.' },
    { letter: 'C', title: 'Compassionate & competent staff', text: 'Skilled people who treat you like family.' },
    { letter: 'A', title: 'Affordable & accurate', text: 'Honest, accessible diagnostics and treatments.' },
    { letter: 'R', title: 'Responsive & adaptive', text: 'We answer the real needs of every client-patient.' },
    { letter: 'E', title: 'Expertise in renal education', text: 'We teach, so patients and families understand.' },
  ],

  // Primary navigation (header)
  nav: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Our Centers', href: '/centers' },
    { label: 'Kidney Health', href: '/kidney-health' },
    { label: 'New Patients', href: '/new-patients' },
    { label: 'Training', href: '/training-academy' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
};
