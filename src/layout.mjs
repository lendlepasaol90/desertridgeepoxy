import { site, services, projectTypes, areas } from './site.mjs';
import { esc } from './lib.mjs';

export function consultForm({ id, title = '', intro = '', notes = false, cta = 'Request consultation', theme = 'paper' }) {
  return `<form class="cf cf--${theme}" id="${id}" action="/api/lead" method="post" novalidate data-lead-form>
  ${title ? `<h2 class="cf__title">${title}</h2>` : ''}${intro ? `<p class="cf__intro">${intro}</p>` : ''}
  <div class="cf__grid">
    <label class="cf__row"><span class="cf__lbl">Name</span><input name="name" type="text" autocomplete="name" required maxlength="80"><small class="cf__msg" aria-live="polite"></small></label>
    <label class="cf__row"><span class="cf__lbl">Phone</span><input name="phone" type="tel" inputmode="tel" autocomplete="tel" required><small class="cf__msg" aria-live="polite"></small></label>
    <label class="cf__row"><span class="cf__lbl">Email</span><input name="email" type="email" autocomplete="email" required maxlength="120"><small class="cf__msg" aria-live="polite"></small></label>
    <label class="cf__row"><span class="cf__lbl">Project type</span><select name="project" required><option value="">Select</option>${projectTypes.map((t) => `<option>${esc(t)}</option>`).join('')}</select><small class="cf__msg" aria-live="polite"></small></label>
    ${notes ? `<label class="cf__row cf__row--full"><span class="cf__lbl">Notes <em>(optional)</em></span><textarea name="message" rows="4" maxlength="1500"></textarea></label>` : ''}
    <div class="cf__hp" aria-hidden="true"><input name="company_website" tabindex="-1" autocomplete="off" aria-label="Do not fill"></div>
    <button class="btn btn--copper cf__submit" type="submit">${cta}</button>
  </div>
  <p class="cf__status" role="status" aria-live="polite"></p>
</form>`;
}

export function head({ title, description, path, schema = [], image = site.ogImage }) {
  const url = site.domain + path;
  return `<!doctype html>
<html lang="en" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index,follow">
<meta name="theme-color" content="#f9f7f3">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${site.domain}${image}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${site.domain}${image}">
<meta name="geo.region" content="US-AZ">
<meta name="geo.placename" content="Phoenix">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="/assets/css/dr.css?v=1">
${schema.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n')}
</head>`;
}

export function header(active = '') {
  const a = (k) => (active === k ? ' aria-current="page"' : '');
  return `<body>
<a class="skip" href="#content">Skip to content</a>
<header class="top" data-top>
  <div class="frame top__row">
    <a class="logo" href="/" aria-label="${esc(site.name)} — home">
      <span class="logo__box" aria-hidden="true">Logo</span>
      <span class="logo__txt">Desert Ridge <i>Epoxy</i></span>
    </a>
    <nav class="menu" aria-label="Main">
      <ul>
        <li><a href="/"${a('home')}>Home</a></li>
        <li class="menu__sub">
          <button type="button" aria-expanded="false" aria-controls="svc-list" data-sub>Services</button>
          <div class="menu__panel" id="svc-list">
            <ol>${services.map((s) => `<li><a href="/${s.slug}/"${a(s.slug)}><span>${s.code}</span>${s.name}</a></li>`).join('')}</ol>
          </div>
        </li>
        <li><a href="/about-us/"${a('about')}>About Us</a></li>
        <li><a href="/service-areas/"${a('areas')}>Service Areas</a></li>
        <li><a href="/contact-us/"${a('contact')}>Contact</a></li>
      </ul>
    </nav>
    <a class="top__phone" href="tel:${site.phone.tel}">${site.phone.display}</a>
    <div class="pop">
      <button type="button" class="btn btn--copper pop__btn" aria-expanded="false" aria-controls="pop-form" data-pop>Consultation</button>
      <div class="pop__card" id="pop-form" role="region" aria-label="Request a consultation" hidden data-pop-card>
        <p class="pop__head">Request a consultation</p>
        <p class="pop__sub">We reply within one business day.</p>
        ${consultForm({ id: 'hdr', cta: 'Send' })}
      </div>
    </div>
    <button type="button" class="toggle" aria-expanded="false" aria-controls="sheet" data-toggle><span class="skip">Menu</span><i></i><i></i></button>
  </div>
  <div class="sheet" id="sheet" hidden data-sheet>
    <ul>
      <li><a href="/">Home</a></li>
      ${services.map((s) => `<li><a href="/${s.slug}/">${s.name}</a></li>`).join('')}
      <li><a href="/about-us/">About Us</a></li>
      <li><a href="/service-areas/">Service Areas</a></li>
      <li><a href="/contact-us/">Contact</a></li>
    </ul>
    <div class="sheet__form">${consultForm({ id: 'msheet', title: 'Request a consultation', cta: 'Send request' })}</div>
  </div>
</header>`;
}

export function footer() {
  const map = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=12&output=embed`;
  return `<footer class="foot">
  <div class="frame foot__grid">
    <div class="foot__brand">
      <a class="logo" href="/"><span class="logo__box" aria-hidden="true">Logo</span><span class="logo__txt">Desert Ridge <i>Epoxy</i></span></a>
      <p>Architectural floor coatings for homes and businesses in Desert Ridge and north Phoenix.</p>
      <a class="foot__tel" href="tel:${site.phone.tel}">${site.phone.display}</a>
      <p class="foot__small">${site.hours}</p>
    </div>
    <nav aria-label="Footer services"><p class="foot__h">Services</p><ul>${services.map((s) => `<li><a href="/${s.slug}/">${s.name}</a></li>`).join('')}</ul></nav>
    <nav aria-label="Footer company"><p class="foot__h">Studio</p><ul><li><a href="/about-us/">About Us</a></li><li><a href="/service-areas/">Service Areas</a></li><li><a href="/contact-us/">Contact</a></li><li><a href="/privacy-policy/">Privacy</a></li></ul>
      <p class="foot__h">Areas</p><p class="foot__small">${areas.map((a) => a.name).join(' · ')}</p></nav>
    <div class="foot__map"><p class="foot__h">Location</p><div class="foot__frame"><iframe title="Map of Desert Ridge, Phoenix" src="${map}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div></div>
  </div>
  <div class="frame foot__base"><p>© ${new Date().getFullYear()} ${esc(site.name)}</p><p><a href="/sitemap.xml">Sitemap</a> / <a href="/privacy-policy/">Privacy</a></p></div>
</footer>
<script src="/assets/js/dr.js?v=1" defer></script>
</body>
</html>`;
}

export const bizId = `${site.domain}/#business`;
export const businessSchema = () => {
  const s = {
    '@context': 'https://schema.org', '@type': 'HomeAndConstructionBusiness', '@id': bizId,
    name: site.name, url: `${site.domain}/`, image: site.domain + site.ogImage,
    description: 'Residential, garage, outdoor and commercial epoxy floor coatings for Desert Ridge and north Phoenix, Arizona.',
    address: { '@type': 'PostalAddress', addressLocality: 'Phoenix', addressRegion: 'AZ', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: ['Desert Ridge, Phoenix, AZ', 'Phoenix, AZ', 'Scottsdale, AZ', 'Cave Creek, AZ'].map((n) => ({ '@type': 'Place', name: n })),
    knowsAbout: services.map((s) => s.name),
  };
  if (!site.phone.placeholder) s.telephone = site.phone.tel;
  return s;
};
export const serviceSchema = (svc, description) => ({ '@context': 'https://schema.org', '@type': 'Service', name: svc.name, serviceType: svc.name, description, url: `${site.domain}/${svc.slug}/`, provider: { '@id': bizId }, areaServed: { '@type': 'Place', name: 'Desert Ridge, Phoenix, AZ' } });
export const faqSchema = (faqs) => ({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '') } })) });
export const crumbSchema = (items) => ({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: site.domain + it.url })) });
export const crumbs = (items) => `<nav class="path" aria-label="Breadcrumb"><ol>${items.map((it, i) => (i < items.length - 1 ? `<li><a href="${it.url}">${esc(it.name)}</a></li>` : `<li aria-current="page">${esc(it.name)}</li>`)).join('')}</ol></nav>`;
