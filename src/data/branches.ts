// ---------------------------------------------------------------------------
// BRANCHES — the single source of truth for the dialysis centers.
//
// To add or edit a center, change ONE object below. Everything (the locator
// list, each branch page, the footer, contact page and appointment form)
// updates automatically.
// ---------------------------------------------------------------------------

export interface Branch {
  slug: string;          // used in the web address, e.g. /centers/marikina
  name: string;          // display name
  area: string;          // city / district, for filtering
  address: string;       // full street address
  phone: string;         // branch phone(s), display form
  phoneHref: string;     // primary number as a tel: link
  email: string;         // branch email
  hours: string;         // operating hours
  services: string[];    // on-site services
  medicalDirector: string;
  headNurse: string;
  stations: string | null; // number of dialysis stations/machines
  transit: string;       // public-transport notes
}

export const branches: Branch[] = [
  {
    slug: 'quezon-avenue',
    name: 'Quezon Avenue',
    area: 'Quezon City',
    address: '2nd Floor, Casman Building, 1198 Quezon Avenue, Barangay Paligsahan, Quezon City 1100',
    phone: '8375 1575 · 0917 122 6925',
    phoneHref: 'tel:+63283751575',
    email: 'qave.sjbdc@gmail.com',
    hours: 'Mon–Sat, 5:30 AM – 8:00 PM',
    services: ['Hemodialysis'],
    medicalDirector: 'To be confirmed',
    headNurse: 'To be confirmed',
    stations: null,
    transit: 'Along Quezon Avenue; accessible by bus and jeepney routes and near the MRT-3 Quezon Avenue station.',
  },
  {
    slug: 'makati',
    name: 'Core Renal Center (Makati)',
    area: 'Makati City',
    address: 'Ground Floor, EMF Building, M. Santillan Street, Pio del Pilar, Makati City 1230',
    phone: '8844 2686 · 8844 2693 · 8772 8350',
    phoneHref: 'tel:+63288442686',
    email: 'sjbd.corerenalcenter@gmail.com',
    hours: 'Mon–Sat, 5:30 AM – 8:00 PM',
    services: ['Hemodialysis'],
    medicalDirector: 'To be confirmed',
    headNurse: 'To be confirmed',
    stations: null,
    transit: 'In Pio del Pilar, Makati; accessible from Osmeña Highway and South Avenue routes.',
  },
  {
    slug: 'caloocan',
    name: 'Caloocan',
    area: 'Caloocan City',
    address: '4th Floor, Araneta Square Mall, Samson Road corner Rizal Avenue, Bonifacio, Caloocan City',
    phone: '8962 0011 · 0906 219 8578',
    phoneHref: 'tel:+63289620011',
    email: 'sjbdc.caloocan@gmail.com',
    hours: 'Mon–Sat, 5:30 AM – 8:00 PM',
    services: ['Hemodialysis'],
    medicalDirector: 'To be confirmed',
    headNurse: 'To be confirmed',
    stations: null,
    transit: 'Inside Araneta Square Mall on Samson Road; near the Monumento transport hub and LRT-1 Monumento station.',
  },
  {
    slug: 'marikina',
    name: 'Marikina',
    area: 'Marikina City',
    address: '2F WRCC Building 2, #33 Dragon Street corner Gil Fernando Avenue, San Roque, Marikina City 1801',
    phone: '8633 5404 · 0917 877 9920',
    phoneHref: 'tel:+63286335404',
    email: 'sjbdc_marikina@yahoo.com',
    hours: 'Mon–Sat, 5:30 AM – 8:00 PM',
    services: ['Hemodialysis'],
    medicalDirector: 'To be confirmed',
    headNurse: 'To be confirmed',
    stations: null,
    transit: 'Along Gil Fernando Avenue, San Roque; accessible by jeepney and tricycle routes.',
  },
];

export function getBranch(slug: string): Branch | undefined {
  return branches.find((b) => b.slug === slug);
}
