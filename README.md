# Chief Security Solutions — Website

Public website for **Chief Security Solutions** (Birmingham, AL — licensed AL & AZ; nationwide executive protection). Static HTML + Tailwind CDN, no build step. This is the **baseline structural build** — visual polish is layered on top via Claude Design in a follow-up pass.

> **Ship target:** 2026-05-08. See `_handoff/01-build-brief.md` for the full kickoff brief.

## Run locally

```bash
# Either of these works
python -m http.server 8000
# or
npx serve .
```

Open <http://localhost:8000>.

> Opening `index.html` directly via `file://` mostly works for static review.

## Structure

```
chief-security-solutions-site/
├── index.html              # Home — hero, services, story, area, CTA
├── services.html           # Three service pillars
├── about.html              # Origin (Eagle Security history scrubbed), licensing, team
├── careers.html            # Roles + JobApplication form
├── contact.html            # Direct methods + ContactSubmission form
├── 404.html                # Friendly fallback
├── css/custom.css          # Small overrides Tailwind can't express cleanly + brand gradients
├── js/main.js              # Mobile menu, smooth scroll, year stamp, reduced-motion guard
├── partials/
│   ├── nav.html            # Source-of-truth nav (each page inlines a copy)
│   └── footer.html         # Source-of-truth footer (each page inlines a copy)
├── images/
│   ├── Logo.jpg            # Triston-supplied logo (navy crest + serif wordmark)
│   ├── logo.svg            # Wordmark fallback
│   ├── favicon.svg
│   └── og-default.svg
├── _handoff/               # Claude Design briefing docs (not deployed)
│   ├── 01-build-brief.md
│   ├── 02-content-changes.md
│   └── README.md
├── robots.txt
├── sitemap.xml
└── README.md
```

## Customization map

| What to change | Where |
| --- | --- |
| Brand colors | The inline `tailwind.config` `<script>` block at the top of every HTML page (color tokens: `navy`, `ink`, `steel`, `surface`, `mist`, `gold`, `hairline`) |
| Fonts | Same `tailwind.config` block (`fontFamily`) + the Google Fonts `<link>` in `<head>` |
| Nav links / logo | Edit `partials/nav.html` (canonical), then sync into each page between the `<!-- nav:start --> ... <!-- nav:end -->` markers |
| Footer / contact stubs | Edit `partials/footer.html` (canonical), then sync between the `<!-- footer:start --> ... <!-- footer:end -->` markers |
| Phone / email | Search-replace `[TK]` markers in nav/footer/contact for real values from Triston |
| Service descriptions | `services.html` — each pillar block has an `id` (`#guards`, `#surveillance`, `#executive-protection`) matching its anchor link |
| Team bios | `about.html` — team grid is one `<ul>` block; each `<li>` is a member |
| Hero footage | `index.html` hero section — replace gradient placeholder with Don Lemon footage when supplied |
| Form endpoints | `careers.html` and `contact.html` — set form `action` to the chosen relay (Formspree / Basin / Web3Forms) |
| SEO meta | Top of each page's `<head>` — `<title>`, `<meta name="description">`, OG tags |

## Content status

| Section | Status |
| --- | --- |
| Service pillars (Guards / Surveillance / EP) | Real (from discovery call; verify with Triston) |
| Licensing (AL + AZ) | Real (confirmed in discovery) |
| Triston's title (co-owner / president) | Real (confirmed in discovery — NOT "operations") |
| Brad's role + EP/army background | Real (high level — full bio TK from Triston) |
| Two Brians (Birmingham, Dallas) + Virginia | Real (roster confirmed in discovery; bios TK) |
| Don Lemon executive-protection footage | **Wired** — `images/hero-don-lemon.mp4` (854x480, 27s, H.264 + AAC) plays as homepage hero with `images/hero-don-lemon-poster.jpg` first-paint poster. Source `.mov` archived in traverse-os. Replace with higher-res cut if Triston supplies one. |
| Hero copy | **Placeholder** — live base44 site uses "Security Built on Legacy. Delivered with Precision." (see `_handoff/03-base44-content-snapshot.md`); Triston to confirm carry-over |
| Phone | **Real — (205) 946-7938** wired into all footers, contact aside, and JSON-LD |
| Address | **Real — 5325 1st Ave N, Birmingham, AL 35212** wired into contact aside and JSON-LD |
| Email | **Still TK** — not on live site, not in discovery |
| Service-area states | AL, TN, TX, GA, FL, AZ + nationwide (combined live site + new AZ license from discovery) |
| Reference site link (layout inspiration Triston shared) | **Pending from Triston** |
| Reviews / testimonials | None on first pass — legacy Eagle Security Google profile is OFF-LIMITS per discovery |
| Hiring philosophy / benefits | **Placeholder** on careers page |
| Live base44 site content | **Captured** in `_handoff/03-base44-content-snapshot.md`. Reconciled against discovery in `_handoff/04-content-reconciliation.md`. |

## Things explicitly NOT to add

- Eagle Security history, prior partner, or anything referencing the legacy lawsuit / bad reviews
- Pricing on services (quote-driven sales motion)
- Paramilitary visual language (no tactical-camo, no skulls, no "operator" imagery)
- Invented testimonials

## Deploy

GitHub Pages from the `master` branch:

```bash
git push origin master
# In repo settings → Pages → Source: Deploy from a branch → master / (root)
```

For the live `chiefsecuritysolutions.com` domain (not yet registered), Triston handles registration and hosting — point an `A` / `CNAME` record at GitHub Pages and add a `CNAME` file at the repo root with the final domain.

## Design tool handoff note

This is a **baseline**: solid semantic HTML, accessible interaction patterns, sensible typography and spacing, and clean Tailwind tokens. The next pass elevates visual polish via Claude Design. When iterating:

- **Preserve** semantic structure (`<header>`, `<nav>`, `<main>`, `<section aria-labelledby>`, `<footer>`), heading hierarchy, content, and accessibility patterns (focus rings, skip link, mobile menu a11y attrs).
- **Customize** styling tokens in the Tailwind config block — colors, fonts, spacing — and Tailwind utility classes on individual elements. The token system is the intended customization surface.
- **Avoid** adding heavy frameworks or build steps; this site is designed to stay static and edit-friendly.

## Future work

- Higher-resolution Don Lemon footage if Triston supplies one (current cut is 480p)
- Real team headshots (5 — Triston, Brad, Brian-Birmingham, Brian-Dallas, Virginia)
- Wire form `action` to chosen form-relay (Formspree / Basin / Web3Forms)
- Real `og-default.jpg` (1200x630) once brand photography is in hand
- DNS cutover once Triston registers `chiefsecuritysolutions.com` (or whichever domain he chooses)
- Optional: testimonials section (only if Triston sources fresh quotes — legacy Eagle Security reviews are off-limits)

## Credits

Built for Chief Security Solutions by [Traverse](https://traverserts.com).
