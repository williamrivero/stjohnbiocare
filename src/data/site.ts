// ---------------------------------------------------------------------------
// SITE-WIDE settings: organisation details, navigation, contact channels.
// Edit here to change the header menu, footer, phone numbers, etc.
// ---------------------------------------------------------------------------

export const site = {
  name: 'St. John Biocare',
  legalName: 'St. John Biocare & Dialysis Center Foundation, Inc.',
  tagline: 'Kidney care that sees the person, not just the patient.',
  domain: 'https://stjohnbiocare.com',

  // Head office (administrative)
  headOffice: '#10 CK Building, South A Street corner Alejandro Roces Avenue, Barangay Paligsahan, Quezon City 1103 (beside Creba Center)',

  // Contact channels
  phone: '+63 (2) 8375 1575',
  phoneHref: 'tel:+63283751575',
  email: 'hello@stjohnbiocare.com',
  messenger: '',                              // TODO real page
  viber: '',                                  // TODO if used
  facebook: '',                               // TODO

  // The BIOCARE values — the brand's own device
  biocare: [
    { letter: 'B', title: 'Best-quality & ethical care', text: 'Exemplary clinical care as our first promise, and unwavering integrity as the standard beneath it: informed consent, fair treatment, and honesty with every patient, every time.' },
    { letter: 'I', title: 'Innovative technology', text: 'State-of-the-art, modern hemodialysis equipment and continuously improving clinical protocols.' },
    { letter: 'O', title: 'Outstanding service', text: 'Service that goes beyond the expected, every visit.' },
    { letter: 'C', title: 'Compassionate & competent staff', text: 'Skilled people who treat you like family.' },
    { letter: 'A', title: 'Affordable & accountable', text: 'Honest, accessible dialysis care, and honest answers about every peso it costs.' },
    { letter: 'R', title: 'Responsive & adaptive', text: 'We answer the real needs of every client-patient.' },
    { letter: 'E', title: 'Expertise in renal education', text: 'We teach patients and families to understand their care, and we train the hemodialysis staff who will carry that standard into the next generation.' },
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
