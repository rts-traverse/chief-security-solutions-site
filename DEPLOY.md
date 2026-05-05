# Chief Security Solutions — Deployment Handoff

This is a **complete, deployable static website** for Chief Security Solutions. No build step, no framework. Drop it on any static host and it works.

## Stack

- Plain HTML5 (5 pages + 404)
- Tailwind CSS via CDN (`cdn.tailwindcss.com`) with inline theme config
- One small custom stylesheet (`css/custom.css`) — gradients, parchment background, card accents, focus styles
- One small vanilla JS file (`js/main.js`) — mobile menu, smooth scroll, year stamp, reduced-motion guard
- Google Fonts: Cormorant Garamond + Inter
- No build step. No npm. No bundler.

## Repo structure

```
/
├── index.html              # Home — hero (Don Lemon video), services, story, area, FAQ teaser, CTA
├── services.html           # Three pillars: guards, surveillance, executive protection
├── about.html              # Origin story, licensing, team
├── careers.html            # Roles + JobApplication form (stubbed)
├── contact.html            # Direct methods + map + FAQ + ContactSubmission form (stubbed)
├── 404.html                # "This post is unmanned." fallback
├── css/custom.css          # Brand gradients, parchment bg, card-accent style
├── js/main.js              # Nav + a11y JS
├── images/
│   ├── logo-crest.png      # Navy crest, used in nav + footer
│   ├── logo-full.png       # Full wordmark logo
│   ├── watermark-crest.png # Hero watermark
│   ├── hero-don-lemon.mp4  # Hero background video (H.264)
│   ├── hero-don-lemon-poster.jpg # Poster fallback
│   ├── favicon.svg
│   └── og-default.svg
├── partials/               # Source-of-truth nav/footer (each page inlines a copy)
├── robots.txt
├── sitemap.xml
└── DEPLOY.md               # This file
```

## Deploy options (pick one)

### GitHub Pages (simplest)
```bash
git push origin master
# In repo settings → Pages → Source: master / (root)
```

### Netlify / Vercel (recommended for custom domains)
1. Connect the GitHub repo
2. Build command: *(none)*
3. Publish directory: `/`
4. Add custom domain in dashboard

### Cloudflare Pages / S3 / any static host
Upload the entire repo root. No build step required.

## Pre-launch checklist

### 1. Wire up the forms — REQUIRED
Both `careers.html` and `contact.html` have `<form action="#">`. Pick a relay and replace the action:

- **Formspree** — `https://formspree.io/f/YOUR_FORM_ID`
- **Basin** — `https://usebasin.com/f/YOUR_FORM_ID`
- **Web3Forms** — `https://api.web3forms.com/submit` (with `<input type="hidden" name="access_key" value="...">`)

The "Implementation note" `<p>` block in each form should also be removed before launch.

### 2. Domain + DNS
- Domain `chiefsecuritysolutions.com` to be registered by client
- For GitHub Pages: add `CNAME` file at repo root containing the domain, point an `A` record at GitHub Pages IPs (or `CNAME` at apex)
- For Netlify/Vercel: add domain in dashboard, follow their DNS instructions

### 3. Update absolute URLs
Search-replace `https://chiefsecuritysolutions.com/` if the final domain differs. Currently appears in:
- `<link rel="canonical">` on every page
- Open Graph `og:url` and `og:image` meta tags
- `sitemap.xml`
- The JSON-LD `SecurityService` schema on `index.html`

### 4. Verify content
Real content already in place: phone (205) 946-7938, address 5325 1st Ave N Birmingham AL 35212, six licensed states (AL/TN/TX/GA/FL/AZ), team roster, service pillars, Don Lemon engagement, Triston Parsons + Brad Haynes leadership. No `[TK]` markers remain in user-facing copy.

### 5. Optional polish
- Real team headshots — replace gradient placeholders in `about.html` team grid
- Real `og-default.jpg` (1200×630) — currently `og-default.svg`
- Google Analytics / Plausible — add tracking snippet to `<head>` of each page if desired

## Editing patterns

- **Brand colors** — edit the inline `tailwind.config` `<script>` block at the top of each page (color tokens: `navy`, `ink`, `steel`, `surface`, `mist`, `parchment`, `gold`, `hairline`)
- **Nav / footer** — `partials/nav.html` and `partials/footer.html` are the source of truth, but edits must be synced into each page between the `<!-- nav:start --> ... <!-- nav:end -->` and `<!-- footer:start --> ... <!-- footer:end -->` markers
- **Top utility bar** (phone + licensing) — synced across all pages between `<!-- utility:start --> ... <!-- utility:end -->`
- **FAQ content** — `contact.html` has the FAQ accordion; questions are plain `<details>` elements

## Local preview

```bash
python -m http.server 8000
# or
npx serve .
```

Open <http://localhost:8000>.

## Accessibility

Site preserves: skip-link, `<header>/<nav>/<main>/<footer>` semantics, `aria-labelledby` on every section, focus-visible rings, mobile menu `aria-expanded`, `prefers-reduced-motion` guard. Keep these intact.

## What NOT to add

- Eagle Security history / prior partner / legacy lawsuit references
- Pricing on services (intentionally quote-driven)
- Paramilitary visual language (no tactical-camo, skulls, "operator" imagery)
- Invented testimonials
