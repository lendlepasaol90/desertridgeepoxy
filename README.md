# Desert Ridge Epoxy — desertridgeepoxy.com

Static, SEO-focused website for architectural floor coatings in Desert Ridge and north Phoenix, Arizona, deployed as a Cloudflare Worker with static assets.

## Structure

```
src/
  build.mjs            build script → writes HTML into ./public
  site.mjs             business config (name, phone placeholder, services, service areas)
  layout.mjs           <head>, header (with consultation popover form and mobile sheet), footer (map), schema helpers
  lib.mjs              image + text helpers
  pages/               home, service template, about / areas / contact / privacy / 404
  content/services/    one file per service page (copy lives here)
  assets/              CSS + JS — dr.css / dr.js (copied to public/assets)
  images.json          image registry (sizes, alt text)
public/                built site — this is what gets deployed (committed)
worker/index.js        serves public/ and handles POST /api/lead
wrangler.jsonc         Cloudflare Workers config
```

## Commands

```bash
npm run build    # regenerate public/ after editing src/
npm run dev      # build + local wrangler dev server
npm run deploy   # build + wrangler deploy
```

No dependencies are required to build (Node 18+). Deploying needs `wrangler` (fetched by `npx`).

## Before launch

1. **Phone number** — replace the placeholder in `src/site.mjs` (`phone.display`, `phone.tel`) and set `placeholder: false` so it is added to the LocalBusiness schema. Then `npm run build`.
2. **Logo** — replace the `.logo__box` placeholder in `src/layout.mjs` with an `<img>` (the header slot sits left of the wordmark; a wide logo up to ~220×48 also fits).
3. **Lead delivery** — set one of these on the Worker (Settings → Variables & Secrets):
   - `LEAD_WEBHOOK_URL` — any HTTPS endpoint that accepts JSON (Zapier, Make, n8n, CRM webhook), or
   - `RESEND_API_KEY` + `LEAD_TO_EMAIL` (+ optional `LEAD_FROM_EMAIL`) for email via Resend.
   Submissions are always written to the Worker logs as a backup.
4. **Domains** — attach `desertridgeepoxy.com` and `www.desertridgeepoxy.com` to the Worker. The Worker redirects `www` to the apex.

## Forms

The header "Consultation" popover, mobile menu sheet, homepage hero card and consultation section, service-page forms and the contact page all post to `/api/lead`. Client-side validation (name, 10-digit phone, email, project type), server-side validation, honeypot spam field, and a no-JS fallback redirect.

## Images

Licensed Envato Elements photography, resized to WebP at 480–2200px widths with `srcset`. Filenames are descriptive and grouped by folder under `public/images/`.
