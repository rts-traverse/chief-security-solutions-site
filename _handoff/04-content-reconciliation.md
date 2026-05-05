---
id: "chief-security-content-reconciliation"
type: handoff
status: final
client: chief-security-solutions
audience: claude-design
created: 2026-05-05
related:
  - "./03-base44-content-snapshot.md"
  - "./01-build-brief.md"
  - "./02-content-changes.md"
---

# Chief Security Solutions — Content Reconciliation

> Live base44 site content vs. discovery-call notes (2026-05-04). Where the two
> conflict, **discovery wins** — those are Triston's stated requests for the new build.
> Where the live site adds detail (real names, real phone, real address, richer copy),
> use it.

## Major reconciliation table

| Topic | Live base44 site | Discovery notes (2026-05-04) | Resolution for new build |
|---|---|---|---|
| **Founder framing** | James "Chief" Parsons — Chief of Police, New Orleans + Birmingham | Grandfather mention OK as origin; scrub "Eagle Security" | Use live-site framing (Chief of Police). No Eagle Security mention. ✅ Already aligned. |
| **Triston's title** | "Co-Owner \| Operations & Strategy" | "co-owner / president (NOT 'operations' — that's Brad's lane)" | **Use Co-Owner / President** per Triston's expressed preference. |
| **Brad's title** | "Co-Owner & Chief Executive Officer" | "Brad — runs all ops" | **Use Co-Owner & CEO** (live-site title is the formal one; "runs all ops" describes his function, not his title). |
| **Brad's last name** | Haynes | (not given) | **Brad Haynes** — confirmed from live site. |
| **Brad's background** | Army Infantry veteran | Former executive protection; ran large army contracts | **Combine:** Army Infantry veteran with executive-protection and large-army-contract experience. |
| **Mandy** | Listed — Administration & Client Services Manager | "Remove: Mandy (fired)" | **REMOVE.** |
| **Alanna** | Listed — Administrative Assistant & Secretary | "Remove: Alana" | **REMOVE.** Note discovery spelling "Alana" vs. live "Alanna" — moot since removed. |
| **Brian(s)** | One Brian — Field Operations Manager (no city) | Two Brians — Birmingham + Dallas field ops | **Two Brians per discovery.** Disambiguate by city. Confirm with Triston whether the live-site Brian is one of the two or a third person. |
| **Virginia / Virginie** | "Virginie" — Scheduling & Operations Coordination | "Virginia — scheduling" | **Use "Virginia"** per discovery. Live-site "Virginie" may be a typo or alternate spelling — flag for Triston confirmation. |
| **Service-area states** | AL, TN, TX, GA, FL + nationwide | Adds AZ as new license | **AL, TN, TX, GA, FL, AZ + nationwide.** |
| **Phone** | (205) 946-7938 | Not given | **(205) 946-7938** — confirmed real. Replaces all `[TK]` phone markers. |
| **Address** | 5325 1st Ave N, Birmingham, AL 35212 | Not given | **5325 1st Ave N, Birmingham, AL 35212** — confirmed real. Replaces "Headquartered in Birmingham, AL" stub. |
| **Email** | Not displayed publicly | Not given | **Still TK** — flag for Triston. |
| **Service offerings** | 4 (permanent guards, temp guards, surveillance, EP) | 3 (guards, surveillance, EP) | **Use 4 per live site** — splitting permanent vs. temporary is a real product differentiation worth surfacing. |
| **Hero tagline** | "Security Built on Legacy. Delivered with Precision." | (not specified) | **Use live-site tagline.** It's stronger than my "From the boardroom to the motorcade" placeholder. |
| **Hero pre-headline** | "Est. Legacy Since 1970s" | (not specified) | **Use live-site pre-headline.** Frames the legacy story up front. |
| **Don Lemon footage** | Not on live site | Required hero element | ✅ Already wired in new build (`images/hero-don-lemon.mp4`). |
| **Arizona license** | Not on live site | Newly licensed; surface | **Add to footer + about page.** |

## Content blocks worth carrying forward (from live site)

These were absent from the original discovery brief because the WebFetch returned only
the SPA shell. Now confirmed and worth incorporating:

1. **Timeline visualization on About** — three milestones (Foundation → Continuation → March 2025 New Leadership). Strong story device.
2. **Six core values** — Service · Accountability · Integrity · Readiness · Professionalism · Discretion. Use these on About; replace my "Integrity · Discretion · Discipline · Service" footer micro-copy with this richer set.
3. **Industries grid** — Commercial · Retail · Construction · HOA · Events · Healthcare · Government · Industrial · Executive · Multi-Site. Add to home page or services page.
4. **Process: 4-step** — Assessment → Planning → Deployment → Monitoring. Add to services page.
5. **Why Choose Us — 6-up** — Licensed & Insured · Veteran-Led · 24/7 Operations · Background Checked · Real-Time Reporting · Nationwide Coverage. Add to home page (replaces my dl/dt/dd stat block or sits beneath it).
6. **Stats** — 50+ years legacy · 5+ states served · 24/7 operations · 50+ years combined experience.
7. **FAQ block on Contact** — 4 Q&As about licensing, contracts, armed/unarmed, nationwide coverage. Add to contact page.
8. **Two CTA buttons in hero** — "Schedule Assessment" + "Immediate Coverage". The "Immediate Coverage" CTA is a smart secondary action for urgent inquiries.
9. **Trust chips below hero** — Veteran-Led · Licensed & Insured · 24/7 Dispatch.

## Outstanding questions for Triston (rolled up from both sources)

1. **Email address** for footer + contact page — none on live site, none in discovery.
2. **Two Brians or three?** — Live site lists one Brian (no city). Discovery says two (Birmingham + Dallas). Is the live-site Brian the same as Birmingham-Brian, or is he a third person no longer with the company?
3. **Virginia or Virginie spelling?**
4. **Add AZ to the service-area state list** — confirm timing (live now? coming soon?).
5. **Hero tagline** — keep "Security Built on Legacy. Delivered with Precision." or test something else?
6. **Is the live-site Brad bio (extensive EP for celebrities + politicians) accurate, OK to carry forward verbatim?**

## Form-handling decision still needed

Both `JobApplication` and `ContactSubmission` forms currently post to the base44 backend.
The new build needs the team to choose a form-relay:
- **Formspree** — easiest, generous free tier, supports file uploads on paid
- **Basin** — clean dev experience, file uploads on free
- **Web3Forms** — totally free, simpler API

Cost: all three are <$10/mo for this volume. Pick one and Claude Design wires it up
during the polish pass.
