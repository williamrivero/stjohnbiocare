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

  // Partner ambulance service (MOA) — shown on every center's hospital-care card.
  ambulance: {
    name: 'Ace Cor Medical Services, Inc.',
    tagline: 'Land, Sea & Air Ambulance — the pioneer in Philippine ambulance service',
    map: 'https://www.google.com/maps/search/?api=1&query=Ace%20Cor%20Medical%20Services%2C%20756%20Instruccion%20Street%2C%20Sampaloc%2C%20Manila',
    website: '',   // pending confirmation of official site
    phones: [
      { label: '(02) 8749-5621', href: 'tel:+63287495621' },
      { label: '(02) 8749-5477', href: 'tel:+63287495477' },
      { label: '(02) 8749-5476', href: 'tel:+63287495476' },
      { label: '(02) 8781-2280', href: 'tel:+63287812280' },
      { label: '0917 855 6844', href: 'tel:+639178556844' },
      { label: '0917 506 2280', href: 'tel:+639175062280' },
    ],
  },

  // The BIOCARE values — the brand's own device
  biocare: [
    { letter: 'B', title: 'Best-quality & ethical care', text: 'Exemplary clinical care as our first promise, and unwavering integrity as the standard beneath it: informed consent, fair treatment, and honesty with every patient, every time.' },
    { letter: 'I', title: 'Innovative technology', text: 'State-of-the-art, modern hemodialysis equipment and continuously improving clinical protocols.' },
    { letter: 'O', title: 'Outstanding service', text: 'Service that goes beyond the expected, every visit.' },
    { letter: 'C', title: 'Compassionate, competent & professional', text: 'Skilled people who treat you like family, and who hold themselves to a professional standard at every station, every shift.' },
    { letter: 'A', title: 'Affordable & accountable', text: 'Honest, accessible dialysis care, and honest answers about every peso it costs.' },
    { letter: 'R', title: 'Responsive & adaptive', text: 'We answer the real needs of every client-patient.' },
    { letter: 'E', title: 'Expertise in renal education', text: 'We teach patients and families to understand their care, and we train the hemodialysis care teams who will carry that standard into the next generation.' },
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
