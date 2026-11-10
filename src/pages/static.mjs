import { site, services, areas } from '../site.mjs';
import { head, header, footer, consultForm, businessSchema, crumbs, crumbSchema } from '../layout.mjs';
import { img, esc } from '../lib.mjs';

const top = ({ label, h1, lead, image, trail }) => `<section class="shead shead--page">
  <div class="frame shead__in">${crumbs(trail)}<p class="label rise">${label}</p><h1 class="rise">${h1}</h1><p class="shead__lead rise">${lead}</p></div>
  <figure class="shead__band shead__band--short reveal-img">${img(image, { sizes: '100vw', eager: true })}</figure>
</section>`;

export function renderAbout() {
  const trail = [{ name: 'Home', url: '/' }, { name: 'About Us', url: '/about-us/' }];
  const body = `<main id="content">
  ${top({ label: 'About us', h1: 'A floor studio with a builder’s discipline.', lead: 'We design and install coated floors for homes and businesses across Desert Ridge and north Phoenix, with preparation treated as the most important part of the job.', image: 'prep', trail })}
  <section class="block">
    <div class="frame about">
      <div class="copy">
        <h2 class="rise">Our point of view</h2>
        <p class="rise">Floors in modern architecture carry a lot of visual weight. They’re the largest continuous surface in a room, and they meet glass, cabinetry and stone at every edge. We think that deserves the same care given to millwork or tile. At the same time, a coating is a performance system: it has to bond, resist wear and stay true in Arizona sun. Our work sits at the intersection of those two ideas.</p>
        <p class="rise">In practice that means we spend more time than most on the parts nobody sees. Slabs are diamond-ground with dust extraction. Repairs are feathered so they disappear under satin and metallic finishes. Moisture is measured, not assumed. And every layer of the system is chosen deliberately and written down in the proposal.</p>
        <h2 class="rise">How we work with clients</h2>
        <ul class="ticks rise">
          <li>Consultations on site, with physical samples evaluated in your own light.</li>
          <li>Written proposals that describe preparation, repairs and each coating layer.</li>
          <li>Surface-only preparation that respects post-tension foundations.</li>
          <li>Coordination with designers, architects, contractors and property managers.</li>
          <li>Clean, protected job sites and clear timelines for return to use.</li>
        </ul>
        <h2 class="rise">Who we serve</h2>
        <p class="rise">Homeowners make up much of our work — garages, interiors, terraces and casitas in Desert Ridge and the surrounding neighborhoods. We also serve the area’s commercial community: offices, medical suites, showrooms, salons and restaurants, along with warehouses and service buildings toward Deer Valley.</p>
        <p class="rise">If you’re still researching, our service pages explain each system in detail, including where it fits and where it doesn’t. Questions are always welcome.</p>
      </div>
      <aside class="about__side rise">
        <p class="label">Services</p>
        <ol>${services.map((s) => `<li><a href="/${s.slug}/">${s.name}</a></li>`).join('')}</ol>
        <a class="btn btn--copper" href="/contact-us/">Book a consultation</a>
      </aside>
    </div>
  </section>
</main>`;
  return head({ title: 'About Us | Desert Ridge Epoxy', description: 'Desert Ridge Epoxy designs and installs architectural floor coatings for north Phoenix homes and businesses, with preparation-first methods and written, layered system specs.', path: '/about-us/', schema: [businessSchema(), crumbSchema(trail)] }) + header('about') + body + footer();
}

const areaText = {
  'Desert Ridge': 'Our home area spans the 85050 and 85054 ZIP codes around the Loop 101 and SR-51. We coat garages, interiors and terraces in residential neighborhoods and work regularly with offices, medical suites, restaurants and retail in the surrounding commercial district.',
  'Aviano & Fireside': 'Newer neighborhoods north of the 101 feature modern garages, great rooms that open to the outdoors and covered terraces. Satin interiors, graphite flake garages and light exterior finishes are frequent requests.',
  'Tatum Ranch': 'Established homes and golf-course properties along Tatum Boulevard often have larger garages and mature outdoor spaces. Many projects here involve removing older coatings or paint before installing a new system.',
  Kierland: 'Around the Kierland corridor we work with condo owners, boutique retail and offices, where refined finishes and careful scheduling matter in shared buildings.',
  'North Scottsdale': 'To the east, Grayhawk, DC Ranch and nearby communities include collector garages, contemporary interiors and expansive terraces suited to premium finishes.',
  'Paradise Valley Village': 'South of the 101 along Tatum and Cave Creek Road, this Phoenix village includes a mix of homes from several decades. Older slabs may need moisture mitigation or additional preparation.',
  'Cave Creek Road corridor': 'Heading north, homes and light-commercial properties along Cave Creek Road benefit from durable garage and shop floors.',
  'Deer Valley': 'West along the 101, Deer Valley’s industrial parks, hangars and service buildings are where most of our warehouse and fleet work takes place.',
};

export function renderAreas() {
  const trail = [{ name: 'Home', url: '/' }, { name: 'Service Areas', url: '/service-areas/' }];
  const body = `<main id="content">
  ${top({ label: 'Service areas', h1: 'Desert Ridge, north Phoenix and nearby communities.', lead: 'Concentrating on one part of the Valley keeps consultations prompt and schedules flexible.', image: 'camelback', trail })}
  <section class="block">
    <div class="frame">
      <dl class="arealist">${areas.map((a) => `<div class="rise"><dt>${a.name}</dt><dd>${esc(areaText[a.name])}</dd></div>`).join('')}</dl>
      <div class="copy narrow rise" style="margin-top:64px">
        <h2>Outside these areas?</h2>
        <p>We travel for larger residential and commercial projects throughout the north Valley. Share your location and project details and we’ll confirm availability. All services — including <a href="/garage-floor-coatings/">garage coatings</a>, <a href="/residential-epoxy-flooring/">interior floors</a> and <a href="/commercial-epoxy-flooring/">commercial flooring</a> — are offered across our service area.</p>
      </div>
    </div>
  </section>
</main>`;
  return head({ title: 'Service Areas | Desert Ridge Epoxy', description: 'Floor coatings in Desert Ridge, Aviano, Fireside, Tatum Ranch, Kierland, North Scottsdale, Paradise Valley Village, the Cave Creek Road corridor and Deer Valley.', path: '/service-areas/', schema: [businessSchema(), crumbSchema(trail)] }) + header('areas') + body + footer();
}

export function renderContact() {
  const trail = [{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact-us/' }];
  const body = `<main id="content">
  ${top({ label: 'Contact', h1: 'Book a consultation.', lead: 'Share the basics and we’ll respond within one business day to schedule a visit.', image: 'studio', trail })}
  <section class="block">
    <div class="frame contact">
      <div class="rise">${consultForm({ id: 'contact-f', title: 'Project details', intro: 'Name, phone, email and project type are required.', notes: true, cta: 'Send request' })}</div>
      <div class="contact__side">
        <div class="info rise"><p class="label">Phone</p><p class="info__big"><a href="tel:${site.phone.tel}">${site.phone.display}</a></p><p>${site.hours}</p></div>
        <div class="info rise"><p class="label">Process</p><ol><li>We confirm details and schedule a visit.</li><li>On site: slab review, moisture test, samples.</li><li>You receive a written proposal.</li><li>Installation is scheduled around you.</li></ol></div>
        <div class="info rise"><p class="label">Coverage</p><p>Desert Ridge and north Phoenix, including Kierland, North Scottsdale and Deer Valley. <a href="/service-areas/">Details</a></p></div>
      </div>
    </div>
  </section>
</main>`;
  return head({ title: 'Contact | Book a Consultation | Desert Ridge Epoxy', description: 'Book a free consultation for garage, interior, outdoor or commercial floor coatings in Desert Ridge, Phoenix. Responses within one business day.', path: '/contact-us/', schema: [businessSchema(), crumbSchema(trail)] }) + header('contact') + body + footer();
}

export function renderPrivacy() {
  const trail = [{ name: 'Home', url: '/' }, { name: 'Privacy Policy', url: '/privacy-policy/' }];
  const body = `<main id="content"><section class="block"><div class="frame copy narrow">
  ${crumbs(trail)}
  <h1>Privacy Policy</h1>
  <p>${esc(site.name)} collects only the information needed to respond to consultation requests made through this site.</p>
  <h2>What is collected</h2>
  <p>Consultation forms request name, phone, email, project type and optional notes, along with the page used to submit them.</p>
  <h2>How it is used</h2>
  <p>Information is used to reply, schedule visits and prepare proposals. It is not sold or shared for marketing purposes.</p>
  <h2>Third parties</h2>
  <p>The map and web fonts on this site are served by Google, which may log usage according to its own terms. Submissions are transmitted through our hosting provider.</p>
  <h2>Requests</h2>
  <p>To review or delete your information, call ${site.phone.display} or use the <a href="/contact-us/">contact page</a>.</p>
  </div></section></main>`;
  return head({ title: 'Privacy Policy | Desert Ridge Epoxy', description: 'How Desert Ridge Epoxy handles information submitted through its website.', path: '/privacy-policy/' }) + header('') + body + footer();
}

export function render404() {
  const body = `<main id="content"><section class="block"><div class="frame copy narrow">
  <p class="label">404</p><h1>This page isn’t on the plans.</h1><p>It may have moved or never existed. Try one of these:</p>
  <p><a class="btn btn--copper" href="/">Home</a> <a class="btn btn--quiet" href="/#index">Services</a> <a class="btn btn--quiet" href="/contact-us/">Contact</a></p>
  </div></section></main>`;
  return head({ title: 'Page Not Found | Desert Ridge Epoxy', description: 'The requested page could not be found.', path: '/404.html' }).replace('index,follow', 'noindex') + header('') + body + footer();
}
