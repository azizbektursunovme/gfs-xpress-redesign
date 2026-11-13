// All company data in one place. Values marked PENDING wait for the manager (docs/needs.md);
// empty values hide their blocks until filled.
// Not shown until the manager confirms them: carrier and load counts ("150+", "15K+ loads", "1000+ loads/month"),
// "99% on-time", "< 15 min quotes", "140+ quarry partners", "500+ integrations", "AI matching",
// Great Place to Work (expired April 2026), Glassdoor rating, template reviews.

export const company = {
  name: 'GFS Express',
  legalName: 'GFS Express Inc.',
  // The correct domain is gfs-xpress.com everywhere. gfs-express.com belongs to another company.
  domain: 'gfs-xpress.com',
  street: 'Two CityPlace Drive, 2nd Floor, Office 250',
  city: 'St. Louis',
  state: 'MO',
  stateName: 'Missouri',
  zip: '63141',
  phone: '(636) 202-1111',
  phoneHref: 'tel:+16362021111',
  // PENDING: confirm this mailbox exists (the old site used info@gfs-express.com, the wrong domain).
  email: 'info@gfs-xpress.com',
  dot: '', // PENDING
  mc: '', // PENDING
};

export const fullAddress = `${company.street}, ${company.city}, ${company.state} ${company.zip}`;

export const links = {
  maps: 'https://www.google.com/maps/search/?api=1&query=Two+CityPlace+Drive%2C+St.+Louis%2C+MO+63141',
  fmcsa: '', // PENDING: SAFER company snapshot URL once the USDOT number is confirmed
  // PENDING: where "Track Shipment" and "Request Login" should really go (TMS tracking page, customer/carrier portal).
  trackUrl: import.meta.env.PUBLIC_TRACK_URL ?? '',
  portalUrl: import.meta.env.PUBLIC_PORTAL_URL ?? '',
};

// PENDING: real profile URLs. The old site linked a generic instagram.com/gfsexpress.
export const social: { name: string; url: string }[] = [];

export const stats = [
  { value: '48', label: 'States covered' },
  { value: '6', label: 'Freight services' },
  { value: '24/7', label: 'Dispatch and support' },
  { value: 'St. Louis', label: 'Headquarters, Missouri' },
];

export const services = [
  {
    id: 'dry-van',
    title: 'Full truckload (dry van)',
    photo: 'svc-dryvan',
    icon: 'truck',
    body: "A 53' dry van for your full load, with a confirmed pickup and delivery appointment.",
    points: ["53' dry vans for palletized and floor-loaded freight", 'Confirmed pickup and delivery appointments', 'One-way loads and recurring lanes'],
  },
  {
    id: 'ltl',
    title: 'Less than truckload (LTL)',
    photo: 'svc-ltl',
    icon: 'pallet',
    body: 'Smaller shipments that share a trailer, so you pay for the space you use.',
    points: ['1 to 6 pallets', 'Pickup and delivery at docks and businesses', 'Freight class and dimensions checked before booking'],
  },
  {
    id: 'flatbed',
    title: 'Flatbed and specialized',
    photo: 'svc-flatbed',
    icon: 'layers',
    body: 'Flatbeds and step decks for steel, machinery, building materials and oversized loads.',
    points: ['Flatbed and step deck trailers', 'Securement and tarping to your instructions', 'Permits arranged for oversized freight'],
  },
  {
    id: 'refrigerated',
    title: 'Refrigerated (reefer)',
    photo: 'svc-reefer',
    icon: 'snow',
    body: 'Temperature-controlled trailers for food and other freight that must stay cold or frozen.',
    points: ['Fresh, frozen and temperature-sensitive freight', 'Temperature set to your bill of lading', 'Food-grade trailers on request'],
  },
  {
    id: 'expedited',
    title: 'Expedited freight',
    photo: 'svc-expedited',
    icon: 'bolt',
    body: 'Time-critical loads with priority dispatch and team drivers when the deadline is tight.',
    points: ['Same-day pickup when a truck is available', 'Team drivers for long, urgent runs', 'Updates at pickup, in transit and at delivery'],
  },
  {
    id: 'dedicated',
    title: 'Dedicated capacity',
    photo: 'svc-dedicated',
    icon: 'route',
    body: 'Trucks reserved for your recurring lanes, on your schedule.',
    points: ['Weekly or daily recurring lanes', 'The same carriers on your freight', 'Capacity planned ahead of peak season'],
  },
];

export const equipment = ['Dry van', 'Refrigerated (reefer)', 'Flatbed or step deck', 'LTL (1–6 pallets)', 'Expedited', 'Dedicated lane', 'Not sure'];

export const steps = [
  { title: 'Request a quote', body: 'Send the pickup, the delivery, the date and what you are shipping. Online or by phone.' },
  { title: 'Carrier match', body: 'We book a vetted carrier with the right equipment and experience on your lane.' },
  { title: 'Updates in transit', body: 'Dispatch confirms pickup, keeps you posted on the way and calls if anything changes.' },
  { title: 'Delivery and POD', body: 'You get the signed proof of delivery and one clear invoice.' },
];

export const shipperBenefits = [
  { icon: 'user', title: 'A dedicated account team', body: 'The same people handle your freight, so they know your lanes, docks and deadlines.' },
  { icon: 'shield', title: 'Vetted carriers only', body: 'Every carrier is checked for operating authority, insurance and safety rating before the first load.' },
  { icon: 'clock', title: '24/7 dispatch', body: 'After-hours pickups and weekend deliveries have someone on the phone.' },
  { icon: 'note', title: 'Clear paperwork', body: 'Rate confirmation before pickup, proof of delivery after, one invoice per load.' },
];

export const shipperFaq = [
  { q: 'How do I get a rate?', a: 'Fill in the quote form with the pickup, delivery, date and freight. Dispatch replies by phone or email. For an urgent load, call (636) 202-1111, 24/7.' },
  { q: 'What equipment can you book?', a: 'Dry vans, refrigerated trailers, flatbeds and step decks, LTL for 1 to 6 pallets, expedited and dedicated capacity.' },
  { q: 'How do you choose carriers?', a: 'We book only carriers with active operating authority, valid auto liability and cargo insurance and a satisfactory safety rating.' },
  { q: 'How do I track my shipment?', a: 'Use Track shipment with your load, PRO or BOL number, or call dispatch with that number.' },
];

export const carrierBenefits = [
  { icon: 'route', title: 'Consistent freight', body: 'Recurring lanes in the Midwest, Southeast and beyond keep your truck loaded.' },
  { icon: 'note', title: 'Clear rates', body: 'You see the rate before you commit. No hidden fees.' },
  { icon: 'clock', title: 'Quick pay available', body: 'Get paid faster after you submit the proof of delivery.' },
  { icon: 'user', title: 'A carrier rep who knows you', body: 'One person who knows your lanes, equipment and preferences.' },
  { icon: 'phone', title: '24/7 dispatch', body: 'Breakdown, delay or a question on the road: someone answers.' },
  { icon: 'shield', title: 'Simple setup', body: 'Apply online with your MC/DOT number, insurance certificate and W-9.' },
];

export const carrierSteps = [
  { title: 'Apply online', body: 'Send your MC/DOT number, insurance certificate and W-9. It takes about 10 minutes.' },
  { title: 'Get verified', body: 'Our compliance team checks your authority, insurance and safety rating, usually within 24 to 48 hours.' },
  { title: 'Start hauling', body: 'Book loads from the load board or by phone. Your carrier rep is with you from the first load.' },
];

export const carrierRequirements = [
  'Active MC/DOT operating authority for at least 6 months',
  'Auto liability insurance of at least $1,000,000',
  'Cargo insurance of at least $100,000',
  'Satisfactory safety rating',
  'W-9 and a signed carrier agreement',
];

export const carrierFaq = [
  { q: 'How long does setup take?', a: 'Usually 24 to 48 hours after we receive your MC/DOT number, insurance certificate and W-9.' },
  { q: 'How do I find loads?', a: 'Check the load board or call dispatch with your truck location, equipment and preferred lanes.' },
  { q: 'Do you offer quick pay?', a: 'Yes. Ask your carrier rep for quick pay terms when you book a load.' },
  { q: 'What equipment do you work with?', a: 'Dry vans, reefers, flatbeds and step decks. Tell us your equipment when you apply.' },
];

export const regions = [
  { name: 'Midwest', states: ['IL', 'MO', 'IN', 'OH', 'MI', 'WI'] },
  { name: 'Southeast', states: ['GA', 'FL', 'TN', 'NC', 'SC', 'AL'] },
  { name: 'Northeast', states: ['NY', 'PA', 'NJ', 'MA', 'CT', 'MD'] },
  { name: 'Southwest', states: ['TX', 'AZ', 'NM', 'OK', 'CO'] },
  { name: 'West Coast', states: ['CA', 'WA', 'OR', 'NV', 'UT'] },
  { name: 'Plains', states: ['KS', 'NE', 'IA', 'MN', 'SD', 'ND'] },
];

// Load board. Empty until it is connected to the TMS (PENDING). Never show placeholder loads.
export interface Load { ref: string; equipment: string; origin: string; destination: string; pickup: string; weightLbs?: number; rateUsd?: number }
export const loads: Load[] = [];

export const principles = [
  { title: 'Carrier relationships built on trust', body: 'Fair rates, predictable volume and clear communication on every load.' },
  { title: 'A dedicated team for every shipper', body: 'One account team that knows your freight, your lanes and your service expectations.' },
  { title: 'Clear updates', body: 'Pickup, transit and delivery confirmed, with documents sent the same day.' },
  { title: 'Built to grow with you', body: 'From one load a month to recurring lanes: the same team and the same process.' },
];

export const values = [
  { title: 'Integrity first', body: 'We do what we say, with honest pricing and follow-through.' },
  { title: 'Speed of execution', body: 'In freight, minutes matter. We answer fast and dispatch quickly.' },
  { title: 'People-centered', body: 'Behind every load is a person. We treat shippers and drivers with respect.' },
  { title: 'Compliance first', body: 'Every carrier is checked for authority, insurance and safety before it hauls for us.' },
];

export const careers = {
  benefits: [
    { icon: 'note', title: 'Competitive pay', body: 'Base salary, plus uncapped commission for sales roles.' },
    { icon: 'shield', title: 'Health coverage', body: 'Medical, dental and vision coverage.' },
    { icon: 'route', title: 'Training and growth', body: 'Structured training and a clear path to the next role.' },
    { icon: 'clock', title: 'Paid time off', body: 'Paid time off plus paid holidays.' },
  ],
  roles: [
    { id: 'freight-broker', title: 'Freight Broker (entry level)', team: 'Sales', type: 'Full-time', location: 'St. Louis, MO', body: 'Start a career in freight sales with training, mentorship and uncapped commission.' },
    { id: 'carrier-sales', title: 'Carrier Sales Representative', team: 'Carrier relations', type: 'Full-time', location: 'St. Louis, MO', body: 'Build carrier relationships, negotiate rates and match loads.' },
    { id: 'account-manager', title: 'Account Manager', team: 'Account management', type: 'Full-time', location: 'Remote', body: 'Manage shipper accounts and grow them with the right freight solutions.' },
    { id: 'dispatch', title: 'Dispatch Coordinator', team: 'Operations', type: 'Full-time', location: 'St. Louis, MO', body: 'Coordinate daily freight, talk to drivers and keep deliveries on time.' },
    { id: 'software-engineer', title: 'Software Engineer', team: 'Technology', type: 'Full-time', location: 'Remote', body: 'Build and scale our logistics software. React, Node.js and cloud experience preferred.' },
    { id: 'data-analyst', title: 'Data Analyst', team: 'Analytics', type: 'Full-time', location: 'St. Louis, MO or remote', body: 'Turn freight data into insight for pricing and operations.' },
  ],
};

// PENDING: real reviews with permission to publish. Template reviews ("John Smith", "Mike Rodriguez") were removed.
export const reviews: { quote: string; name: string; company: string }[] = [];
