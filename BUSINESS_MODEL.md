# AuditsReady — Business Model

> **Status:** Working model as of 2026-07-05, written alongside the industrial-manufacturing repositioning (branch `reposition-manufacturing`). This documents *how the money is meant to work* so the pricing on the site has a rationale behind it.
>
> **Read this honestly:** items marked **[Established]** are grounded in the repo (CLAUDE.md, page copy, the pre-assessment checklist PDF). Items marked **[Assumption]** are unvalidated bets — no case studies or conversion data exist yet. Do not treat assumptions as facts.

---

## 1. What we sell

**[Established]** A **productized consulting service**, not a software product:

- A licensed Professional Engineer (P.Eng, APEGA) reviews a manufacturer's quality documentation against ISO 9001:2015 and returns a findings report: what's missing, mapped to specific clauses, with corrective-action recommendations.
- Delivery is **email-based**: documents in, report out. No login, no platform, no subscription in the MVP/Phase 1.
- Modern analysis tooling speeds up the review; **every finding is reviewed and signed off by the P.Eng** before it reaches the customer. Nothing is auto-generated and shipped.

> Note: the pre-repositioning pricing page implied a SaaS platform (monthly subscriptions, "conversions/month", API access). That contradicted the actual email-consulting model in CLAUDE.md and was removed in the repositioning.

## 2. The problem we solve

**[Established]** A small/mid-size manufacturer needs ISO 9001 certification — usually because a large customer requires it to stay on the approved-supplier list. To certify, an external auditor inspects them.

The buyer is trapped between two expensive options:

| Path | Cost | Source |
|---|---|---|
| Fail the certification audit | **$8,000–$15,000** wasted audit fees + **3–6 months** delay | pre-assessment checklist PDF |
| Hire a traditional consultant to prevent that | **$15,000–$50,000** | competitor pricing, cited in FAQ/blog |

**AuditsReady sells the cheap insurance in the middle:** find the gaps *before* the auditor does, for a fraction of either cost. The strongest single argument on the site is the failed-audit cost framing — a pre-assessment costs a fraction of a failed audit.

## 3. The offer ladder (the model)

**[Established]** Three rungs, each designed to de-risk the *next* purchase for a skeptical buyer who has never heard of us:

```
FREE SAMPLE            PILOT                  FULL ENGAGEMENT
1 document        →    $597              →    $1,500
quality manual         one process             full documentation
or a single SOP        area                    gap analysis +
                                               clause-by-clause report +
real sample report     paid, real work         corrective-action roadmap +
at no charge           filters tire-kickers    1 review call
```

| Rung | Price | Purpose | Cost to us |
|---|---|---|---|
| Free sample | $0 | Lead magnet + proof of quality. Buyer sees real work, not marketing. | ~1 hr P.Eng time |
| Pilot Gap Analysis | $597 | "Just try it" tier. Small enough to approve without a PO; large enough to signal the work is real. | Bounded to one doc set |
| Full Gap Analysis | $1,500 | **The actual product.** Buyer has seen quality twice (free + pilot), so this is a low-friction upsell. | Full engagement |

**Where the revenue comes from:** the **$1,500 full engagements**. The free sample and pilot are customer-acquisition costs, funded by P.Eng labor instead of ad spend.

### Why $597 for the pilot
**[Established]** The task brief specified a $500–750 range with $597 as the default. Within that range $597 is defensible because:
- **Charm/anchor pricing** — reads meaningfully below $600.
- **~40% of the $1,500 full** — a real commitment that filters non-buyers, but low enough for a quality manager to approve without a purchase-order process.
- **Clearly not "free"** — a ~$600 price signals "real paid work," protecting the perceived value of the full analysis.

## 4. Unit economics — the bet that has to hold

**[Assumption]** The model only works if **P.Eng hours per engagement stay low**. The entire pitch ("tooling reviews fast, engineer validates") is an economic claim: a gap analysis that costs a traditional consultant 4–8 weeks of billable hours must take a fraction of that here.

Illustrative targets (to validate, not published claims):

| Engagement | Price | Target P.Eng hours | Implied effective rate |
|---|---|---|---|
| Pilot | $597 | 2–3 hrs | ~$200–300/hr |
| Full | $1,500 | 5–8 hrs | ~$190–300/hr |

- If a full engagement eats **~40 hours**, the model is **broken** (effective rate ≈ $37/hr).
- If it's **~5–8 hours** (tooling drafts, engineer reviews and signs off), the margin is real and competitive with the $125–250/hr consultants charge.

**This is the core business bet:** tooling-assisted-but-human-validated gap analysis can be delivered fast enough that $1,500 is profitable — while staying trustworthy enough that a quality manager will stake their audit on it.

## 5. Known fragilities

**[Established / Assumption mixed]**

- **One-time, not recurring.** A manufacturer buys a gap analysis roughly once per certification cycle. No recurring revenue in the MVP — which is *why* the old page bolted on monthly SaaS subscriptions (now removed as off-model). Recurring revenue (surveillance-audit retainers, annual re-checks, subscription re-reviews) is an **open Phase 2 question** the repo has not answered.
- **Capacity-bound.** Revenue scales with available P.Eng hours. One engineer caps throughput. Growth requires more engineers or more automation of the drafting step (keeping human sign-off).
- **No proof yet.** CLAUDE.md notes there are no case studies and conversion is unproven. The free → pilot → full ladder is a *hypothesis* about converting cold skeptics, not a validated funnel.
- **Trust is the whole game.** The buyer's fear is AI-generated docs failing a real audit. The P.Eng sign-off and "nothing auto-generated and shipped" framing exist to neutralize exactly that fear. If that trust erodes, the price ladder collapses.

## 6. Target customer (beachhead)

**[Established]** Small and mid-size **general industrial manufacturers** (10–500 employees): building materials, packaging, plastics, metal fabrication, industrial products — preparing for certification, surveillance audits, or customer audits. Other manufacturing sectors are reachable but secondary. The buyer is a skeptical plant/quality manager, not a tech buyer.

## 7. Turnaround standard

**[Established]** Free single-document sample in **~24 hours**; full engagement in **~2 weeks**. (Standardized in the repositioning; the old "48–72 hours" claims were reconciled to this.)

---

## Open questions to resolve

1. **Validate the hours-per-engagement assumption** — track actual P.Eng time on the first 5–10 real jobs. This is the make-or-break number.
2. **Path to recurring revenue** — is there a retainer/annual-review product, or is this inherently transactional?
3. **Capacity plan** — at what monthly volume does one P.Eng saturate, and what's the next hire/automation step?
4. **Conversion data** — free → pilot and pilot → full conversion rates are currently unknown. The whole ladder rests on these.

---

**Last updated:** 2026-07-05
**Related:** `CLAUDE.md` (positioning, pages), `public/downloads/iso-9001-pre-assessment-2026.md` (failed-audit cost framing)
