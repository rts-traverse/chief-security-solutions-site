---
id: "chief-security-build-brief"
type: deliverable
status: draft
client: chief-security-solutions
context: client:chief-security-solutions
audience: claude-design
created: 2026-05-04
ship_target: 2026-05-08
related:
  - "decisions/20260504-chief-security-website-build.md"
  - "commitments/20260504-chief-security-website-ship.md"
  - "commitments/20260504-chief-security-assets-from-triston.md"
  - "meetings/external/20260504-parsons-discovery.md"
tags: [chief-security, website, build-brief, claude-design-handoff]
---

# Chief Security Solutions — Website Build Brief

> **Audience:** Claude Design. This is the standalone kickoff doc — read top to bottom and you should be able to start the build without context from prior conversations.

## Engagement at a glance

| Field | Value |
|---|---|
| Client | Chief Security Solutions (Birmingham, AL; AZ-licensed) |
| Owner | Triston Parsons (co-owner / president) |
| Engagement | Fixed-scope website build, rebrand from "Eagle Security" |
| Price | $500 one-time + $50/mo support retainer (pending Brad sign-off) |
| Ship date | **2026-05-08 (Friday) — 4 days from kickoff** |
| Hosting | Triston self-hosts. We deliver deployable static site; he registers the domain and owns hosting. No domain registered yet. |
| Reference | Existing site Triston wants to revamp: https://chiefsecuritysolutions.base44.app/ |
| Reference layout | Triston has a separate site he showed Marty as the layout template. **Pending — link from Triston by 2026-05-06.** |

## What this site is replacing

Chief Security Solutions is a clean-slate LLC that replaced "Eagle Security," a family
business that fell into disrepute under a previous partner (lawsuit, bad Google reviews
on the legacy listing). Triston and his new partner Brad spun up Chief Security to start
fresh. **The new site must not rehash the Eagle Security narrative.** Mentioning the
grandfather (founder) is fine — that's the family-roots angle — but no "About Eagle
Security," no prior partner, no legacy continuation framing.

## Required changes from current base44 site

These are the explicit asks from Triston in the 2026-05-04 discovery call. Implement all
of them; if any conflict with information you find on the live site, the asks below win.

1. **Scrub Eagle Security history.** Remove all "About Eagle Security" content, the
   prior partner, and the lawsuit/legacy continuation framing. Grandfather mention OK
   as origin story, not as company history.
2. **Refresh the team page.**
   - **Remove:** Mandy (no longer with the company), Alana
   - **Keep / add:**
     - **Brad** — runs all ops. Former executive protection; ran large army contracts. Bio copy from Triston pending.
     - **Brian** — field ops, Birmingham
     - **Brian** — field ops, Dallas (yes, two Brians — disambiguate by location)
     - **Virginia** — scheduling
   - **Triston's title:** co-owner / president (NOT "operations" — that's Brad's lane).
3. **Add Arizona license.** Chief Security just got AZ-licensed; surface this on the
   site (footer credibility line + likely About page detail).
4. **Hero: Don Lemon executive-protection footage.** Embed as background video or
   still-frame credibility hero. Suggested copy direction: *"We've provided protection
   for the highest-profile individuals on both sides of the aisle."* Footage pending
   from Triston.
5. **Logo:** keep the supplied navy-on-white Chief Security crest as the working mark
   for v1 ship. Marty owes Triston cleaner logo iterations as a separate workstream
   (commitment id `20260504-chief-security-assets-from-triston` — Triston is sending
   reference logo options); those iterations will not block the 5/8 ship.
6. **Domain:** none yet. Build for a TBD domain; Triston will register and DNS-target
   us when ready. Use placeholder `chiefsecuritysolutions.com` in copy / metadata until
   confirmed.

## Sitemap

Mirror the current base44 structure. Four pages plus home:

```
/                  Home — hero (Don Lemon footage), value prop, service teasers, CTA
/about             About — origin story (grandfather OK, Eagle Security OUT), AZ license, team grid
/services          Services — guard services, surveillance, executive protection
/careers           Careers — open roles teaser, JobApplication form
/contact           Contact — ContactSubmission form, service-area note, hours
```

Footer (every page): logo, AZ license callout, contact stub, social (if Triston supplies),
copyright.

## Brand & visual direction

### Logo
Provided file: `clients/chief-security-solutions/logo.jpg` — uniformed officer crest +
serif wordmark, single-color dark navy on white. Use as-is for v1.

### Color palette (extracted from logo)

| Role | Hex | Notes |
|---|---|---|
| Primary navy | `#0E1B40` | sampled from logo strokes — use for headings, buttons, footer |
| Ink (body text) | `#0B1220` | near-black tuned to navy family |
| Surface | `#FFFFFF` | logo's native background |
| Surface alt | `#F4F5F8` | very light cool gray for sectional alternation |
| Accent (suggested) | `#B08A4A` antique brass / `#C7A35B` warm gold | optional accent for CTA hover or trim — security/protection brands lean on metallic accents and it pairs well with the navy. Confirm with Marty before committing. |
| Hairline / divider | `#D9DCE3` | |
| Success / online indicator | `#1F7A4B` | only if needed for status states |

Single-accent palette keeps the logo dominant. Avoid red — would clash with the formal
executive-protection positioning.

### Type
- **Display / headings:** a refined serif that echoes the logo wordmark — Cormorant
  Garamond, Playfair Display, or similar (not Times). Not too thin at heavy weights.
- **Body / UI:** clean humanist sans — Inter, IBM Plex Sans, or Source Sans 3.
- Pairing intent: serif headings = traditional/authoritative (matches the crest);
  sans body = modern/legible. Reflects the "kind of raw" simple aesthetic Triston liked.

### Tone & voice
- Formal, confident, restrained. Not bro-y, not paramilitary cosplay.
- Faith-driven owner: keep tone respectful and values-led, but don't make the site
  itself overtly religious — that's the operator's posture, not the brand pitch.
- Lean on credibility signals (Don Lemon footage, multi-state licensing, exec-protection
  pedigree) rather than adjectives.

## Page-level direction

### Home
- **Hero:** Don Lemon footage (when supplied) as background loop OR fullscreen still
  with subtle motion. Headline + supporting line + primary CTA ("Request a security
  consultation"). Provisional headline placeholder: *"Trusted protection. From the
  boardroom to the motorcade."* — replace when Triston ships final copy.
- **Trust strip:** "Licensed in [States]" (currently AL + AZ — confirm full list with
  Triston), years of operation framed via founder lineage, scope (nationwide for exec
  protection per existing tagline).
- **Service teasers:** 3-up — Guard Services, Surveillance, Executive Protection. Each
  with icon, 1-line, link to services page.
- **Credibility band:** Don Lemon callout + any additional notable engagements Triston
  shares.
- **CTA band:** "Get a quote" → contact form.

### About
- **Origin:** founded by Triston's grandfather; carried into the present by Triston
  and Brad. Keep this short — 2 paragraphs max. **Do NOT name "Eagle Security."**
- **Licensing:** Alabama + Arizona, callouts visible.
- **Team grid:** Triston (co-owner/president), Brad (ops), Brian-Birmingham, Brian-Dallas,
  Virginia (scheduling). Bios are pending from Triston; use placeholder bios on first
  pass with `[TK — bio from Triston]` markers.

### Services
Three pillars. Each gets a section with description, "what's included" bullets, and a
"talk to us" CTA. Until Triston sends copy, draft from these themes:
- **Guard Services** — uniformed officers, residential / commercial / event coverage.
- **Advanced Surveillance** — CCTV, monitoring systems, integrated alerts.
- **Executive Protection** — nationwide; high-profile principals; experienced detail
  leaders.

Mark all draft copy with `[TK — confirm with Triston]`.

### Careers
- 1–2 paragraphs about hiring philosophy (placeholder until Triston supplies).
- JobApplication form (see Forms section).
- Optional: list of typical roles (Field Officer, EP Agent, Dispatch/Scheduling).

### Contact
- ContactSubmission form (see Forms section).
- Contact-method block (email, phone — pending from Triston).
- Service-area note: HQ Birmingham, AL; multi-state licensing (AL, AZ); nationwide for
  EP.

## Forms (from base44 site data model)

### ContactSubmission
Fields: `name`, `email`, `phone`, `service_interest` (Guard / Surveillance / EP / Other),
`message`. Spam-protected. Sends to Triston's email (TBD — request).

### JobApplication
Fields: `name`, `email`, `phone`, `position` (dropdown — Field Officer / EP / Dispatch /
Other), `years_experience`, `licenses_held` (free text), `resume_upload` (PDF/DOCX),
`message`. Sends to Triston's hiring inbox (TBD — request).

Both forms: success state should be a thank-you page with expected response time, not
a popup. Failure state should preserve filled fields.

## Tech recommendation

Match the La Vida pattern Triston is already comfortable with: lightweight static site,
minimal dependencies, fast launch, easy for Triston to take over.

- **Stack:** static HTML + Tailwind (or hand-rolled CSS if simpler), tiny build step.
  Astro is fine if Claude Design prefers a framework with island hydration for the
  forms; vanilla is fine too.
- **Forms:** since Triston self-hosts, easiest path is a form-relay (Formspree, Basin,
  or Web3Forms) so there's no backend. Confirm choice with Marty before wiring.
- **Hosting target:** Triston-owned, likely Netlify/Vercel/cPanel — design for any
  static host.
- **Repo:** create new repo (mirror La Vida pattern under `wofulcarrot/` or `d-dbk/`)
  and add to `.claude/rules/github-scope.md`.
- **No analytics by default** — add only if Triston requests.

## Pending assets from Triston (deadline 2026-05-06)

Tracked in `commitments/20260504-chief-security-assets-from-triston.md`. Status until
Marty confirms receipt:

- [ ] **Reference site link** — the layout template Triston wants to mirror
- [ ] **Logo reference options** Triston mentioned having on hand (for Marty's logo
      iterations workstream — not a v1 blocker)
- [ ] **Existing site content / copy** that should carry over (anything from base44
      worth keeping; bios, service descriptions, contact info)
- [ ] **Don Lemon executive-protection footage** — hero element

> **Marty TODO:** ping Triston Tuesday 5/6 if any of the above are missing — each missed
> asset risks the 5/8 ship date.

## Open questions for Marty / Triston

Surface these in the kickoff with Claude Design or back to Triston:

1. Full list of states licensed (AL + AZ confirmed — others?).
2. Phone, email, business address for footer + contact page.
3. Social presence — does Chief Security have / want LinkedIn, Instagram, etc.?
4. Should we display reviews/testimonials? If yes, sourced from where (the legacy
   Eagle Security listing is explicitly off-limits).
5. Confirm form-relay choice (Formspree vs. Basin vs. other).
6. Any compliance pages we need (privacy, terms)? Generic templates likely sufficient.

## Files in this folder

- `logo.jpg` — supplied logo
- `deliverables/01-build-brief.md` — this doc
- `deliverables/02-content-changes.md` — focused diff vs. base44 site (companion doc)

## Companion docs (this folder)

- **01-build-brief.md** (this doc) — the kickoff
- **02-content-changes.md** — explicit before/after content changes vs. base44
