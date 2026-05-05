---
id: "chief-security-content-changes"
type: deliverable
status: draft
client: chief-security-solutions
context: client:chief-security-solutions
audience: claude-design
created: 2026-05-04
related:
  - "clients/chief-security-solutions/deliverables/01-build-brief.md"
  - "decisions/20260504-chief-security-website-build.md"
  - "meetings/external/20260504-parsons-discovery.md"
tags: [chief-security, website, content-diff]
---

# Chief Security Solutions — Content Changes vs. Current Site

> Companion to `01-build-brief.md`. This is a focused diff — what comes out, what stays,
> what's new. Source of truth for content questions during the build.

## Source of truth

- Current site: https://chiefsecuritysolutions.base44.app/
- The base44 site is a client-side rendered SPA — `WebFetch` returns shell HTML only.
  Claude Design should open the live site in a browser to read existing copy and
  capture screenshots before starting; treat the changes below as overrides on top of
  whatever copy is reused.

## REMOVE

| Item | Reason |
|---|---|
| All "About Eagle Security" history / narrative | Legacy brand has lawsuit + bad Google reviews on its old listing. Clean slate. |
| Mention of the post-grandfather business partner | Same. |
| **Mandy** from team page | No longer with the company |
| **Alana** from team page | No longer with the company |
| Triston's title "operations" (if present anywhere) | Wrong — Brad runs ops |

## KEEP (subject to copy review)

| Item | Notes |
|---|---|
| Tagline: "Your comprehensive security partner, providing expert guards, advanced surveillance, and executive protection nationwide." | Solid; good as-is or as basis for hero subline |
| Three service pillars: Guard Services / Surveillance / Executive Protection | Confirmed in discovery |
| ContactSubmission and JobApplication form patterns | Reuse the data model |
| Sitemap (Home, About, Services, Careers, Contact) | Confirmed |

## ADD

| Item | Detail |
|---|---|
| Origin story (light) | Founded by Triston's grandfather. Carried forward by Triston and Brad as Chief Security Solutions. ~2 paragraphs max. |
| Arizona license | New — surface in footer + About. AL + AZ licensing now. |
| **Triston Parsons — co-owner / president** | Team page lead |
| **Brad — ops lead** | Former executive protection, ran large army contracts. Bio TK from Triston. |
| **Brian (Birmingham) — field ops** | Bio TK from Triston |
| **Brian (Dallas) — field ops** | Bio TK from Triston. Disambiguate the two Brians by city in display. |
| **Virginia — scheduling** | Bio TK from Triston |
| Don Lemon executive-protection footage | Hero element, home page. Footage pending from Triston. Caption direction: *"We've provided for the highest-profile individuals on both sides of the aisle."* |

## CHANGE

| Item | From → To |
|---|---|
| Home hero | Static hero (current) → Don Lemon footage hero (background video or featured still) |
| About | Eagle Security history-led → Origin story-light + AZ license + team grid |
| Team page | Old roster (Mandy, Alana, etc.) → Brad / 2 Brians / Virginia (+ Triston as co-owner/president) |
| Footer credibility | Single-state framing → Multi-state licensing (AL + AZ) |

## Placeholder strategy for missing copy

For anything Claude Design has to draft because Triston hasn't sent copy yet, use the
inline marker `[TK — confirm with Triston]` so it's grep-able for review before launch.
Examples:

- Bios for Brad / 2 Brians / Virginia → `[TK — bio from Triston]`
- Final hero headline → `[TK — confirm hero copy with Triston]`
- Service descriptions if Triston supplies more specific framing
- Phone / email / business address in footer and contact page

Do **not** guess at:
- Specific licensure numbers
- Years of operation / founding year (grandfather era — date unconfirmed)
- Notable past clients beyond Don Lemon
- Pricing on services (none should appear; this is a quote-driven sales motion)

## Things explicitly NOT to do

- Don't invent testimonials.
- Don't surface the legacy Eagle Security Google reviews or link to that profile.
- Don't put pricing on the marketing site — services are quoted per engagement.
- Don't paramilitarize the visual language (no tactical-camo, no skulls, no "operator"
  imagery). The brand posture is formal protection, not Instagram-PMC.
