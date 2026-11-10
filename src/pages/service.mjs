import { site, services } from '../site.mjs';
import { head, header, footer, consultForm, businessSchema, serviceSchema, faqSchema, crumbSchema, crumbs } from '../layout.mjs';
import { img, md, paras, esc } from '../lib.mjs';

// Content shape: { slug, title, description, label, h1, lead, heroImg, facts:[[k,v]],
//   sections:[{ h2, paras?, list?, kind?:'cards'|'steps'|'table'|'callout', items?, img?, caption? }],
//   faqs:[{q,a}], related:[slug], close:{h2,p} }

function sec(s, i) {
  let inner = '';
  if (s.kind === 'cards') inner = `<div class="cards">${s.items.map((it) => `<div class="cards__i rise"><h3>${esc(it.h)}</h3><p>${md(it.p)}</p></div>`).join('')}</div>`;
  if (s.kind === 'steps') inner = `<ol class="seq">${s.items.map((it, n) => `<li class="rise"><span>${String(n + 1).padStart(2, '0')}</span><h3>${esc(it.h)}</h3><p>${md(it.p)}</p></li>`).join('')}</ol>`;
  if (s.kind === 'table') inner = `<dl class="tbl">${s.items.map((it) => `<div class="rise"><dt>${esc(it.h)}</dt><dd>${md(it.p)}</dd></div>`).join('')}</dl>`;
  const body = s.kind === 'callout'
    ? `<div class="callout rise">${paras(s.paras)}</div>`
    : `${s.paras ? `<div class="copy rise">${paras(s.paras)}</div>` : ''}`;
  return `<section class="doc__sec"${s.id ? ` id="${s.id}"` : ''}>
    <p class="doc__mark" aria-hidden="true">§${String(i + 1).padStart(2, '0')}</p>
    <div class="doc__body">
      <h2 class="rise">${esc(s.h2)}</h2>
      ${body}
      ${s.list ? `<ul class="ticks rise">${s.list.map((l) => `<li>${md(l)}</li>`).join('')}</ul>` : ''}
      ${inner}
      ${s.img ? `<figure class="doc__fig reveal-img">${img(s.img, { sizes: '(max-width: 900px) 94vw, 760px' })}${s.caption ? `<figcaption>${esc(s.caption)}</figcaption>` : ''}</figure>` : ''}
    </div>
  </section>`;
}

export function renderService(c) {
  const svc = services.find((s) => s.slug === c.slug);
  const path = `/${c.slug}/`;
  const trail = [{ name: 'Home', url: '/' }, { name: svc.name, url: path }];
  const related = c.related.map((r) => services.find((s) => s.slug === r));
  const body = `
<main id="content">
  <section class="shead">
    <div class="frame shead__in">
      ${crumbs(trail)}
      <p class="label rise">${esc(c.label)}</p>
      <h1 class="rise">${esc(c.h1)}</h1>
      <p class="shead__lead rise">${md(c.lead)}</p>
      <div class="shead__actions rise"><a class="btn btn--copper" href="#svc-consult">Book a consultation</a><a class="btn btn--quiet" href="tel:${site.phone.tel}">${site.phone.display}</a></div>
    </div>
    <figure class="shead__band reveal-img">${img(c.heroImg, { sizes: '100vw', eager: true })}</figure>
    <div class="frame"><dl class="facts">${c.facts.map(([k, v]) => `<div class="rise"><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></div>
  </section>

  <div class="frame doc">
    ${c.sections.map(sec).join('')}
    <section class="doc__sec" id="faq">
      <p class="doc__mark" aria-hidden="true">FAQ</p>
      <div class="doc__body">
        <h2 class="rise">${esc(c.faqTitle || 'Frequently asked')}</h2>
        <div class="qa qa--one">${c.faqs.map((f) => `<details class="qa__i rise"><summary>${esc(f.q)}</summary><p>${md(f.a)}</p></details>`).join('')}</div>
      </div>
    </section>
  </div>

  <section class="block block--stone">
    <div class="frame">
      <div class="headline rise"><p class="label">Related</p><h2>Continue exploring.</h2></div>
      <div class="rel">${related.map((r) => `<a class="rel__i rise" href="/${r.slug}/"><span class="rel__img">${img(r.img, { sizes: '(max-width: 700px) 94vw, 30vw', alt: '' })}</span><span class="rel__t">${r.name}</span><span class="rel__p">${esc(r.blurb)}</span></a>`).join('')}</div>
    </div>
  </section>

  <section class="block block--graphite" id="svc-consult">
    <div class="frame consult">
      <div class="consult__text"><p class="label label--light rise">Consultation</p><h2 class="rise">${esc(c.close.h2)}</h2><p class="rise">${md(c.close.p)}</p><p class="consult__tel rise">Call <a href="tel:${site.phone.tel}">${site.phone.display}</a></p></div>
      <div class="rise">${consultForm({ id: 'svc-f', title: 'Request a visit', notes: true })}</div>
    </div>
  </section>
</main>`;
  return head({
    title: c.title,
    description: c.description,
    path,
    image: `${(img(c.heroImg).match(/src="([^"]+)"/) || [])[1]}`,
    schema: [businessSchema(), serviceSchema(svc, c.description), faqSchema(c.faqs), crumbSchema(trail)],
  }) + header(c.slug) + body + footer();
}
