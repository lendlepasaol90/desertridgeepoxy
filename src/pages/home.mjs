import { site, services, areas } from '../site.mjs';
import { head, header, footer, consultForm, businessSchema, faqSchema } from '../layout.mjs';
import { img, bg, md, esc } from '../lib.mjs';

const faqs = [
  { q: 'Can a coated floor look high-end enough for a modern home?', a: 'Yes — when the finish is chosen for the architecture. Satin solid colors in warm gray or greige read as refined and quiet; metallic finishes can resemble honed stone; fine flake can echo terrazzo. The key is careful preparation so the surface is flat and free of telegraphed cracks, because premium finishes show every flaw.' },
  { q: 'What do you recommend for a garage with an EV charger?', a: 'A full-flake or solid system with a polyaspartic topcoat works well. We seal neatly around the charger pedestal or wall unit, keep coatings away from electrical connections, and can add a slightly heavier build where the car parks and turns every day.' },
  { q: 'Is a glossy garage floor slippery?', a: 'High gloss can be slick when wet. We can add a fine clear grit to the topcoat that preserves most of the shine while improving grip, or choose a satin finish that reads more architectural and hides fine scuffs.' },
  { q: 'How long will my garage be out of service?', a: 'Rapid-cure polyaspartic lets most garages wrap up in a single visit; you can walk on it overnight and park a few days later. Metallic and multi-layer interior systems take longer, typically three to four days.' },
  { q: 'Do you work on post-tension slabs?', a: 'Yes. Many Phoenix homes built since the 1990s sit on post-tension foundations. Our preparation is surface grinding only — we never saw-cut, core or drill — so the tensioned cables are never at risk.' },
  { q: 'Can you install in occupied offices or retail spaces?', a: 'Yes. We schedule nights, weekends and phased work, coordinate with property managers, and use lower-odor products where they meet the performance requirements.' },
  { q: 'Does my HOA need to approve the work?', a: 'Interior and garage floors usually don’t. Visible exterior surfaces like front entries or courtyards may fall under your community’s guidelines. We can supply samples and product data for an approval request.' },
  { q: 'How should I maintain a showroom-style floor?', a: 'Dust mop with microfiber daily or as needed, damp mop with a neutral cleaner, and use walk-off mats at entries. Grit is what dulls a gloss finish, so keeping it off the floor is most of the work.' },
];

export function renderHome() {
  const index = services.map((s, i) => `<a class="ix rise" href="/${s.slug}/">
      <span class="ix__bg">${img(s.img, { sizes: '(max-width: 700px) 94vw, 33vw', alt: '' })}</span>
      <span class="ix__n">${String(i + 1).padStart(2, '0')}</span>
      <span class="ix__name">${s.name}</span>
      <span class="ix__text">${esc(s.blurb)}</span>
      <span class="ix__go" aria-hidden="true">View</span>
    </a>`).join('');

  const body = `
<main id="content">
  <!-- HERO: split-screen -->
  <section class="hero">
    <div class="hero__lines" aria-hidden="true"></div>
    <div class="frame hero__grid">
      <div class="hero__text">
        <p class="label rise">Floor coatings · Desert Ridge, Phoenix</p>
        <h1 class="rise">Seamless floors, <em>architecturally</em> finished.</h1>
        <p class="hero__lead rise">Garage, interior, outdoor and commercial coatings for Desert Ridge and north Phoenix — designed to suit modern spaces and built to perform for years.</p>
        <div class="hero__actions rise"><a class="btn btn--copper" href="#consult">Book a consultation</a><a class="btn btn--quiet" href="#index">View the systems</a></div>
      </div>
      <div class="hero__visual">
        <figure class="hero__photo reveal-img">${img('heroRoom', { sizes: '(max-width: 900px) 100vw, 52vw', eager: true })}</figure>
        <div class="hero__card rise">
          <p class="hero__card-k">Free design consultation</p>
          ${consultForm({ id: 'hero-f', cta: 'Request a visit', theme: 'glass' })}
        </div>
      </div>
    </div>
  </section>

  <!-- INTRO -->
  <section class="block">
    <div class="frame intro">
      <p class="label rise">Epoxy flooring in Desert Ridge</p>
      <div class="intro__grid">
        <h2 class="rise">The floor is the largest surface in any room. It should be designed like one.</h2>
        <div class="intro__body rise">
          <p>Desert Ridge homes and businesses are built with intention: clean lines, large windows, carefully chosen materials. Yet the concrete under garages, patios, studios and service spaces is often treated as an afterthought — left bare, painted, or sealed with something that wears out in a season.</p>
          <p>A professionally installed coating gives those surfaces the same consideration as the rest of the architecture. It can be quiet and tonal, crisp and graphic, or rich with metallic depth. Underneath the finish, though, the priorities are always practical: thorough diamond grinding, proper repairs, moisture testing and a system of layers chosen for the way the space is used.</p>
          <p>We work across north Phoenix — from homes in Aviano, Fireside and Tatum Ranch to offices, showrooms and retail around the Loop 101 and SR-51. Every project starts with a visit, a conversation about the space and a written plan.</p>
          <p>Whether the brief is a quiet satin floor for a gallery-like great room, a graphite flake garage that matches custom cabinetry, or a durable lobby finish for a busy medical building, the conversation starts the same way: how the space is used, what surrounds it and how it should feel when you walk in. The system follows from those answers.</p>
        </div>
      </div>
      <dl class="figures">
        <div class="rise"><dt><span data-count="9">9</span></dt><dd>Coating systems, residential to industrial</dd></div>
        <div class="rise"><dt><span data-count="3">3</span>–<span data-count="5">5</span></dt><dd>Layers in a typical finished system</dd></div>
        <div class="rise"><dt><span data-count="1">1</span></dt><dd>Day for most fast-cure garage installs</dd></div>
        <div class="rise"><dt>100%</dt><dd>Mechanical prep — no acid etching</dd></div>
      </dl>
    </div>
  </section>

  <!-- SERVICE INDEX -->
  <section class="block block--stone" id="index">
    <div class="frame">
      <div class="headline rise"><p class="label">Our services</p><h2>The index.</h2><p>Nine systems, each with its own page covering where it fits, how it’s installed and how to care for it.</p></div>
      <div class="ixgrid">${index}</div>
    </div>
  </section>

  <!-- STATEMENT -->
  <section class="statement">
    <div class="frame">
      <p class="statement__q rise">“A beautiful finish over poor preparation is just a delay. We’d rather spend the time where nobody looks — so the part everyone sees lasts.”</p>
      <p class="statement__by rise">— How we approach every floor</p>
    </div>
  </section>

  <!-- WHY CHOOSE -->
  <section class="block">
    <div class="frame why">
      <div class="why__intro">
        <p class="label rise">Why choose us</p>
        <h2 class="rise">A considered process from consultation to cure.</h2>
        <figure class="why__img reveal-img">${img('crewWhite', { sizes: '(max-width: 900px) 94vw, 36vw' })}</figure>
      </div>
      <ol class="why__list">
        <li class="rise"><h3>Design-led recommendations</h3><p>We look at the architecture, the light and the materials around the floor, then suggest finishes that belong — whether that means a tonal satin, a refined flake or a metallic statement.</p></li>
        <li class="rise"><h3>Preparation that shows in the result</h3><p>Diamond grinding with HEPA dust collection, carefully feathered repairs and a flat, consistent surface. Premium finishes reveal flaws, so prep is where we invest the most time.</p></li>
        <li class="rise"><h3>Systems specified in writing</h3><p>Your proposal lists every step and every layer, with the role each one plays. It makes comparisons easy and expectations clear.</p></li>
        <li class="rise"><h3>Clean, coordinated job sites</h3><p>Protected finishes, contained dust and respectful crews — whether we’re in a private garage, an occupied office or a busy retail center.</p></li>
        <li class="rise"><h3>Honest scope</h3><p>If a simpler sealer will do, we’ll say so. If a crack is caused by movement no coating can stop, we’ll tell you before you spend a dollar.</p></li>
      </ol>
    </div>
  </section>

  <!-- RESIDENTIAL -->
  <section class="block block--ivory">
    <div class="frame split">
      <figure class="split__img reveal-img">${img('hallReflect', { sizes: '(max-width: 900px) 94vw, 50vw' })}</figure>
      <div class="split__text">
        <p class="label rise">Residential epoxy flooring</p>
        <h2 class="rise">Interiors with a continuous, quiet surface.</h2>
        <div class="rise">
          <p>Coated concrete is increasingly chosen as a finished interior floor in modern homes. With no grout lines or seams, it lets a space read as one uninterrupted plane — especially striking in open plans where walls of glass meet the floor. It’s durable underfoot, simple to clean and comfortable in the heat of a Phoenix summer.</p>
          <p>For living spaces we favor low-sheen finishes in warm grays, soft greige and pale stone tones, sometimes with a fine micro-flake for texture. Studios, gyms, wine rooms and media rooms are natural candidates, as are casitas and converted garages. Every interior project is prepared with extra care, because light raking across a satin floor reveals what a garage floor would hide.</p>
        </div>
        <a class="more rise" href="/residential-epoxy-flooring/">Residential flooring</a>
      </div>
    </div>
  </section>

  <!-- GARAGE -->
  <section class="block">
    <div class="frame garage">
      <div class="garage__text">
        <p class="label rise">Garage epoxy flooring</p>
        <h2 class="rise">The garage as an extension of the house.</h2>
        <div class="rise">
          <p>Many Desert Ridge garages are as carefully planned as the homes they belong to: cabinetry systems, slatwall, LED panels, EV chargers and, sometimes, a car worth showing off. Bare concrete undermines all of it. It stains, dusts and never looks finished, no matter how organized the walls are.</p>
          <p>Our garage systems give the floor the same level of finish. A full-flake broadcast in a graphite or granite blend is the most practical everyday choice, hiding dust and tire marks with a subtle texture. Solid satin colors suit minimalist garages. For collector spaces, a high-gloss solid or metallic floor turns the garage into a showroom. Every exposed floor is sealed with a UV-stable polyaspartic topcoat so colors stay true when the door is open to the afternoon sun.</p>
          <p>If you charge an EV at home, we coat carefully around the charging equipment and recommend a heavier build in the parking bay that sees daily use.</p>
        </div>
        <a class="more rise" href="/garage-floor-coatings/">Garage floor coatings</a>
      </div>
      <div class="garage__pics">
        <figure class="g1 reveal-img">${img('garageShow', { sizes: '(max-width: 900px) 94vw, 34vw' })}</figure>
        <figure class="g2 reveal-img">${img('evCharge', { sizes: '(max-width: 900px) 60vw, 22vw' })}</figure>
      </div>
    </div>
  </section>

  <!-- FINISHES: specimens -->
  <section class="block block--stone">
    <div class="frame">
      <div class="headline headline--row rise"><div><p class="label">Decorative &amp; metallic</p><h2>Three specimens.</h2></div><p>Most of our residential and commercial work starts from one of these finish families, then gets tuned with color, sheen and texture.</p></div>
      <div class="specimens">
        <a class="spec rise" href="/decorative-flake-flooring/"><figure>${img('flakeStone', { sizes: '(max-width: 900px) 94vw, 31vw', alt: '' })}</figure><span class="spec__k">Flake</span><span class="spec__t">Granite, graphite and pearl chip blends with a quiet, durable texture.</span></a>
        <a class="spec rise" href="/metallic-epoxy-flooring/"><figure>${img('metalGlacier', { sizes: '(max-width: 900px) 94vw, 31vw', alt: '' })}</figure><span class="spec__k">Metallic</span><span class="spec__t">Hand-worked pearlescent movement with the depth of honed stone.</span></a>
        <a class="spec rise" href="/residential-epoxy-flooring/"><figure>${img('greyMarble', { sizes: '(max-width: 900px) 94vw, 31vw', alt: '' })}</figure><span class="spec__k">Tonal solid</span><span class="spec__t">Satin warm grays and greige for a calm, continuous plane.</span></a>
      </div>
    </div>
  </section>

  <!-- COMMERCIAL & INDUSTRIAL -->
  <section class="block">
    <div class="frame biz">
      <div class="biz__head">
        <p class="label rise">Commercial &amp; industrial flooring</p>
        <h2 class="rise">Built for the business side of Desert Ridge.</h2>
        <p class="rise">The area around the 101 and SR-51 is one of north Phoenix’s busiest commercial districts, with offices, medical practices, showrooms, restaurants and retail. Floors in these spaces have to look polished, stand up to steady traffic and be cleaned quickly between busy days.</p>
      </div>
      <div class="biz__cards">
        <article class="bizcard rise"><figure>${img('lobby', { sizes: '(max-width: 900px) 94vw, 30vw' })}</figure><h3>Lobbies &amp; offices</h3><p>Seamless, low-glare finishes for reception areas, corridors and open offices — installed after hours so tenants stay productive.</p></article>
        <article class="bizcard rise"><figure>${img('carShowroom', { sizes: '(max-width: 900px) 94vw, 30vw' })}</figure><h3>Showrooms &amp; retail</h3><p>High-impact metallic or solid finishes that showcase products and hold up to carts, displays and constant foot traffic.</p></article>
        <article class="bizcard rise"><figure>${img('hangar', { sizes: '(max-width: 900px) 94vw, 30vw' })}</figure><h3>Warehouses &amp; service</h3><p>Abrasion-resistant systems, joint repair and safety striping for logistics, fleet and light-industrial buildings toward Deer Valley.</p></article>
      </div>
      <p class="biz__links rise">Explore <a href="/commercial-epoxy-flooring/">commercial epoxy flooring</a> and <a href="/warehouse-floor-coatings/">warehouse floor coatings</a>.</p>
    </div>
  </section>

  <!-- FULL-WIDTH -->
  <section class="vista" style="--vista:url('${bg('camelback', 2200)}')">
    <div class="frame vista__in">
      <p class="label label--light rise">Consultations across north Phoenix</p>
      <h2 class="rise">Let’s design a floor worthy of the space around it.</h2>
      <div class="rise"><a class="btn btn--light" href="#consult">Book a consultation</a><a class="btn btn--line-light" href="tel:${site.phone.tel}">${site.phone.display}</a></div>
    </div>
  </section>

  <!-- PROCESS -->
  <section class="block" id="process">
    <div class="frame">
      <div class="headline rise"><p class="label">Installation process</p><h2>Four phases. No shortcuts.</h2></div>
      <ol class="phases">
        <li class="rise"><span>Phase 01</span><h3>Consult</h3><p>On site, we review the space, the light and the use, test moisture, check for sealers and post-tension conditions, and present physical samples. You receive a written, itemized proposal.</p></li>
        <li class="rise"><span>Phase 02</span><h3>Prepare</h3><p>Surfaces are protected, the slab is diamond-ground with dust extraction, and cracks, joints and imperfections are repaired and ground flush.</p></li>
        <li class="rise"><span>Phase 03</span><h3>Build</h3><p>Primer, body coats and the decorative layer — flake, solid color or hand-worked metallic — are applied with controlled cure times between each.</p></li>
        <li class="rise"><span>Phase 04</span><h3>Finish</h3><p>A UV-stable or chemical-resistant topcoat sets the sheen and texture. We walk the floor with you and provide care guidance.</p></li>
      </ol>
      <figure class="process__img reveal-img">${img('rollCoat', { sizes: '100vw' })}</figure>
    </div>
  </section>

  <!-- BENEFITS -->
  <section class="block block--ivory">
    <div class="frame benefits">
      <div><p class="label rise">Benefits of professional installation</p><h2 class="rise">What a well-built floor gives back.</h2></div>
      <div class="benefits__list">
        <div class="rise"><h3>A continuous look</h3><p>No grout lines, no seams, no transition strips — just one uninterrupted surface that makes rooms feel larger.</p></div>
        <div class="rise"><h3>Effortless upkeep</h3><p>Dust, spills and tire marks stay on the surface, so cleaning is a matter of a mop rather than a scrub brush.</p></div>
        <div class="rise"><h3>Durability you can feel</h3><p>Multi-layer systems on mechanically prepared concrete resist hot tires, impacts, chemicals and constant traffic.</p></div>
        <div class="rise"><h3>True color in the sun</h3><p>UV-stable topcoats stop the yellowing that ruins standard epoxy in sunlit garages and glass-walled rooms.</p></div>
        <div class="rise"><h3>Safer surfaces</h3><p>Fine textures can be built into any finish for traction in entries, garages, pool decks and commercial kitchens.</p></div>
        <div class="rise"><h3>Long-term value</h3><p>A finished garage, patio or interior floor adds polish to a property and can be refreshed with a new topcoat instead of replaced.</p></div>
      </div>
    </div>
  </section>

  <!-- OUTDOOR -->
  <section class="block">
    <div class="frame split split--rev">
      <figure class="split__img reveal-img">${img('poolPatio', { sizes: '(max-width: 900px) 94vw, 50vw' })}</figure>
      <div class="split__text">
        <p class="label rise">Patios &amp; outdoor concrete</p>
        <h2 class="rise">Terraces and pool decks, refined.</h2>
        <div class="rise">
          <p>Outdoor spaces in Desert Ridge are designed for long evenings outside — pool terraces, covered loggias, outdoor kitchens and courtyards. A coating gives tired or stained concrete a clean, consistent finish in tones that complement stucco, stone and landscape.</p>
          <p>Outdoors we specify UV-stable materials, lighter reflective colors that stay more comfortable underfoot, and textures that grip when wet. Movement joints are left free to flex, so the slab can breathe without splitting the coating. Learn more about our <a href="/patio-concrete-coatings/">patio and concrete coatings</a>.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- LOCAL CONSIDERATIONS -->
  <section class="block block--stone">
    <div class="frame local">
      <div class="local__head">
        <p class="label rise">Local flooring considerations</p>
        <h2 class="rise">Designing for north Phoenix conditions.</h2>
      </div>
      <div class="local__cols">
        <div class="rise"><h3>Sun and glass</h3><p>Large windows, sliding walls and west-facing garages expose floors to intense UV. Standard epoxy ambers under that light; we specify aliphatic topcoats for any floor the sun can reach and help select colors that age gracefully.</p></div>
        <div class="rise"><h3>Summer slab temperatures</h3><p>Coatings cure faster on hot concrete, shortening working time. We schedule early starts, adjust product speeds and mix smaller batches so metallic and solid finishes stay even.</p></div>
        <div class="rise"><h3>Post-tension foundations</h3><p>Much of the area was built from the 1990s onward on post-tension slabs. Every bit of prep happens at the surface; nothing penetrates the foundation.</p></div>
        <div class="rise"><h3>Dust and monsoon storms</h3><p>Fine dust finds its way into garages and onto terraces. Mid-tone flake hides it, satin finishes show less of it, and textured outdoor surfaces stay secure after a summer downpour.</p></div>
        <div class="rise"><h3>Community guidelines</h3><p>Many neighborhoods have HOAs. Interior and garage floors rarely need approval, but visible exterior surfaces might. We provide samples and data sheets on request.</p></div>
        <div class="rise"><h3>Occupied commercial spaces</h3><p>Offices and retail rarely close. We plan after-hours phases and coordinate with property management so floors are finished without disrupting business.</p></div>
      </div>
    </div>
  </section>

  <!-- TRADE COORDINATION -->
  <section class="block">
    <div class="frame split">
      <div class="split__text">
        <p class="label rise">For designers, architects &amp; builders</p>
        <h2 class="rise">A flooring partner that fits into the larger project.</h2>
        <div class="rise">
          <p>A significant share of our work in Desert Ridge happens inside larger projects — a whole-home remodel, a new casita, a tenant build-out for a medical suite or showroom. In those settings the floor is one element in a sequence of trades, and timing matters as much as technique. Installed too early, a new finish gets scuffed by ladders and lifts. Installed too late, it delays move-in or opening day.</p>
          <p>We work directly with interior designers, architects, general contractors and property managers to keep that sequence on track. Before the job starts, we review finish schedules, confirm colors and sheens on approved sample boards, and test the slab so moisture or leveling needs are known early. During construction, we coordinate dates with the other trades and provide protection guidance for anyone working after us.</p>
          <p>Documentation is part of the service: product data and safety sheets for submittals, certificates of insurance for building management, and a written scope that matches the specification. The goal is simple — a floor that arrives on schedule, looks exactly as designed and doesn’t create surprises for anyone else on the project.</p>
        </div>
        <ul class="ticks rise"><li>Finish samples prepared for client or designer approval</li><li>Early slab testing during demolition or framing</li><li>Submittal documents and insurance certificates on request</li></ul>
      </div>
      <figure class="split__img reveal-img">${img('office', { sizes: '(max-width: 900px) 94vw, 46vw' })}</figure>
    </div>
  </section>

  <!-- GALLERY -->
  <section class="block" id="gallery">
    <div class="frame">
      <div class="headline headline--row rise"><div><p class="label">Gallery</p><h2>Surfaces &amp; spaces.</h2></div><p>A selection of finishes and settings that reflect the kind of work we do. Select an image to enlarge it.</p></div>
      <div class="mosaic" data-lightbox>
        ${[
          ['galleryFloor', 'a', 'Gloss white interior'], ['metalGlacier', 'b', 'Silver metallic'], ['corridor', 'c', 'Gray gloss corridor'],
          ['bedroom', 'd', 'Light gloss bedroom'], ['marbleLobby', 'e', 'Marble-look lobby'], ['garageRow', 'f', 'Striped garage floor'],
          ['retail', 'g', 'Boutique retail'], ['studio', 'h', 'Seamless studio'],
        ].map(([k, c, t]) => `<figure class="mosaic__i mosaic__i--${c} reveal-img">${img(k, { sizes: '(max-width: 700px) 94vw, 40vw' })}<figcaption>${t}</figcaption></figure>`).join('')}
      </div>
    </div>
  </section>

  <!-- AREAS -->
  <section class="block block--ivory">
    <div class="frame areas">
      <div>
        <p class="label rise">Service areas</p>
        <h2 class="rise">Desert Ridge and the surrounding north Valley.</h2>
        <p class="rise">We focus on Desert Ridge and nearby communities so consultations are prompt and scheduling is flexible. Not listed? Ask — we often travel for larger projects.</p>
        <a class="more rise" href="/service-areas/">All service areas</a>
      </div>
      <dl class="areas__list">${areas.map((a) => `<div class="rise"><dt>${a.name}</dt><dd>${esc(a.note)}</dd></div>`).join('')}</dl>
    </div>
  </section>

  <!-- FAQ -->
  <section class="block" id="faq">
    <div class="frame">
      <div class="headline rise"><p class="label">FAQ</p><h2>Questions we’re asked most.</h2></div>
      <div class="qa">${faqs.map((f) => `<details class="qa__i rise"><summary>${esc(f.q)}</summary><p>${md(f.a)}</p></details>`).join('')}</div>
    </div>
  </section>

  <!-- CONSULT -->
  <section class="block block--graphite" id="consult">
    <div class="frame consult">
      <div class="consult__text">
        <p class="label label--light rise">Start a project</p>
        <h2 class="rise">Book a design consultation.</h2>
        <p class="rise">Tell us about the space. We’ll arrange a visit to review the slab, discuss finishes in your own light and prepare an itemized proposal — with no obligation.</p>
        <ul class="consult__list rise"><li>On-site moisture and condition check</li><li>Physical finish samples</li><li>Written, itemized proposal</li></ul>
        <p class="consult__tel rise">Call <a href="tel:${site.phone.tel}">${site.phone.display}</a></p>
      </div>
      <div class="rise">${consultForm({ id: 'consult-f', title: 'Project details', notes: true, cta: 'Request consultation' })}</div>
    </div>
  </section>
</main>`;

  return head({
    title: 'Desert Ridge Epoxy | Garage, Interior & Commercial Floor Coatings',
    description: 'Architectural epoxy floor coatings in Desert Ridge, Phoenix — garages, EV and collector garages, interiors, patios, showrooms and offices. Free design consultations.',
    path: '/',
    schema: [businessSchema(), faqSchema(faqs), { '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: `${site.domain}/` }],
  }) + header('home') + body + footer();
}
