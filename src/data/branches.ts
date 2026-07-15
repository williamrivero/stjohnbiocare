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
  mapPin?: string;        // exact 'lat,lng' drop-pin (from Google Maps right-click) — overrides the address-based map
  underConstruction?: boolean;
  inquiriesVia?: string;  // slug of the open center that handles inquiries while this one is under construction
  partnerHospitals?: PartnerHospital[];          // hospitals this center holds a signed MOA with
  // Used only where no MOA is signed yet. These are hospitals near the center — NOT
  // partners — so the page must never imply an agreement exists.
  nearbyHospitals?: PartnerHospital[];
  moaPending?: boolean;                          // an MOA is under negotiation
  affiliatedNephrologists?: AffiliatedDoctor[];  // nephrologists affiliated with this center
}

// A hospital this center has a Memorandum of Agreement with, so that admission,
// emergency transfer or specialist care can be arranged without starting over.
export interface PartnerHospital {
  name: string;
  area?: string;
  map?: string;
  covers?: string;   // e.g. 'Admission · Emergency transfer' — leave undefined until confirmed
}

export interface AffiliatedDoctor {
  name: string;
  hospitals?: DoctorHospital[];  // where they admit/consult — rendered under the name
}

export interface DoctorHospital {
  name: string;
  map?: string;
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
    partnerHospitals: [
      { name: 'Capitol Medical Center', area: 'Quezon City', covers: 'Emergency · Specialist referral', map: 'https://maps.app.goo.gl/nar5okrpM3joK1MKA' },
    ],
    affiliatedNephrologists: [
      {
        name: 'Dr. Ma. Kristina Alolod',
        hospitals: [
          { name: "St. Luke's Medical Center — Quezon City", map: 'https://maps.app.goo.gl/98Nx1RikD3w7n8fcA' },
          { name: "Our Lady of Lourdes Hospital", map: 'https://www.google.com/maps/search/?api=1&query=Our%20Lady%20of%20Lourdes%20Hospital%2C%2046%20P.%20Sanchez%20Street%2C%20Sta.%20Mesa%2C%20Manila' },
          { name: "Providence Hospital", map: 'https://www.google.com/maps/search/?api=1&query=Providence%20Hospital%2C%201515%20Quezon%20Avenue%2C%20Diliman%2C%20Quezon%20City' },
        ],
      },
      {
        name: 'Dr. Aina Bautista-Duque',
        hospitals: [
          { name: "Capitol Medical Center", map: 'https://maps.app.goo.gl/mgU3ML6UyyXR27a79' },
        ],
      },
      {
        name: 'Dr. William Gregory Rivero',
        hospitals: [
          { name: "Fe Del Mundo Medical Center", map: 'https://maps.app.goo.gl/sn9KWrpeQjViweZf9' },
        ],
      },
      {
        name: 'Dr. Romina Navarro-Laguesma',
        hospitals: [
          { name: "University of Santo Tomas Hospital", map: 'https://maps.app.goo.gl/m3ZVuFR1ftrrfvaZ9' },
        ],
      },
      {
        name: 'Dr. Maddie Cosing-Rosales',
        hospitals: [
          { name: "St. Luke's Medical Center — Quezon City", map: 'https://maps.app.goo.gl/98Nx1RikD3w7n8fcA' },
        ],
      },
    ],
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
    // Caloocan's MOA is still being negotiated. Until it is signed we list nearby
    // hospitals ONLY — where this center's own nephrologists admit and consult — and
    // the page states plainly that no agreement is in place yet.
    moaPending: true,
    nearbyHospitals: [
      { name: 'MCU Hospital — Filemon D. Tanchoco Sr. Medical Foundation', area: 'Caloocan City', map: 'https://maps.app.goo.gl/UuHZr2RCVpyrvY2z8' },
      { name: 'Fatima University Medical Center — Valenzuela', area: 'Valenzuela City', map: 'https://maps.app.goo.gl/TyHHTeSJLYbYGztX8' },
    ],
    affiliatedNephrologists: [
      {
        name: 'Dr. Reina Antonio',
        hospitals: [
          { name: "MCU Hospital — Filemon D. Tanchoco Sr. Medical Foundation", map: 'https://maps.app.goo.gl/UuHZr2RCVpyrvY2z8' },
          { name: "Fatima University Medical Center — Valenzuela", map: 'https://maps.app.goo.gl/TyHHTeSJLYbYGztX8' },
        ],
      },
      {
        name: 'Dr. Vimar A. Luz',
        hospitals: [
          { name: "St. Luke's Medical Center — Quezon City", map: 'https://maps.app.goo.gl/98Nx1RikD3w7n8fcA' },
          { name: "St. Luke's Medical Center — Global City", map: 'https://maps.app.goo.gl/2K1ee2Wt3Yu2hheu8' },
        ],
      },
    ],
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
    partnerHospitals: [
      { name: 'Amang Rodriguez Memorial Medical Center', area: 'Marikina City', covers: 'Emergency · Specialist referral', map: 'https://maps.app.goo.gl/PuxPgB4PjQ7qhoJHA' },
    ],
    affiliatedNephrologists: [
      {
        name: 'Dr. Romina Navarro-Laguesma',
        hospitals: [
          { name: "University of Santo Tomas Hospital", map: 'https://maps.app.goo.gl/m3ZVuFR1ftrrfvaZ9' },
        ],
      },
      {
        name: 'Dr. Mary Grace Gran',
        hospitals: [
          { name: "Marikina St. Vincent General Hospital", map: 'https://www.google.com/maps/search/?api=1&query=Marikina%20St.%20Vincent%20General%20Hospital%2C%2035%20Bayan-Bayanan%20Avenue%2C%20Marikina%20City' },
          { name: "St. Anthony Medical Center of Marikina", map: 'https://www.google.com/maps/search/?api=1&query=St.%20Anthony%20Medical%20Center%20of%20Marikina%2C%2032%20Sta.%20Ana%20Extension%20corner%20Betelnut%20Street%2C%20San%20Roque%2C%20Marikina%20City' },
          { name: "Metro Antipolo Hospital and Medical Center", map: 'https://www.google.com/maps/search/?api=1&query=Metro%20Antipolo%20Hospital%20and%20Medical%20Center%2C%201348%20Marikina-Infanta%20Highway%2C%20Barangay%20Mayamot%2C%20Antipolo%2C%20Rizal' },
        ],
      },
      {
        name: 'Dr. Alwyn Santos',
        hospitals: [
          { name: "Marikina Valley Medical Center", map: 'https://www.google.com/maps/search/?api=1&query=Marikina%20Valley%20Medical%20Center%2C%20Sumulong%20Highway%20corner%20Aguinaldo%20Street%2C%20Marikina%20City' },
        ],
      },
      {
        name: 'Dr. Pia Gabrielle S. Hugo',
        hospitals: [
          { name: "Antipolo Centro De Medikal", map: 'https://www.google.com/maps/search/?api=1&query=Antipolo%20Centro%20De%20Medikal%2C%20234%20Sumulong%20Highway%2C%20Antipolo' },
          { name: "Cornel Medical Center", map: 'https://www.google.com/maps/search/?api=1&query=Cornel%20Medical%20Center%2C%20Masinag%2C%20Marcos%20Highway%2C%20Antipolo%20City' },
          { name: "Fatima University Medical Center — Antipolo", map: 'https://www.google.com/maps/search/?api=1&query=Fatima%20University%20Medical%20Center%2C%2023%20Sumulong%20Highway%2C%20Sta.%20Cruz%2C%20Antipolo%20City' },
        ],
      },
    ],
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
    partnerHospitals: [
      { name: "St. Luke's Medical Center — Global City (BGC)", area: 'Taguig City', covers: 'Emergency · Specialist referral', map: 'https://maps.app.goo.gl/2K1ee2Wt3Yu2hheu8' },
    ],
    affiliatedNephrologists: [
      {
        name: 'Dr. Vimar A. Luz',
        hospitals: [
          { name: "St. Luke's Medical Center — Global City", map: 'https://maps.app.goo.gl/2K1ee2Wt3Yu2hheu8' },
        ],
      },
      {
        name: 'Dr. Jose Protacio Marcia',
        hospitals: [
          { name: "St. Luke's Medical Center — Global City", map: 'https://maps.app.goo.gl/2K1ee2Wt3Yu2hheu8' },
        ],
      },
    ],
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
    medicalDirector: 'Dr. Maddie Cosing-Rosales',
    headNurse: 'Jasmine Sañosa',
    stations: null,
    transit: 'Along Bayan Bayanan Avenue, Concepcion Uno; accessible by jeepney and tricycle routes.',
    opened: '2019-07-11',
    partnerHospitals: [
      { name: 'St. Josef Hospital — Concepcion', area: 'Marikina City', covers: 'Emergency · Specialist referral', map: 'https://maps.app.goo.gl/gvaEYywRoT9KYxG68' },
    ],
    affiliatedNephrologists: [
      {
        name: 'Dr. Maddie Cosing-Rosales',
        hospitals: [
          { name: "St. Luke's Medical Center — Quezon City", map: 'https://maps.app.goo.gl/98Nx1RikD3w7n8fcA' },
        ],
      },
      {
        name: 'Dr. Mary Grace Gran',
        hospitals: [
          { name: "Marikina St. Vincent General Hospital", map: 'https://www.google.com/maps/search/?api=1&query=Marikina%20St.%20Vincent%20General%20Hospital%2C%2035%20Bayan-Bayanan%20Avenue%2C%20Marikina%20City' },
          { name: "St. Anthony Medical Center of Marikina", map: 'https://www.google.com/maps/search/?api=1&query=St.%20Anthony%20Medical%20Center%20of%20Marikina%2C%2032%20Sta.%20Ana%20Extension%20corner%20Betelnut%20Street%2C%20San%20Roque%2C%20Marikina%20City' },
          { name: "Metro Antipolo Hospital and Medical Center", map: 'https://www.google.com/maps/search/?api=1&query=Metro%20Antipolo%20Hospital%20and%20Medical%20Center%2C%201348%20Marikina-Infanta%20Highway%2C%20Barangay%20Mayamot%2C%20Antipolo%2C%20Rizal' },
        ],
      },
      {
        name: 'Dr. Alwyn Santos',
        hospitals: [
          { name: "Marikina Valley Medical Center", map: 'https://www.google.com/maps/search/?api=1&query=Marikina%20Valley%20Medical%20Center%2C%20Sumulong%20Highway%20corner%20Aguinaldo%20Street%2C%20Marikina%20City' },
        ],
      },
      {
        name: 'Dr. Pia Gabrielle S. Hugo',
        hospitals: [
          { name: "Antipolo Centro De Medikal", map: 'https://www.google.com/maps/search/?api=1&query=Antipolo%20Centro%20De%20Medikal%2C%20234%20Sumulong%20Highway%2C%20Antipolo' },
          { name: "Cornel Medical Center", map: 'https://www.google.com/maps/search/?api=1&query=Cornel%20Medical%20Center%2C%20Masinag%2C%20Marcos%20Highway%2C%20Antipolo%20City' },
          { name: "Fatima University Medical Center — Antipolo", map: 'https://www.google.com/maps/search/?api=1&query=Fatima%20University%20Medical%20Center%2C%2023%20Sumulong%20Highway%2C%20Sta.%20Cruz%2C%20Antipolo%20City' },
        ],
      },
    ],
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
    partnerHospitals: [
      { name: 'Saint Michael Family Hospital', area: 'Marilao, Bulacan', covers: 'Emergency · Specialist referral', map: 'https://maps.app.goo.gl/4KPSm1JxCho3H2Vx9' },
    ],
    affiliatedNephrologists: [
      {
        name: 'Dr. Nemma Neron-Evangelista',
        hospitals: [
          { name: "Bocaue Specialists Medical Center, Inc. — Bocaue, Bulacan" },
        ],
      },
      {
        name: 'Dr. William Gregory Rivero',
        hospitals: [
          { name: "Fe Del Mundo Medical Center", map: 'https://maps.app.goo.gl/sn9KWrpeQjViweZf9' },
        ],
      },
    ],
  },
  {
    slug: 'st-josef-cainta',
    foundation: 'St. Josef Renal Care Foundation',
    name: 'Cainta (Rizal)',
    area: 'Cainta, Rizal',
    address: 'L475-A 3A & 9097 Marcos Highway, San Isidro, Cainta, Rizal',
    phone: '', phoneHref: '', email: '',
    hours: 'Opening this year',
    services: [],
    medicalDirector: '', headNurse: '', stations: null, transit: '',
    underConstruction: true,
    inquiriesVia: 'st-josef-marikina',
  },
  {
    slug: 'st-josef-maypajo',
    foundation: 'St. Josef Renal Care Foundation',
    name: 'Maypajo (Caloocan)',
    area: 'Caloocan City',
    address: 'No. 56 A. Mabini Street, Barangay 32, Maypajo, Caloocan City',
    phone: '', phoneHref: '', email: '',
    hours: 'Opening this year',
    services: [],
    medicalDirector: '', headNurse: '', stations: null, transit: '',
    underConstruction: true,
    inquiriesVia: 'caloocan',
    mapPin: '14.6360244,120.975469',
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
