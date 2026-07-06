# AuditsReady - Marketing Website

## Project Overview

Marketing and landing page for AuditsReady, a P.Eng-validated ISO 9001 gap analysis service for small and mid-size manufacturers.

**Positioning (as of 2026-07-05):** ISO 9001 gap analysis for small and mid-size **general industrial manufacturers** (10–500 employees) — building materials, packaging, plastics, metal fabrication, and industrial products — preparing for certification, surveillance audits, or customer audits. Every finding is reviewed and signed off by a licensed Professional Engineer (P.Eng). AI/modern tooling is the *how* (speed/cost), never the headline; outputs are "drafted for your review, validated by a P.Eng" — never "auto-generated." Other manufacturing sectors are reachable via a secondary line but the hero speaks to industrial manufacturers. See the 2026-07-05 Recent Updates entry for details.

**Purpose:** Customer acquisition and lead generation
**Location:** `/Users/gjayasun/git/auditsready`
**Live Site:** https://auditsready.com

## Technology Stack

- **Framework:** Next.js (latest) with React
- **Styling:** Tailwind CSS v3.0+
- **Analytics:** Google Analytics 4 (G-223ZBY1BM9)
- **Email Service:** Resend API (free tier: 100 emails/day)
- **Email Forwarding:** ImprovMX (info@auditsready.com forwarding)
- **Deployment:** Vercel (auto-deploy on push to main)

## Project Structure

```
auditsready/
├── pages/
│   ├── _app.js           # Analytics tracking
│   ├── _document.js      # GA script injection
│   ├── index.js          # Main landing page with contact form modal
│   ├── faq.js            # FAQ page (28 questions, contact form modal)
│   ├── pricing.js        # Pricing page
│   ├── privacy.js        # Privacy policy (comprehensive, GDPR/CCPA compliant)
│   ├── terms.js          # Terms of Service
│   ├── refund-policy.js  # Refund and Cancellation Policy
│   ├── acceptable-use.js # Acceptable Use Policy
│   ├── api/
│   │   └── contact.js    # Contact form API endpoint (Resend integration)
│   └── blog/
│       ├── index.js      # Blog listing page
│       └── [13 blog posts - see Blog Content Strategy section]
├── lib/
│   └── gtag.js          # Google Analytics helpers
├── public/
│   ├── iso-9001-ai-powered-compliance-auditsready-logo.png
│   ├── auditsready-demo.mp4  # 8-second demo video (4.7MB)
│   ├── sitemap.xml       # 20 URLs (homepage, faq, pricing, 4 legal pages, blog, 13 posts)
│   ├── robots.txt
│   ├── iso-9001-auditsready-favicon.ico
│   ├── iso-9001-auditsready-favicon.svg
│   ├── iso-9001-auditsready-app-icon.png
│   └── downloads/        # Lead magnet deliverables
│       ├── iso-9001-checklist.html (convert to PDF)
│       ├── iso-9001-implementation-roadmap.html (convert to PDF)
│       └── iso-9001-gap-analysis-template.csv
├── LAWYER_REVIEW_NEEDED/        # Legal documents (MVP/Phase 1)
│   ├── README.md                # Complete legal package guide
│   ├── TERMS-OF-SERVICE-DRAFT.md
│   ├── PRIVACY-POLICY-DRAFT.md
│   ├── REFUND-CANCELLATION-POLICY-DRAFT.md
│   ├── ACCEPTABLE-USE-POLICY-DRAFT.md
│   ├── STATEMENT-OF-WORK-TEMPLATE.md  # Use for each customer project
│   ├── MASTER-SERVICES-AGREEMENT-DRAFT.md  # Phase 2 only
│   ├── LAWYER-REVIEW-SUMMARY.md
│   ├── LAWYER-INTERVIEW-QUESTIONNAIRE.md
│   ├── LAWYER-RESEARCH-DIRECTORY.md
│   └── EMAIL-TO-LAWYER-TEMPLATE.md
├── .env.example         # Environment variables documentation
├── .env.local           # Local environment variables (gitignored)
├── package.json
├── next.config.js       # Security headers
├── tailwind.config.js
├── EMAIL_RESPONSE_TEMPLATE.md    # Email templates for checklist requests
└── CHECKLIST_DELIVERY_GUIDE.md   # Instructions for PDF conversion and delivery
```

## Key Features

### Landing Page Sections (as of 2026-07-05 repositioning)
1. **Hero** - "Pass your ISO 9001 audit — without the $20K consultant." P.Eng trust pill + subheadline (P.Eng, 12+ yrs, building-materials/packaging) + beachhead industries line. Primary CTA: "Get a free gap analysis of your quality manual or one SOP" (opens modal); secondary CTA: "Book a 15-minute call"
2. **How It Works** - 8-second demo video (auditsready-demo.mp4) + 3-step process (Send Documents → P.Eng Reviews the Gaps → Get Audit-Ready Findings) with factual P.Eng trust badge (APEGA, 12+ yrs) + Free ISO 9001 Checklist CTA
3. **Why Trust Us** - Credibility proof points (licensed P.Eng/APEGA 12+ yrs; IKO Industries + WestRock experience; findings mapped to ISO 9001:2015 clauses; failed-audit cost $8K–$15K + 3–6 months) + the SINGLE AI mention, framed as speed with mandatory P.Eng validation
4. **What You Get** - Deliverables: clause-by-clause findings, corrective action recommendations, P.Eng sign-off ("drafted for your review, validated by a P.Eng")
5. **Built for Industrial Manufacturers** - Beachhead industries + 10-500 employees + audit milestones; secondary "different sector? just ask" line
6. **Pricing/CTA** - Pilot Gap Analysis $597 → Full Gap Analysis $1,500; failed-audit cost framing; free-sample CTA
7. **Footer** - Contact info with click-to-reveal phone; P.Eng sign-off tagline (no "artificial intelligence" tagline)

### Contact Form (Modal)
- Professional modal popup with form fields (Name, Company, Email, Phone, Message)
- Integrated with Resend API for reliable email delivery
- Sends to info@auditsready.com → ImprovMX forwards to personal email
- Success/error handling with user-friendly messages
- 24-hour callback promise displayed

### Phone Number Protection
- `PhoneReveal` component prevents bot scraping
- Used in hero, pricing, and footer
- Phone: +1-403-404-4643

## Development Workflow

```bash
npm install              # Setup
npm run dev             # Development (localhost:3000)
npm run build           # Production build
npm start               # Start production server
git push origin main    # Auto-deploys to Vercel
```

## Target Market

**Primary (beachhead):** Small and mid-size **general industrial manufacturers** (10-500 employees) — building materials, packaging, plastics, metal fabrication, and industrial products — preparing for ISO 9001 certification, surveillance audits, or customer audits
**Secondary:** Other manufacturing sectors (reachable via a secondary line, not the hero)
**Geographic:** North America and worldwide (no hard geographic restrictions)
**Buyer:** Skeptical plant manager or quality manager at a small/mid-size manufacturer; fears AI-generated compliance documents failing a real audit. Write for them, not a tech buyer.

## SEO Implementation

### Meta Tags (Positioning: beachhead + P.Eng, not AI)
- Title: "ISO 9001 Gap Analysis for Small & Mid-Size Manufacturers | P.Eng-Validated | AuditsReady"
- Keywords: ISO 9001 gap analysis, ISO 9001 pre-assessment, ISO 9001 for small manufacturers, P.Eng validated, building materials manufacturing, packaging manufacturing, plastics manufacturing, metal fabrication, industrial products manufacturing
- Lead with the beachhead industries + P.Eng validation; keep other sectors as secondary
- **No "AI" in the page title or meta description.** AI may appear once, lower on the page, framed as speed/cost — always paired with mandatory P.Eng validation
- Geographic scope: North America and worldwide

### Structured Data
- ProfessionalService schema (knowsAbout leads with the beachhead industries; fabricated aggregateRating removed)
- Service schema with offerings and business audience
- FAQPage schema with 4 strategic questions for rich snippets
- Phone number visible to crawlers in structured data

### Technical SEO
- ✅ Sitemap.xml (submitted to Google Search Console)
- ✅ Favicon files (ICO, SVG, Apple Touch Icon)
- ✅ robots.txt configured
- ✅ Mobile-responsive
- ✅ Security headers (CSP, XSS protection, etc.)

### Google Search Console
- **Status:** Domain verified (DNS method)
- **Sitemap:** Submitted (shows 2 pages, needs re-submit to show 5 pages)
- **Indexing:** Homepage and privacy indexed, blog posts pending

## Configuration

### Environment Variables
```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-223ZBY1BM9

# Resend API for contact form emails
RESEND_API_KEY=re_your_key_here  # Get from https://resend.com/api-keys
```

**Note:** Store in `.env.local` for local development (gitignored). Add to Vercel environment variables for production.

### Security Headers (next.config.js)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- X-XSS-Protection: 1; mode=block
- Content-Security-Policy with strict directives

## Contact Information

- **Primary Emails (Google Workspace Users):**
  - gayan@auditsready.com (Owner, primary contact)
  - yashi@auditsready.com (Support)
- **Public-Facing Email Aliases:**
  - info@auditsready.com (General inquiries - routes to gayan@ or yashi@)
  - sales@auditsready.com (Sales - routes to team)
  - compliance@auditsready.com (Compliance queries - routes to team)
  - noreply@auditsready.com (Automated emails only)
- **Phone:** +1-403-404-4643 (click-to-reveal component)
- **Serving:** North America and worldwide — beachhead is small/mid-size industrial manufacturers (building materials, packaging, plastics, metal fabrication, industrial products); other sectors reachable via secondary line
- **Contact Form:** Modal popup with Resend API integration

## Recent Updates

### 2026-07-05: Repositioning — Industrial Manufacturing Beachhead + P.Eng-Led (branch: reposition-manufacturing)
- 🎯 **New positioning**: Away from "AI-Powered ISO 9001 | Any Manufacturing Industry" (which was failing to convert) toward **P.Eng-validated ISO 9001 gap analysis for small/mid-size general industrial manufacturers** (building materials, packaging, plastics, metal fabrication, industrial products; 10-500 employees). Two problems being fixed: (1) generalist "any industry/size/worldwide" is no positioning; (2) "AI-powered" as the headline scares the buyer (a quality manager who fears AI-generated docs failing a real audit). AI is the *how*, not the headline.
- ✅ **`pages/index.js`**: Hero rewrite ("Pass your ISO 9001 audit — without the $20K consultant."), P.Eng trust pill, free-gap-analysis primary CTA + 15-min call secondary. Demoted AI to a single speed/cost mention with mandatory P.Eng validation. Added "Why Trust Us" credibility section (proof points + $8K–$15K failed-audit framing reused from the pre-assessment checklist) and "What You Get" deliverables. Replaced generalist section with "Built for Industrial Manufacturers." Added Pilot $597 → Full $1,500 offer. Rewrote title/meta/OG/Twitter + all JSON-LD; removed fabricated 5.0 aggregateRating.
- ✅ **`pages/pricing.js`**: Replaced per-25-document packages ($1,500/$2,500/$4,500) and monthly SaaS subscriptions ($99/$299/$999) with **Pilot $597 → Full $1,500** gap-analysis offer. Rebuilt cost-comparison table; removed fabricated ROI numbers. De-AI'd title/meta/JSON-LD/copy/footer; dropped "AI generates SOPs" claim.
- ✅ **`pages/faq.js`**: Reconciled turnaround to **~2 weeks** (was "48-72 hours"); reframed AI answers (tooling is the *how*, P.Eng validates every finding, drafts are for review — never auto-shipped); updated pricing refs to $597/$1,500; de-AI'd meta + bottom CTA.
- 📐 **Turnaround standard**: Free single-document sample in ~24 hours; full engagement in ~2 weeks.
- ⚠️ **NOT yet done (intentional)**: (1) **Blog** (`pages/blog/index.js` + 13 post bodies, ~40,000 words) still AI-forward — two index excerpts say "AI-powered" and post #11 is literally "Traditional ISO Consultants vs. AI"; realigning is a separate large effort. (2) Logo filename still `iso-9001-ai-powered-compliance-auditsready-logo.png` (cosmetic). (3) `public/sitemap.xml` tone still generalist. (4) The MVP pricing model and lead-magnet copy below in this file still reference the old package/subscription framing where noted.
- 📦 **Status**: On branch `reposition-manufacturing` (2 commits), not pushed, no PR — awaiting owner review per instruction.

### 2026-01-28: Blog Content Phase 1 Complete (13/13 Posts)
- ✅ **3 New Blog Posts Published**: Completing the 13-post content strategy
  - Post #11: "Traditional ISO Consultants vs. AI" (3,200 words) - Thought leadership
  - Post #12: "5 ISO 9001 Myths That Cost Manufacturers Thousands" (2,800 words)
  - Post #13: "What Happens If You Fail Your ISO 9001 Audit?" (3,500 words)
- ✅ **Blog Index Updated**: Now displays all 13 posts
- ✅ **Sitemap Updated**: Now 20 URLs total
- ✅ **Phase 2 Planning**: 10 additional high-SEO topics identified for future content
- 📊 **Total Blog Content**: 40,000+ words across 13 comprehensive posts

### 2026-01-28: Copyright Year Update & Dynamic Year Implementation
- ✅ **Dynamic Copyright Year**: Changed from hardcoded year to `{new Date().getFullYear()}`
- ✅ **Legal Pages Updated**: "Last updated: January 2026" on all 4 legal pages
- ✅ **Zero Maintenance**: Copyright now auto-updates annually

### 2025-01-10: FAQ Page with 28 Questions Deployed
- ✅ **Comprehensive FAQ Page Created**: `/pages/faq.js` with 28 Q&A pairs
  - 6 themed sections: Getting Started, Cost & Pricing, Process & Requirements, Industry-Specific, AI & Technology, Common Concerns
  - All answers formatted with clean bullet points for readability
  - Targets ~18,000 monthly searches across high-value ISO 9001 keywords
- ✅ **Contact Form Integration**: Same modal as homepage for easy lead capture
  - Both "Book Free Demo" and "Book AI Demo" CTAs open modal (no redirect)
  - Keeps users on FAQ page for better UX
- ✅ **SEO Optimization**: FAQ Schema markup for Google rich snippets
- ✅ **Internal Linking**: Optional link support in answers (e.g., links to blog posts)
- ✅ **Navigation**: Table of contents for quick access to sections
- ✅ **Sitemap Updated**: Added FAQ page with priority 0.8
- ✅ **Footer Updated**: Added FAQ link to Resources section

### 2025-01-09: Legal Pages Deployed to Production
- ✅ **4 Legal Pages Created**: All legal policies now live on website
  - `/pages/terms.js` - Terms of Service (16 sections, ~400 lines)
  - `/pages/privacy.js` - Privacy Policy updated (comprehensive GDPR/CCPA compliance, ~408 lines)
  - `/pages/refund-policy.js` - Refund and Cancellation Policy (10 sections, ~370 lines)
  - `/pages/acceptable-use.js` - Acceptable Use Policy (11 sections, ~290 lines)
- ✅ **Homepage Footer Updated**: Clean 4-column layout with Legal section
  - Column 1: Contact Us
  - Column 2: Services
  - Column 3: Resources (Blog, Pricing)
  - Column 4: Legal (4 policies)
- ✅ **Privacy Policy Enhanced**: Added Section 10.3 Document Transfer
  - Primary method: Email with HTTPS/TLS encryption
  - Alternative: Secure Cloud Storage (Google Drive/Dropbox available upon request)
  - Clear customer responsibility for security choices
- ✅ **Sitemap Updated**: Added 3 new legal pages (now 16 URLs total)
  - `/terms`, `/refund-policy`, `/acceptable-use` added with priority 0.3
  - Last modified date: 2025-01-09
- ✅ **SEO Optimized**: All legal pages have proper meta tags, robots index/follow
- ✅ **Professional Formatting**: No emojis, clean bullet points, phone numbers displayed directly (B2B standard)
- 📁 **Source Documents**: `/LAWYER_REVIEW_NEEDED/PRIVACY-POLICY-DRAFT.md` updated to match production

### 2025-11-09: Legal Documents Adapted for MVP/Phase 1
- ✅ **All Legal Documents Updated**: Adapted 5 legal documents from SaaS platform to email-based consulting services
  - **Terms of Service**: Project-based fees, email delivery method, 90-day data retention, project completion/cancellation
  - **Privacy Policy**: No user accounts in MVP, email security notices, 90-day retention, email-based data collection
  - **Refund Policy**: Project cancellation (before/after work begins), EU withdrawal rights for consulting, project alternatives
  - **Acceptable Use Policy**: Document submission ethics, reselling restrictions, deliverable misuse prevention
  - **Master Services Agreement**: Marked as "Phase 2 Only" - not used for MVP email-based services
- ✅ **Statement of Work (SOW) Template Created**: Comprehensive contract template for each customer project
  - Defines scope, deliverables, timeline, and fees for each engagement
  - Customer/provider responsibilities clearly outlined
  - Confidentiality and IP ownership terms
  - Critical disclaimers (no certification guarantee, AI limitations, professional services disclaimer)
  - Document submission instructions for email-based workflow (Appendix A)
  - Use this template for EVERY customer engagement in MVP/Phase 1
- 📁 **Location**: All documents in `/LAWYER_REVIEW_NEEDED/` folder (10 files total: 5 policies + SOW + MSA + 3 lawyer guides)
- ⚠️ **Status**: DRAFTS - require lawyer review before production use (~$6k-$10k budget, 6 weeks timeline)
- 🎯 **Next Steps**: Find lawyer, send complete package for review, implement on website after approval

### 2025-11-08: Google Workspace Setup & Email Fix
- ✅ **Google Workspace Configured**: Added gayan@auditsready.com and yashi@auditsready.com
  - 2 user accounts with professional email addresses
  - Email aliases: info@, sales@, compliance@, noreply@ (all route to user accounts)
  - Replaced ImprovMX forwarding with native Google Workspace
- ✅ **Contact Form Fixed**: Removed reply_to header causing Gmail phishing warnings
  - Emails now deliver cleanly without security warnings
  - Customer email still visible in body for manual replies

### 2025-11-07: Lead Magnet Deliverables Created
- ✅ **12-Page ISO 9001 Checklist**: Complete implementation guide with all 10 clauses
  - File: `public/downloads/iso-9001-checklist.html` (convert to PDF)
  - 47 actionable checklist items
  - Professional AuditsReady branding (no watermarks)
  - Tips, warnings, and best practices included
  - CTA with contact information on every page
- ✅ **6-Month Implementation Roadmap**: Month-by-month project plan
  - File: `public/downloads/iso-9001-implementation-roadmap.html` (convert to PDF)
  - Weekly tasks and deliverables for each month
  - Timeline from zero to certification
  - After-certification maintenance guide
- ✅ **Gap Analysis Template**: Excel/CSV format with 47 requirements
  - File: `public/downloads/iso-9001-gap-analysis-template.csv`
  - Pre-filled with all ISO 9001 clauses
  - Columns: Clause, Requirement, Status, Gap, Action, Owner, Date
  - Opens directly in Excel
- ✅ **Email Response Templates**: Professional templates for customer requests
  - File: `EMAIL_RESPONSE_TEMPLATE.md`
  - Main template + 3 variations (industry-specific, urgent, cost-focused)
  - Follow-up email template (3 days after initial send)
  - Instructions for Gmail/Outlook integration
- ✅ **Delivery Guide**: Step-by-step instructions for PDF conversion and delivery
  - File: `CHECKLIST_DELIVERY_GUIDE.md`
  - 3 methods: Browser print, command-line, online converters
  - Quality checklist for verification
  - Manual and automated delivery options
- ✅ **Demo Video**: Added 8-second AI demonstration video to "How It Works" section
  - File: `auditsready-demo.mp4` (4.7MB, locally hosted)
  - HTML5 video player with controls, poster image
  - Fixed 16:9 aspect ratio (no layout shift on play)
  - Shows AI-powered document processing visualization
  - **Note:** Full 2-minute demo video will be created later (no AI tools currently capable of generating 2-minute videos)

### 2025-11-06: Website UX Improvements & Contact Form
- ✅ **Contact Form Modal**: Replaced mailto with Resend API for professional email delivery
  - Form fields: Name, Company, Email, Phone (optional), Message
  - Sends via Resend → info@auditsready.com → ImprovMX forwarding
  - 24-hour callback promise displayed
  - Proper success/error handling
- ✅ **Video Placeholder**: Added 16:9 video section in "How It Works" (ready for demo)
- ✅ **Free ISO 9001 Checklist CTA**: Button linking to `/blog/iso-9001-checklist`
- ✅ **Section Reordering**: "How It Works" now before "Beyond Traditional Tools"
- ✅ **Universal Industry Messaging**: Replaced specific 4-industry cards with "any manufacturing industry"
- ✅ **Expanded Industry Keywords**: Added food processing, consumer products to SEO
- ✅ **FAQ Structured Data**: Added FAQPage schema for rich snippets (4 Q&As)
- ✅ **Geographic Scope**: Changed from regional to "Worldwide" in all metadata

### 2025-01-06: Blog Content Strategy Launched
- ✅ Created blog infrastructure (`/pages/blog/index.js`)
- ✅ Published Post #1: "ISO 9001 Gap Analysis Cost" (2,000 words, targets "gap analysis cost" keyword)
- ✅ Published Post #2: "How to Prepare for ISO 9001 Audit" (2,500 words, targets "audit preparation" keyword)
- ✅ Updated sitemap.xml (now 5 URLs: homepage, privacy, blog, 2 posts)
- ✅ Added "Resources" section to homepage footer with blog link
- ✅ Implemented internal linking between blog posts for SEO
- ✅ Applied electronic document control best practices in content
- ✅ Both posts deployed to production via PR workflow

### 2025-11-05: SEO Improvements Deployed
- Created sitemap.xml and favicon files
- Updated meta tags for global reach (removed Calgary/Alberta targeting)
- Enhanced structured data (ProfessionalService, Service schemas)
- Added "How It Works" section with P.Eng validation badge
- Protected phone number in footer with click-to-reveal
- Removed premature testimonials section
- Submitted to Google Search Console

### Current Status
- ✅ Production-ready and deployed
- ✅ Google Search Console verified
- ✅ Sitemap updated (20 URLs: homepage, faq, pricing, 4 legal pages, blog, 13 posts)
- ✅ 13 blog posts published (Jan 2025 - Jan 2026) - PHASE 1 COMPLETE
- ✅ FAQ page with 28 questions live
- ✅ 4 legal pages deployed (Terms, Privacy, Refund, Acceptable Use)
- ✅ Contact form with Resend API integration on all pages
- ✅ Positioning: P.Eng-validated ISO 9001 gap analysis for small/mid-size industrial manufacturers (beachhead) — homepage/pricing/FAQ updated on branch `reposition-manufacturing`; `main` still shows the prior "any manufacturing industry" positioning until merged
- ✅ 8-second demo video in "How It Works" section
- ✅ Lead magnet deliverables created (checklist, roadmap, template)
- 📊 Total content: 40,000+ words across 13 blog posts + FAQ
- 🎬 **Future:** Create full 2-minute demo video when AI tools support longer videos
- 📥 **Action Required:** Convert 2 HTML files to PDF (see CHECKLIST_DELIVERY_GUIDE.md)

## Blog Content Strategy

### Published Posts (13/13 Complete - Phase 1 Done)
1. ✅ **"ISO 9001 Gap Analysis Cost"** (January 2025)
   - Published: Jan 5, 2025
   - Keyword: "iso 9001 gap analysis cost" (800 searches/month)
   - Focus: Cost of gap analysis phase only
   - Word count: 2,000 words

2. ✅ **"How to Prepare for ISO 9001 Audit"** (February 2025)
   - Published: Feb 4, 2025
   - Keyword: "how to prepare for iso 9001 audit" (1,300 searches/month)
   - Focus: 8-week preparation timeline, checklists, failure reasons
   - Word count: 2,500 words

3. ✅ **"ISO 9001 Certification Cost"** (March 2025)
   - Published: March 12, 2025
   - Keyword: "iso 9001 certification cost" (8,100 searches/month) 🔥 HIGHEST TRAFFIC
   - Focus: Total certification journey cost $50k-$150k, all components breakdown
   - Word count: 2,900 words

4. ✅ **"ISO 9001 Checklist"** (April 2025) - LEAD MAGNET
   - Published: April 15, 2025
   - Keyword: "iso 9001 checklist" (4,400 searches/month)
   - Focus: Free downloadable PDF checklist, email capture
   - Word count: 2,800 words

5. ✅ **"ISO 9001 vs ISO 14001"** (May 2025)
   - Published: May 3, 2025
   - Keyword: "iso 9001 vs iso 14001" (2,900 searches/month)
   - Focus: Quality vs environmental certification comparison
   - Word count: 2,600 words

6. ✅ **"ISO 9001 Requirements"** (June 2025) - PILLAR CONTENT
   - Published: June 24, 2025
   - Keyword: "iso 9001 requirements" (6,600 searches/month)
   - Focus: Complete guide to all 10 clauses, hub for all other posts
   - Word count: 3,200 words

7. ✅ **"How Long Does ISO 9001 Take"** (July 2025)
   - Published: July 18, 2025
   - Keyword: "how long does iso 9001 take" (1,900 searches/month)
   - Focus: Timeline planning, fast-track options, what slows it down
   - Word count: 2,400 words

8. ✅ **"ISO 9001 Internal Audit Guide"** (August 2025)
   - Published: August 9, 2025
   - Keyword: "iso 9001 internal audit" (3,600 searches/month)
   - Focus: How to conduct internal audits, top 10 findings
   - Word count: 2,700 words

9. ✅ **"ISO 9001 for Craft Breweries"** (September 2025) - INDUSTRY-SPECIFIC
   - Published: September 22, 2025
   - Keyword: "iso 9001 brewery" (low volume but HIGH INTENT)
   - Focus: HACCP integration, export requirements, distributor demands
   - Word count: 2,900 words

10. ✅ **"ISO 9001 for Metal Fabrication"** (October 2025) - INDUSTRY-SPECIFIC
    - Published: October 7, 2025
    - Keyword: "iso 9001 metal fabrication" (niche but targeted)
    - Focus: CWB integration, welding specs (WPS), material traceability
    - Word count: 3,000 words

11. ✅ **"Traditional ISO Consultants vs. AI"** (November 2025) - THOUGHT LEADERSHIP
    - Published: November 4, 2025
    - Keyword: "iso 9001 consultant vs ai" (brand positioning)
    - Focus: Honest comparison, pros/cons, when to use which, cost-benefit analysis
    - Word count: 3,200 words

12. ✅ **"5 ISO 9001 Myths That Cost Manufacturers Thousands"** (December 2025)
    - Published: December 2, 2025
    - Keyword: "iso 9001 myths" (high shareability)
    - Focus: Debunking expensive misconceptions with real cost impact
    - Word count: 2,800 words

13. ✅ **"What Happens If You Fail Your ISO 9001 Audit?"** (January 2026)
    - Published: January 6, 2026
    - Keyword: "failed iso 9001 audit" (fear-based motivation)
    - Focus: Recovery guide, 90-day timeline, top 10 failure reasons, case studies
    - Word count: 3,500 words

### Phase 2 Blog Topics (10 New Posts)

Based on SEO research and current manufacturing challenges, these topics target high-intent keywords and address real pain points:

#### Post #14: ISO 9001 Document Control - Complete Guide
- **Keyword**: "iso 9001 document control" (4,800 searches/month)
- **Focus**: Version control, approval workflows, electronic vs paper, common mistakes
- **Why**: #1 audit failure area, every manufacturer struggles with this

#### Post #15: ISO 9001 for Food Manufacturing - Complete Certification Guide
- **Keyword**: "iso 9001 food manufacturing" (1,200 searches/month)
- **Focus**: HACCP integration, FDA compliance, allergen control, traceability
- **Why**: High-growth industry, complex regulatory overlap

#### Post #16: ISO 9001 Corrective Action (CAPA) - Step-by-Step Guide
- **Keyword**: "iso 9001 corrective action" (2,400 searches/month)
- **Focus**: Root cause analysis, 8D methodology, effectiveness verification
- **Why**: Core requirement that 90% of manufacturers do poorly

#### Post #17: ISO 9001 vs IATF 16949 - Automotive Certification Comparison
- **Keyword**: "iso 9001 vs iatf 16949" (1,900 searches/month)
- **Focus**: Additional automotive requirements, PPAP, APQP, upgrade path
- **Why**: High-intent automotive suppliers need this clarity

#### Post #18: ISO 9001 Risk Assessment - How to Identify and Manage Risks
- **Keyword**: "iso 9001 risk assessment" (2,100 searches/month)
- **Focus**: Risk-based thinking, FMEA basics, risk register templates
- **Why**: New 2015 requirement many manufacturers still struggle with

#### Post #19: ISO 9001 Management Review - Agenda, Minutes, and Best Practices
- **Keyword**: "iso 9001 management review" (3,100 searches/month)
- **Focus**: Required inputs/outputs, frequency, meeting templates, evidence
- **Why**: Top 5 audit failure area, simple to fix with right guidance

#### Post #20: ISO 9001 for Job Shops - Small Manufacturer Certification Guide
- **Keyword**: "iso 9001 job shop" (800 searches/month, HIGH INTENT)
- **Focus**: Scalable QMS, low-volume high-mix challenges, cost-effective approach
- **Why**: Underserved market, high conversion potential

#### Post #21: ISO 9001 Supplier Management - Evaluation and Monitoring Guide
- **Keyword**: "iso 9001 supplier management" (1,600 searches/month)
- **Focus**: Supplier qualification, performance monitoring, supply chain risks
- **Why**: Post-COVID supply chain focus, ongoing manufacturer challenge

#### Post #22: ISO 9001 Training Requirements - What You Need to Document
- **Keyword**: "iso 9001 training requirements" (2,800 searches/month)
- **Focus**: Competence vs awareness, training records, effectiveness evaluation
- **Why**: Frequently searched, common audit finding

#### Post #23: ISO 9001 for Electronics Manufacturing - Complete Guide
- **Keyword**: "iso 9001 electronics manufacturing" (900 searches/month)
- **Focus**: ESD control, component traceability, IPC standards integration
- **Why**: Growing industry, specific technical requirements

### Content Cluster Strategy
- **Hub**: Post #6 (Requirements Guide) links to all other posts
- **Spokes**: All posts link back to hub and homepage
- **Goal**: Topical authority in Google's eyes

### SEO Best Practices Applied
- ✅ BlogPosting schema on all posts
- ✅ Proper meta tags, OpenGraph, canonical URLs
- ✅ Internal linking between related posts (minimum 5 per post)
- ✅ Mobile-responsive design
- ✅ 2,000+ word comprehensive content
- ✅ Electronic document control messaging (not printed docs)

### Meta Title & Description Rules (CTR Optimization)
**Every blog post title MUST follow these rules:**
- Include the **current year** (2026) - signals freshness, outdated years kill CTR
- Include **specific numbers/dollar amounts** (e.g., "$50K-$150K", "55-Point")
- Keep title under **60 characters** so Google doesn't truncate it
- Put the primary keyword FIRST in the title
- NO "| AuditsReady" suffix (wastes characters, brand not needed in blog titles)
- Use **parenthetical hooks** for curiosity: "(Save 60%)", "(AI Does It for $500)"

**Meta description rules (155 characters max):**
- Start with a question or specific claim that matches search intent
- Include **3+ specific numbers** (costs, timeframes, percentages)
- End with a benefit or action ("See how manufacturers cut costs 60%")
- Include the primary keyword naturally
- NO generic phrases: "complete guide", "everything you need to know", "learn more"

**Title formula:** `[Keyword] [Year]: [Specific Number/Claim] ([Hook])`
- Example: `ISO 9001 Certification Cost 2026: Real Numbers $50K-$150K`
- Example: `ISO 9001 Gap Analysis Cost 2026: $15K-$50K (AI Does It for $500)`

**Description formula:** `[Specific claim with numbers]. [Breakdown]. [Benefit/CTA].`
- Example: "What does ISO 9001 actually cost in 2026? Consultant fees $15K-$50K + audit $8K-$20K + internal time $30K-$80K = $50K-$150K total. Full breakdown with 3 ways to cut costs by 60%."

### Blog Post Header Style (Consistency)
- Header gradient: `bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900`
- Separator between date and read time: `&bull;` (not dash, not pipe)
- Category badge: `bg-blue-800 px-3 py-1 rounded-full`
- All posts must have: Related Reading section (5 links), Author Bio, Footer nav

## Next Steps for Traffic Growth

### Immediate Actions (This Week)
1. **Re-submit sitemap in Google Search Console** to show 5 URLs
2. **Request indexing** for new blog posts via URL Inspection tool
3. **Monitor Google Analytics** for blog traffic (check in 7-14 days)

### Priority 1: Content Marketing (Phase 1 COMPLETE)
- ✅ Blog section created
- ✅ 13 blog posts published (Phase 1 complete)
- ✅ 40,000+ words of SEO-optimized content
- ✅ Sitemap updated with 20 URLs
- 🔄 Phase 2: 10 additional posts planned (see Blog Content Strategy)

### Priority 2: Lead Magnets (COMPLETED 2025-11-07)
- ✅ Created 12-page ISO 9001 checklist (HTML, needs PDF conversion)
- ✅ Created 6-month implementation roadmap (HTML, needs PDF conversion)
- ✅ Created gap analysis Excel template (CSV format)
- ✅ Email response templates with variations
- ✅ Delivery guide with PDF conversion instructions
- 🔄 Implement automated email delivery (future)
- 🔄 Build email nurture campaigns (future)

### Priority 3: Backlinks (Month 2+)
- Submit to business directories (Thomasnet, IQS Directory)
- Guest posting on manufacturing blogs
- Resource page links
- Target: 2-3 quality backlinks per month

### Priority 4: Monitoring
- Google Search Console performance tracking
- Google Analytics traffic sources (GA4: G-223ZBY1BM9)
- Search rankings for target keywords
- Expected results: 500-900 organic visitors/month within 6-12 months

## Development Guidelines

### Code Style
- Functional React components
- Tailwind utility classes only
- Mobile-first responsive design

### Content Updates
- Maintain professional, technical tone
- Emphasize AI + P.Eng validation
- Global focus (not location-specific)
- Highlight gap analysis value proposition
- **Electronic document control**: Always recommend digital/electronic format over printed documents (version control, latest versions)
- **Git workflow**: Always create feature branches, never work directly on main branch
- **Blog posts**: 2,000+ words, comprehensive, SEO-optimized with internal links

### Common Tasks
- Phone/Email updates: `pages/index.js` PhoneReveal component
- Industries: `pages/index.js` "Built for Industrial Manufacturers" section (lead with beachhead industries; keep "other sectors? just ask" secondary line)
- SEO: Update `<Head>` meta tags and structured data (keep "AI" out of homepage/pricing titles + meta descriptions)
- Positioning guardrails: never claim outputs are "auto-generated"/"AI-generated"; frame as "drafted for your review, validated by a P.Eng"; AI appears at most once per page as speed/cost, always paired with P.Eng validation
- Blog posts: Create feature branch → write post → test locally → commit → push → PR → merge

## Known Issues

1. All code in pages - consider extracting components
2. No automated testing
3. 8-second demo video is temporary - full 2-minute demo to be created manually later (AI tools not yet capable of 2-minute videos)

## Legal Documents for MVP/Phase 1

### Business Model: Email-Based Consulting Services
- **MVP Approach**: Project-based gap analysis consulting delivered via email
- **No Platform**: No user accounts, logins, or SaaS subscription in Phase 1
- **Payment**: One-time project fees, paid upon receipt of deliverables
- **Deliverables**: Gap analysis report (PDF) + action plan (Excel) via email

### Public Website Documents (Display in Footer)

| Document | URL | Purpose | Status |
|----------|-----|---------|--------|
| Terms of Service | `/terms` | Governs all use of website and services | ✅ Draft ready |
| Privacy Policy | `/privacy` | GDPR/CCPA compliance, data protection | ✅ Draft ready (needs update from existing) |
| Refund Policy | `/refund-policy` | Explains refund rules for projects | ✅ Draft ready |
| Acceptable Use | `/acceptable-use` | Defines prohibited uses of services | ✅ Draft ready |

**Implementation Needed:**
- Create `/pages/terms.js` with Terms of Service content
- Update `/pages/privacy.js` with new MVP-adapted content
- Create `/pages/refund-policy.js` with Refund Policy content
- Create `/pages/acceptable-use.js` with Acceptable Use content
- Add footer links to all 4 policies on homepage and all pages

### Private Documents (Used with Each Customer)

| Document | When to Use | How to Deliver | Status |
|----------|-------------|----------------|--------|
| Statement of Work (SOW) | Before EVERY project starts | Email as PDF/Word, customer signs | ✅ Template ready |
| Master Services Agreement | Phase 2 only (not MVP) | N/A for MVP | ⚠️ Not used in MVP |

### Customer Engagement Workflow (MVP/Phase 1)

```
1. Initial Contact
   ↓ Customer fills contact form or emails
   └─ They see Terms/Privacy links on website

2. Discovery Call
   ↓ Discuss needs, document count, timeline
   └─ Explain process and pricing

3. Quote & SOW
   ↓ Send customized Statement of Work
   └─ Customer reviews scope, fees, deliverables

4. Customer Accepts
   ↓ Customer signs SOW (DocuSign/email)
   └─ Payment terms kick in

5. Document Submission
   ↓ Customer emails documents per SOW
   └─ Follow SOW Appendix A instructions

6. Analysis & Delivery
   ↓ Deliver gap analysis report + action plan
   └─ Per SOW deliverables section

7. Payment
   ↓ Customer pays invoice (Stripe/bank)
   └─ Per SOW payment terms

8. Project Complete
   └─ 14-day support window, data deleted after 90 days
```

### Legal Package Status

**Location**: `/LAWYER_REVIEW_NEEDED/` folder

**Documents (10 files):**
1. README.md - Complete guide for finding and hiring lawyer
2. TERMS-OF-SERVICE-DRAFT.md - 9,100 words
3. PRIVACY-POLICY-DRAFT.md - 5,800 words
4. REFUND-CANCELLATION-POLICY-DRAFT.md - 2,900 words
5. ACCEPTABLE-USE-POLICY-DRAFT.md - 3,400 words
6. STATEMENT-OF-WORK-TEMPLATE.md - 3,600 words (NEW - use for each customer)
7. MASTER-SERVICES-AGREEMENT-DRAFT.md - 6,200 words (Phase 2 only)
8. LAWYER-REVIEW-SUMMARY.md - Executive summary for lawyer
9. LAWYER-INTERVIEW-QUESTIONNAIRE.md - 51 questions to ask lawyers
10. LAWYER-RESEARCH-DIRECTORY.md - Where to find qualified lawyers
11. EMAIL-TO-LAWYER-TEMPLATE.md - 10 email templates

**Total**: ~48,000 words of legal documentation

**Next Steps:**
1. Find 2-3 lawyers with SaaS/GDPR expertise (use directory)
2. Interview using questionnaire (use templates)
3. Send complete package for review ($6k-$10k budget)
4. Implement approved documents on website
5. Use SOW template for all customer projects

**Budget & Timeline:**
- Legal review: $6,000-$10,000
- Timeline: 6 weeks from lawyer selection to launch-ready
- E&O insurance: $1,500-$3,000/year
- Business formation: $500-$2,000

---

## Marketing Strategy Decisions

### Cold Email Outreach (REJECTED)
- **Service**: PersistIQ cold email service
- **Cost**: $6.5k-$14k for 3 months
- **Decision**: Not recommended at this stage
- **Reasoning**:
  - Business not ready (no case studies, unclear pricing, no proven conversion funnel)
  - Low ROI for technical B2B (need 3,000+ emails for 1 customer)
  - Better alternatives: content marketing (free), LinkedIn organic, Google Ads, ISO auditor partnerships
- **Revisit when**: 5-10 customers, proven ROI, $50k+ revenue

### Content Marketing (APPROVED & EXECUTING)
- **Strategy**: Blog posts targeting ISO 9001 keywords
- **Cost**: $0 (internal time only)
- **Timeline**: 1-2 posts per week for 6 months
- **Expected ROI**: 500-900 organic visitors/month, 25-90 leads/month within 6-12 months
- **Status**: 2 posts published, 11 more planned

---

## Lead Magnet Delivery System

### What Customers Receive When Requesting Checklist:

**3 Professional Deliverables:**

1. **ISO 9001:2015 Complete Implementation Checklist (12-page PDF)**
   - All 10 clauses (4-10) with 47 actionable checklist items
   - Implementation tips and common mistakes to avoid
   - 6-month implementation timeline
   - Professional branding (no watermarks, clean design)
   - Source: `public/downloads/iso-9001-checklist.html` → Convert to PDF

2. **6-Month Implementation Roadmap (8-page PDF)**
   - Month-by-month project plan from zero to certification
   - Weekly tasks and deliverables
   - After-certification maintenance guide
   - Timeline expectations and cost reality check
   - Source: `public/downloads/iso-9001-implementation-roadmap.html` → Convert to PDF

3. **Gap Analysis Template (Excel/CSV)**
   - 47 ISO 9001 requirements pre-filled
   - Track compliance status, assign tasks, set due dates
   - Columns: Clause, Requirement, Current State, Gap, Action, Owner, Target Date, Status, Notes
   - Source: `public/downloads/iso-9001-gap-analysis-template.csv` → Ready to send

### Email Response Process:

**Step 1: Customer Requests Checklist**
- Via website button: "Email Me the Checklist" (mailto link)
- Via blog post CTAs linking to `/blog/iso-9001-checklist`
- Via direct email to info@auditsready.com

**Step 2: Manual Response (Current Setup)**
1. Open `EMAIL_RESPONSE_TEMPLATE.md`
2. Copy appropriate template variant:
   - Standard response (general)
   - Industry-specific response (if they mention automotive, food, etc.)
   - Urgent timeline response (if certification deadline mentioned)
   - Cost-focused response (if pricing inquiry included)
3. Personalize with customer name and details
4. Attach 3 files:
   - `iso-9001-checklist.pdf` (convert HTML first)
   - `iso-9001-implementation-roadmap.pdf` (convert HTML first)
   - `iso-9001-gap-analysis-template.csv` (ready)
5. Send from info@auditsready.com (forwards to personal email)
6. Response time target: Within 4 hours (business hours) or 24 hours max

**Step 3: Follow-Up (3 Days Later)**
- If no response, send follow-up email (template included)
- Check if files received, offer to answer questions
- Book demo call if interested

### File Conversion Instructions:

**One-Time Setup (2 minutes):**
1. Open `public/downloads/iso-9001-checklist.html` in Chrome/Safari
2. Press Cmd+P (Mac) or Ctrl+P (Windows)
3. Destination: Save as PDF
4. Enable "Background graphics"
5. Save as `iso-9001-checklist.pdf` in same folder
6. Repeat for `iso-9001-implementation-roadmap.html`

**Detailed instructions:** See `CHECKLIST_DELIVERY_GUIDE.md`

### Future Automation Options:

**Option A: Download Page (Recommended)**
- Create `/pages/checklist-download.js` with email capture form
- After submit: Email sent automatically via Resend API
- Benefits: Captures leads, tracks downloads, no manual work

**Option B: Direct File Links**
- Host PDFs on Vercel (publicly accessible)
- Customer clicks → downloads instantly
- Trade-off: No email capture, less lead data

**Option C: Gated Content (Best for Lead Generation)**
- Use ConvertKit, Mailchimp, or Gumroad
- Automated email delivery with nurture sequence
- Track open rates, click rates, conversions

### Branding Strategy (No Watermarks):

**Why No Watermarks:**
- Lead magnets should feel genuinely free
- Watermarks reduce goodwill and sharing
- ISO 9001 content isn't proprietary
- Viral sharing = more brand exposure

**Branding Approach:**
- ✅ AuditsReady logo in header/footer (clean, professional)
- ✅ Footer with contact info on every page
- ✅ First page: Company intro and CTA
- ✅ Last page: "Need Help?" section with demo booking link
- ❌ No diagonal watermarks across pages
- ❌ No "DO NOT SHARE" warnings

### Conversion Tracking:

**Metrics to Monitor:**
- Email open rate (target: 60%+)
- Download completion rate (target: 90%+)
- Reply rate (target: 20%+)
- Demo booking rate (target: 5-10%)
- Conversion to paid customer (target: 1-5%)

---

**Last Updated:** 2026-07-05
**Branch:** reposition-manufacturing (repositioning in review; main is still the deployed positioning)
**Deployment:** Live on Vercel via GitHub integration

## Email Configuration

### Google Workspace Setup
- **Service:** Google Workspace
- **Domain:** auditsready.com
- **User Accounts (2 users):**
  - gayan@auditsready.com (Primary contact, owner)
  - yashi@auditsready.com (Support)
- **Email Aliases (forward to user accounts above):**
  - info@auditsready.com → Routes to gayan@ or yashi@
  - noreply@auditsready.com → Routes to gayan@ or yashi@
  - sales@auditsready.com → Routes to gayan@ or yashi@
  - compliance@auditsready.com → Routes to gayan@ or yashi@
- **Status:** ✅ Active
- **Access:** Full email, calendar, drive, docs access

### Resend API Setup
- **Service:** Resend (https://resend.com)
- **Account:** jayasundara.jmg@gmail.com
- **Free Tier:** 100 emails/day, 3,000/month
- **API Endpoint:** `/api/contact`
- **Sender:** noreply@auditsready.com (verified domain)
- **Recipient:** info@auditsready.com
- **Domain Status:** ✅ Verified (DKIM, SPF, DMARC configured)

### Email Flow
```
Customer submits form
  ↓
/api/contact endpoint
  ↓
Resend API sends FROM: noreply@auditsready.com
  ↓
TO: info@auditsready.com (alias)
  ↓
Routes to gayan@ or yashi@ inbox
  ↓
Team reads in Gmail
```

### Production Setup (Vercel)
1. Go to Vercel Dashboard → Project → Settings → Environment Variables
2. Add: `RESEND_API_KEY` = `your_resend_api_key_here`
3. Get API key from: https://resend.com/api-keys
4. Redeploy or wait for next deployment

### Resend Domain Verification (One-Time Setup)
**Status:** ✅ COMPLETED

If you ever need to verify another domain or re-verify:

1. **Add Domain to Resend:**
   - Go to: https://resend.com/domains
   - Click "Add Domain"
   - Enter: `auditsready.com`
   - Region: North Virginia (us-east-1)

2. **Add DNS Records** (at your domain provider - GoDaddy/Cloudflare/etc.):

   **Domain Verification (DKIM):**
   - Type: `TXT`
   - Name: `resend._domainkey`
   - Value: `p=MIGfMA0GCSqGSIb3DQEB...` (provided by Resend)
   - TTL: Auto

   **Enable Sending (SPF & DMARC):**
   - Type: `MX`
   - Name: `send`
   - Value: `feedback-smtp.us-east-1.amazonses.com`
   - Priority: 10
   - TTL: 60

   - Type: `TXT`
   - Name: `send`
   - Value: `v=spf1 include:amazonses.com ~all`
   - TTL: 60

   - Type: `TXT` (Optional)
   - Name: `_dmarc`
   - Value: `v=DMARC1; p=none;`
   - TTL: Auto

3. **Wait for Verification:**
   - DNS propagation takes 5-60 minutes
   - Check status at https://resend.com/domains
   - Look for green "Verified" badges

4. **Update Code:**
   - Change `from` field in `/pages/api/contact.js`
   - From: `onboarding@resend.dev` → To: `noreply@auditsready.com`
   - Deploy changes

### Troubleshooting Contact Form

**If contact form returns 500 error:**

1. **Check Vercel Logs:**
   - Go to: https://vercel.com/dashboard → Project → Logs
   - Look for detailed error messages from Resend API

2. **Common Issues:**
   - ❌ `RESEND_API_KEY` not set in Vercel environment variables
   - ❌ Domain not verified in Resend (check https://resend.com/domains)
   - ❌ Using unverified sender email (must use verified domain)
   - ❌ Rate limit exceeded (100 emails/day on free tier)
   - ❌ Invalid recipient email address

3. **Test Resend API Directly:**
   ```bash
   curl -X POST https://api.resend.com/emails \
     -H "Authorization: Bearer YOUR_RESEND_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{
       "from": "noreply@auditsready.com",
       "to": "info@auditsready.com",
       "subject": "Test Email",
       "text": "Testing Resend API"
     }'
   ```

4. **Verify Google Workspace Inbox:**
   - Log in to Gmail with gayan@auditsready.com or yashi@auditsready.com
   - Check inbox (emails to info@auditsready.com will be routed here via alias)
   - Verify email was delivered successfully

---

**Last Updated:** 2026-07-05
**Branch:** reposition-manufacturing (repositioning in review; main is still the deployed positioning)
**Deployment:** Live on Vercel via GitHub integration
