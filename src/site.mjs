// Site-wide configuration for Desert Ridge Epoxy.
// PHONE: replace the placeholder below once the business line is live.
export const site = {
  name: 'Desert Ridge Epoxy',
  domain: 'https://desertridgeepoxy.com',
  city: 'Desert Ridge',
  locality: 'Phoenix',
  state: 'AZ',
  phone: { display: '(480) 000-0000', tel: '+14800000000', placeholder: true },
  geo: { lat: 33.6789, lng: -111.9718 },
  mapQuery: 'Desert Ridge, Phoenix, AZ 85050',
  hours: 'Weekdays 7:00–5:30 · Saturdays by appointment',
  ogImage: '/images/hero/modern-space-with-reflective-epoxy-floor-1200.webp',
};

export const services = [
  { slug: 'garage-floor-coatings', name: 'Garage Floor Coatings', code: 'G', blurb: 'Architectural garage floors for daily drivers, EVs and collector cars — flake, solid or showroom finishes.', img: 'garageShow' },
  { slug: 'residential-epoxy-flooring', name: 'Residential Epoxy Flooring', code: 'R', blurb: 'Seamless interior surfaces for modern homes: studios, media rooms, entries and open-plan living.', img: 'galleryFloor' },
  { slug: 'decorative-flake-flooring', name: 'Decorative Flake Flooring', code: 'F', blurb: 'Refined chip blends — granite, graphite, pearl — with a quiet, durable texture.', img: 'flakeStone' },
  { slug: 'metallic-epoxy-flooring', name: 'Metallic Epoxy Flooring', code: 'M', blurb: 'Pearlescent, stone-like floors with depth and movement, finished by hand.', img: 'metalGlacier' },
  { slug: 'polyaspartic-floor-coatings', name: 'Polyaspartic Floor Coatings', code: 'P', blurb: 'UV-stable, quick-return coatings for sunlit garages, porches and entries.', img: 'garageRow' },
  { slug: 'polyurea-floor-coatings', name: 'Polyurea Floor Coatings', code: 'U', blurb: 'An elastic, high-bond base layer for demanding garages and service spaces.', img: 'buffing' },
  { slug: 'patio-concrete-coatings', name: 'Patio & Concrete Coatings', code: 'O', blurb: 'Cool-touch, slip-conscious finishes for terraces, pool decks and entries.', img: 'poolPatio' },
  { slug: 'commercial-epoxy-flooring', name: 'Commercial Epoxy Flooring', code: 'C', blurb: 'Lobbies, showrooms, offices, salons and restaurants that need to look sharp and clean fast.', img: 'lobby' },
  { slug: 'warehouse-floor-coatings', name: 'Warehouse Floor Coatings', code: 'W', blurb: 'Hard-wearing systems, joint repair and line striping for logistics and service buildings.', img: 'warehouseCrew' },
];

export const areas = [
  { name: 'Desert Ridge', note: '85050 and 85054 — homes, offices and retail around the Loop 101 and SR-51 interchange.' },
  { name: 'Aviano & Fireside', note: 'Newer neighborhoods north of the 101 with modern garages and outdoor rooms.' },
  { name: 'Tatum Ranch', note: 'Established homes and golf communities along Tatum Boulevard.' },
  { name: 'Kierland', note: 'Condos, offices and boutique retail around the Kierland corridor.' },
  { name: 'North Scottsdale', note: 'Grayhawk, DC Ranch and nearby communities to the east.' },
  { name: 'Paradise Valley Village', note: 'Phoenix neighborhoods south of the 101 along Tatum and Cave Creek Road.' },
  { name: 'Cave Creek Road corridor', note: 'Homes and light-commercial properties heading north.' },
  { name: 'Deer Valley', note: 'Industrial parks and warehouses west along the 101.' },
];

export const projectTypes = [
  'Garage floor',
  'Showroom / collector garage',
  'Interior living space',
  'Decorative flake',
  'Metallic finish',
  'Polyaspartic (quick return)',
  'Patio, terrace or pool deck',
  'Commercial interior',
  'Warehouse or industrial',
  'Other / not sure',
];
