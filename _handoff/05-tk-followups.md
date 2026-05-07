# TK Follow-Ups — Open Items Removed From Live Site

**Date stripped from site:** 2026-05-07
**Why:** Remove all `[TK]` placeholders and dev notes from the website prior to sharing with the client. Original dev notes preserved here so the open items aren't lost.

Each row records: what was on the site, where it was, and what's needed to fully resolve it (i.e. add real copy / wiring).

---

## 1. Site copy — open content items

| # | Page | Section | What was there | Needed to resolve | Owner |
|---|------|---------|----------------|-------------------|-------|
| 1 | services.html | Guard Services (`#guards`) | `[TK, specific service-area copy and any commercial industry verticals Triston wants highlighted.]` | Add a paragraph after the lead Guard Services copy listing Chief's commercial verticals (e.g. retail, healthcare, hospitality, residential HOA) and any service-area specifics Triston wants emphasized. | Triston |
| 2 | services.html | Advanced Surveillance (`#surveillance`) | `[TK, specific monitoring SLA, response protocols, and any partner integrations Triston wants surfaced.]` | Confirm and publish: monitoring response-time SLA, escalation protocol, and any named hardware/integration partners (alarm panels, VMS platforms, etc.). | Triston |
| 3 | services.html | Executive Protection (`#executive-protection`) | After "Featured engagement: protective coverage for journalist Don Lemon." → `[TK, finalize framing and supporting footage / still asset from Triston for the homepage hero and a dedicated callout here.]` | (a) Confirm public-facing language for the Don Lemon engagement. (b) Provide a hero still or short footage clip cleared for use on the homepage and this section. | Triston |
| 4 | about.html | Origin story | `[TK, expand origin story copy with input from Triston, especially anything he wants to highlight about his grandfather's influence and the standard of care it set.]` | Add a 2–3 sentence paragraph from Triston on his grandfather's legacy and the standard of care being carried forward. | Triston |
| 5 | about.html | Team grid (Brian — Birmingham) | Lead-in real, but bio body was `[TK, bio from Triston]` | Provide 2–3 sentence bio for Brian (Birmingham field ops). | Triston |
| 6 | about.html | Team grid (Brian — Dallas) | Lead-in real, bio body was `[TK, bio from Triston]` | Provide 2–3 sentence bio for Brian (Dallas field ops). Note: two team members named Brian — keep the city disambiguation when bios go in. | Triston |
| 7 | about.html | Team grid (Virginia — Scheduling) | Lead-in real, bio body was `[TK, bio from Triston]` | Provide 2–3 sentence bio for Virginia (scheduling / detail coordination). | Triston |
| 8 | careers.html | Page header | `[TK, hiring philosophy + benefits language from Triston.]` | Add 1–2 sentences on Chief's hiring philosophy and what they offer (compensation, training, advancement). | Triston |

---

## 2. Team photos — visual placeholders

The `gradient-shield` divs on `about.html` previously displayed the literal text `[TK photo]`. The dev label has been removed; the gradient placeholder remains as a visual.

| Slot | Person | Action needed |
|------|--------|---------------|
| 1 | Triston Parsons (Co-Owner / President) | Provide professional headshot, ~4:3 crop. |
| 2 | Brad Haynes (Co-Owner / CEO) | Provide professional headshot, ~4:3 crop. |
| 3 | Brian (Birmingham, Field Operations) | Provide headshot. |
| 4 | Brian (Dallas, Field Operations) | Provide headshot. |
| 5 | Virginia (Scheduling) | Provide headshot. |

When photos arrive, replace the `<div class="aspect-[4/3] gradient-shield ...">` block with an `<img>` tag at the same aspect ratio, preserving the rounded corners and bottom margin.

---

## 3. Form wiring — backend integration

Both forms currently `POST` to `action="#"` (no-op). The visible "Implementation note (Claude Design)" disclosure paragraph and the inline TK HTML comment have been removed from both pages.

| Page | Form | What's needed |
|------|------|---------------|
| contact.html | Contact / inquiry form (maps to legacy `ContactSubmission`) | Choose a form-relay (Formspree, Basin, Web3Forms, or custom). Update `<form action="...">` and verify field-name mapping matches whatever destination (CRM / inbox) Chief wants submissions delivered to. |
| careers.html | Job application form (maps to legacy `JobApplication`) | Same as above — choose relay, set `action`, confirm file-upload (`enctype="multipart/form-data"`) is supported by the chosen relay for résumé attachments. |

After wiring, smoke-test each form end-to-end: real submission → relay receives → email/CRM ingest works.

---

## 4. Email address

Discovery flagged the public-facing email as still **TK** (not surfaced on the live site, not provided in onboarding). If Chief wants an email address shown anywhere (footer, contact page sidebar), Triston needs to provide it. Until then, phone (205) 946-7938 remains the published contact.

---

## 5. Notes for whoever picks this up next

- Real, confirmed content stays in place: phone, address, six licensed states (AL/TN/TX/GA/FL/AZ), team roster names + roles, service pillars, Don Lemon engagement, Triston/Brad leadership.
- Original dev pack with full context lives in `_handoff/01-build-brief.md`, `02-content-changes.md`, `03-base44-content-snapshot.md`, and `04-content-reconciliation.md`. Those documents reference the original `[TK]` markers that have now been stripped from the HTML — leave the references as historical record.
- After Triston returns each item above, drop the new copy in place and remove that row from this file (or strike it through). When all rows are resolved, this doc can be archived.
