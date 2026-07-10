// ---------------------------------------------------------------------------
// BRANCHES — the single source of truth for the 5 dialysis centers.
//
// To add or edit a center, change ONE object below. Everything (the locator
// map, the centers list, and each branch page) updates automatically.
//
// Fields marked  // TODO  hold placeholder values drawn from the handbook and
// still need Dr. Rivero to confirm the exact details before launch.
// ---------------------------------------------------------------------------

export interface Branch {
  slug: string;          // used in the web address, e.g. /centers/marikina
  name: string;          // display name
  area: string;          // city / district, for filtering
  address: string;       // full street address
  phone: string;         // branch phone
  hours: string;         // operating hours
  services: string[];    // on-site services
  medicalDirector: string;
  headNurse: string;
  stations: string | null; // number of dialysis stations/machines
  transit: string;       // public-transport notes
  // Map coordinates (approximate — refine when confirmed). Used for the
  // "Get directions" link and the embedded map.
  lat: number;
  lng: number;
}

export const branches: Branch[] = [
  {
    slug: 'quezon-avenue',
    name: 'Quezon Avenue (Head Office)',
    area: 'Quezon City',
    address: '1st & 2nd Floor Casman Building, 1198 Quezon Avenue, Barangay Paligsahan, District 4, Quezon City', // from handbook
    phone: '(02) 0000 0000',       // TODO confirm branch phone
    hours: 'Mon–Sat, 5:30 AM – 8:00 PM',
    services: ['Hemodialysis', 'Laboratory', 'X-ray / Imaging', 'Dialyzer reprocessing'],
    medicalDirector: 'To be confirmed',   // TODO
    headNurse: 'To be confirmed',          // TODO
    stations: null,                        // TODO number of stations
    transit: 'Along Quezon Avenue, accessible by bus and jeepney routes; near the MRT-3 Quezon Avenue station.', // TODO confirm
    lat: 14.6339,
    lng: 121.0223,
  },
  {
    slug: 'marikina',
    name: 'Marikina',
    area: 'Marikina City',
    address: 'To be confirmed — Marikina City',   // TODO full address
    phone: '(02) 0000 0000',                        // TODO
    hours: 'Mon–Sat, 5:30 AM – 8:00 PM',
    services: ['Hemodialysis', 'Laboratory'],       // TODO confirm on-site services
    medicalDirector: 'To be confirmed',
    headNurse: 'To be confirmed',
    stations: null,
    transit: 'To be confirmed.',
    lat: 14.6507,
    lng: 121.1029,
  },
  {
    slug: 'makati',
    name: 'Makati',
    area: 'Makati City',
    address: 'To be confirmed — Makati City',       // TODO
    phone: '(02) 0000 0000',                         // TODO
    hours: 'Mon–Sat, 5:30 AM – 8:00 PM',
    services: ['Hemodialysis', 'Laboratory'],
    medicalDirector: 'To be confirmed',
    headNurse: 'To be confirmed',
    stations: null,
    transit: 'To be confirmed.',
    lat: 14.5547,
    lng: 121.0244,
  },
  {
    slug: 'robinsons-otis',
    name: 'Robinsons Place Otis',
    area: 'Paco, Manila',
    address: 'To be confirmed — Robinsons Place Otis, Paco, Manila', // TODO
    phone: '(02) 0000 0000',                                          // TODO
    hours: 'Mon–Sat, 5:30 AM – 8:00 PM',
    services: ['Hemodialysis', 'Laboratory'],
    medicalDirector: 'To be confirmed',
    headNurse: 'To be confirmed',
    stations: null,
    transit: 'To be confirmed.',
    lat: 14.5866,
    lng: 120.9955,
  },
  {
    slug: 'caloocan',
    name: 'Caloocan',
    area: 'Caloocan City',
    address: 'To be confirmed — Caloocan City',      // TODO
    phone: '(02) 0000 0000',                          // TODO
    hours: 'Mon–Sat, 5:30 AM – 8:00 PM',
    services: ['Hemodialysis', 'Laboratory'],
    medicalDirector: 'To be confirmed',
    headNurse: 'To be confirmed',
    stations: null,
    transit: 'To be confirmed.',
    lat: 14.6577,
    lng: 120.9838,
  },
];

export function getBranch(slug: string): Branch | undefined {
  return branches.find((b) => b.slug === slug);
}
