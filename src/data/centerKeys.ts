// Public Web3Forms access keys — one per open center. Each key routes submissions
// straight to that center's own inbox. These are PUBLIC keys (safe in client code).
// Keyed by branch slug (see src/data/branches.ts).
export const centerKeys: Record<string, string> = {
  'quezon-avenue': 'ab23c509-ccc9-4ac1-b9ba-ab1aee59dc3a',
  'caloocan': 'a3dd7329-ed2b-4526-bea4-c7b009975028',
  'marikina-san-roque': '6c9fc480-fc47-48fe-89b0-990ed8ad2cfd',
  'core-renal-santillan': 'd2e9e3d1-de1a-4d2f-b875-0d3984164e44',
  'st-josef-marikina': '7f307721-a06b-4325-909e-8f563dfc788d',
  'st-josef-marilao': '5d3e4ab9-3897-4dfc-916b-f0650f7356d5',
};

// "No preference" on the appointment form falls back to the Quezon Avenue main branch.
export const DEFAULT_CENTER_KEY = centerKeys['quezon-avenue'];
