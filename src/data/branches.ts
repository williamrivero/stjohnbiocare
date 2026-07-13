// ---------------------------------------------------------------------------
// BRANCHES — the single source of truth for all centers across the three
// foundations (St. John Biocare, Core Renal Center, St. Josef Renal Care).
//
// `underConstruction: true` marks a center that is opening this year — it is
// shown on the Centers page with an "Opening this year" badge, but has no
// dedicated page, directions, or appointment slot yet.
//
// Edit ONE object below to update a center everywhere it appears.
// ---------------------------------------------------------------------------

export interface Branch {
  slug: string;
  foundation: string;    // St. John Biocare | Core Renal Center | St. Josef Renal Care Foundation
  name: string;
  area: string;
  address: string;
  phone: string;
  phoneHref: string;
  email: string;
  hours: string;
  services: string[];
  medicalDirector: string;
  headNurse: string;
  stations: string | null;
  transit: string;
  opened?: string;        // ISO 'YYYY-MM-DD' the center opened/joined — powers the "years serving the community" badge
  underConstruction?: boolean;
  inquiriesVia?: string;  // slug of the open center that handles inquiries while this one is under construction
}

export const branches: Branch[] = [
  // ---- St. John Biocare ----
  {
    slug: 'quezon-avenue',
    foundation: 'St. John Biocare',
    name: 'Quezon Avenue',
    area: 'Quezon City',
    address: '2nd Floor, Casman Building, 1198 Quezon Avenue, Barangay Paligsahan, Quezon City 1100',
    phone: '+63 (2) 8375 1575 · +63 (2) 8921 8921 · +63 917 122 6925',
    phoneHref: 'tel:+63283751575',
    email: 'qave.sjbdc@gmail.com',
    hours: 'Mon–Sat, 5:30 AM – 8:00 PM',
    services: ['Hemodialysis'],
    medicalDirector: 'Dr. William Gregory Rivero',
    headNurse: 'Cecilia S. Pajalla',
    stations: null,
    transit: 'Along Quezon Avenue; accessible by bus and jeepney routes and near the MRT-3 Quezon Avenue station.',
    opened: '2011-10-16',
  },
  {
    slug: 'caloocan',
    foundation: 'St. John Biocare',
    name: 'Caloocan',
    area: 'Caloocan City',
    address: '4th Floor, Araneta Square Mall, Samson Road corner Rizal Avenue, Bonifacio, Caloocan City',
    phone: '+63 (2) 8962 0011 · +63 906 219 8578',
    phoneHref: 'tel:+63289620011',
    email: 'sjbdc.caloocan@gmail.com',
    hours: 'Mon–Sat, 5:30 AM – 8:00 PM',
    services: ['Hemodialysis'],
    medicalDirector: 'Dr. Vimar A. Luz',
    headNurse: 'Whimcy Marie C. Calubag & Charlon Jonel Magallanes',
    stations: null,
    transit: 'Inside Araneta Square Mall on Samson Road; near the Monumento transport hub and LRT-1 Monumento station.',
    opened: '2015-06-30',
  },
  {
    slug: 'marikina-san-roque',
    foundation: 'St. John Biocare',
    name: 'Marikina (San Roque)',
    area: 'Marikina City',
    address: '2F WRCC Building 2, #33 Dragon Street corner Gil Fernando Avenue, San Roque, Marikina City 1801',
    phone: '+63 (2) 8633 5404 · +63 917 877 9920',
    phoneHref: 'tel:+63286335404',
    email: 'sjbdc_marikina@yahoo.com',
    hours: 'Mon–Sat, 5:30 AM – 8:00 PM',
    services: ['Hemodialysis'],
    medicalDirector: 'Dr. Romina Navarro-Laguesma',
    headNurse: 'J-cel V. Viernes',
    stations: null,
    transit: 'Along Gil Fernando Avenue, San Roque; accessible by jeepney and tricycle routes.',
    opened: '2013-01-25',
  },

  // ---- Core Renal Center ----
  {
    slug: 'core-renal-santillan',
    foundation: 'Core Renal Center',
    name: 'Santillan (Makati)',
    area: 'Makati City',
    address: '7426 Santillan Street, Ground Floor, EMF Building, Pio del Pilar, Makati City',
    phone: '+63 (2) 8844 2693 · +63 (2) 8844 2696 · +63 (2) 8772 8350 · +63 916 702 3502',
    phoneHref: 'tel:+63288442693',
    email: 'sjbd.corerenalcenter@gmail.com',
    hours: 'Mon–Sat, 5:30 AM – 8:00 PM',
    services: ['Hemodialysis'],
    medicalDirector: 'Dr. Jose Protacio Marcia',
    headNurse: 'Emmanuel N. Salvador',
    stations: null,
    transit: 'In Pio del Pilar, Makati; accessible from Osmeña Highway and South Avenue routes.',
    opened: '2012-10-01',
  },
  {
    slug: 'core-renal-san-isidro',
    foundation: 'Core Renal Center',
    name: 'San Isidro (Makati)',
    area: 'Makati City',
    address: '2853 Finlandia Street, San Isidro, Makati City, Metro Manila',
    phone: '', phoneHref: '', email: '',
    hours: 'Opening this year',
    services: [],
    medicalDirector: '', headNurse: '', stations: null, transit: '',
    underConstruction: true,
    inquiriesVia: 'core-renal-santillan',
  },

  // ---- St. Josef Renal Care Foundation ----
  {
    slug: 'st-josef-marikina',
    foundation: 'St. Josef Renal Care Foundation',
    name: 'Marikina (Concepcion)',
    area: 'Marikina City',
    address: '#24 Bayan Bayanan Avenue, Concepcion Uno, Marikina City',
    phone: '+63 (2) 8253 5790 · +63 917 155 9317',
    phoneHref: 'tel:+63282535790',
    email: 'sjrcf2019@gmail.com',
    hours: 'Mon–Sat, 5:30 AM – 8:00 PM',
    services: ['Hemodialysis'],
    medicalDirector: 'Dr. Madelaine R. Cosing',
    headNurse: 'Jasmine Sañosa',
    stations: null,
    transit: 'Along Bayan Bayanan Avenue, Concepcion Uno; accessible by jeepney and tricycle routes.',
    opened: '2019-07-11',
  },
  {
    slug: 'st-josef-marilao',
    foundation: 'St. Josef Renal Care Foundation',
    name: 'Marilao, Bulacan',
    area: 'Marilao, Bulacan',
    address: '2nd Floor, JJB Beaufort Building, 3019 NLEX Road, Barangay Patubig, Marilao, Bulacan (Region 3)',
    phone: '+63 (2) 8471 9329 · +63 (2) 8462 6150 · +63 995 910 1171 · +63 960 309 6116',
    phoneHref: 'tel:+63284719329',
    email: 'sjrcmarilao@gmail.com',
    hours: 'Mon–Sat, 5:30 AM – 8:00 PM',
    services: ['Hemodialysis'],
    medicalDirector: 'Dr. William Gregory Rivero',
    headNurse: 'Michael Vicente',
    stations: null,
    transit: 'Along the NLEX Road in Barangay Patubig, Marilao; accessible from the NLEX Marilao exit.',
    opened: '2022-11-18',
  },
  {
    slug: 'st-josef-cainta',
    foundation: 'St. Josef Renal Care Foundation',
    name: 'Cainta, Rizal',
    area: 'Cainta, Rizal',
    address: 'Cainta, Rizal — opening this year',
    phone: '', phoneHref: '', email: '',
    hours: 'Opening this year',
    services: [],
    medicalDirector: '', headNurse: '', stations: null, transit: '',
    underConstruction: true,
  },
  {
    slug: 'st-josef-maypajo',
    foundation: 'St. Josef Renal Care Foundation',
    name: 'Maypajo, Caloocan',
    area: 'Caloocan City',
    address: 'Maypajo, Caloocan City — opening this year',
    phone: '', phoneHref: '', email: '',
    hours: 'Opening this year',
    services: [],
    medicalDirector: '', headNurse: '', stations: null, transit: '',
    underConstruction: true,
  },
];

// Centers that are open now (have a page, directions, and take appointments).
export const openBranches = branches.filter((b) => !b.underConstruction);

// The foundations, in display order.
export const foundations = [
  'St. John Biocare',
  'Core Renal Center',
  'St. Josef Renal Care Foundation',
];

export function getBranch(slug: string): Branch | undefined {
  return branches.find((b) => b.slug === slug);
}
