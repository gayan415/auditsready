# AuditsReady - Marketing Website

## Project Overview

Marketing and landing page for AuditsReady, an AI-powered ISO9001 SOP compliance platform for manufacturers worldwide.

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
│   ├── privacy.js        # Privacy policy
│   ├── api/
│   │   └── contact.js    # Contact form API endpoint (Resend integration)
│   └── blog/
│       ├── index.js      # Blog listing page
│       ├── iso-9001-gap-analysis-cost.js          # Post #1
│       └── how-to-prepare-for-iso-9001-audit.js   # Post #2
├── lib/
│   └── gtag.js          # Google Analytics helpers
├── public/
│   ├── iso-9001-ai-powered-compliance-auditsready-logo.png
│   ├── auditsready-demo.mp4  # 8-second demo video (4.7MB)
│   ├── sitemap.xml       # 13 URLs (homepage, privacy, blog, 10 posts)
│   ├── robots.txt
│   ├── iso-9001-auditsready-favicon.ico
│   ├── iso-9001-auditsready-favicon.svg
│   ├── iso-9001-auditsready-app-icon.png
│   └── downloads/        # Lead magnet deliverables
│       ├── iso-9001-checklist.html (convert to PDF)
│       ├── iso-9001-implementation-roadmap.html (convert to PDF)
│       └── iso-9001-gap-analysis-template.csv
├── .env.example         # Environment variables documentation
├── .env.local           # Local environment variables (gitignored)
├── package.json
├── next.config.js       # Security headers
├── tailwind.config.js
├── EMAIL_RESPONSE_TEMPLATE.md    # Email templates for checklist requests
└── CHECKLIST_DELIVERY_GUIDE.md   # Instructions for PDF conversion and delivery
```

## Key Features

### Landing Page Sections
1. **Hero** - Value proposition with "Book AI Demo" modal CTA and phone reveal
2. **How It Works** - 8-second demo video (auditsready-demo.mp4) + 3-step process with P.Eng trust badge + Free ISO 9001 Checklist CTA
3. **Beyond Traditional Tools** - AI features (Claude Sonnet 4.5 + Opus capabilities)
4. **AI Finds What Others Miss** - Gap detection and SOP conversion capabilities
5. **Built for Every Manufacturing Business** - Universal industry messaging (automotive, aerospace, electronics, food, consumer products, textiles, plastics, metal fabrication, etc.)
6. **Pricing/CTA** - Early adopter pricing with "Book AI Demo" modal
7. **Footer** - Contact info with click-to-reveal phone

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

**Primary:** Small-medium manufacturers worldwide (10-500 employees)
**Geographic:** Worldwide (no geographic restrictions)
**Industries:** Any manufacturing sector - automotive, aerospace, electronics, food processing, consumer products, textiles, plastics, metal fabrication, craft breweries, oilfield services, and more

## SEO Implementation

### Meta Tags (Global Positioning)
- Title: "AI-Powered ISO 9001 Gap Analysis | Audit-Ready SOP Compliance"
- Keywords: ISO 9001 gap analysis, SOP compliance, audit preparation, automotive ISO 9001, aerospace manufacturing, electronics manufacturing, food processing ISO 9001, consumer products manufacturing
- Emphasis on "any manufacturing industry" for broad appeal
- Geographic scope: Worldwide

### Structured Data
- ProfessionalService schema (Worldwide coverage with knowsAbout 13+ manufacturing sectors)
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
- **Serving:** Worldwide - any manufacturing industry
- **Contact Form:** Modal popup with Resend API integration

## Recent Updates

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
- ✅ Sitemap updated (13 URLs total: homepage, privacy, blog, 10 posts)
- ✅ 10 blog posts created (Posts #1-10) covering Jan-Oct 2025
- ✅ Contact form with Resend API integration deployed
- ✅ Universal "any manufacturing industry" positioning live
- ✅ 8-second demo video live in "How It Works" section
- ✅ Lead magnet deliverables created (checklist, roadmap, gap analysis template)
- 📊 Total content: 27,000+ words across 10 comprehensive posts
- 🎬 **Future:** Create full 2-minute demo video when AI tools support longer videos
- 📥 **Action Required:** Convert 2 HTML files to PDF (see CHECKLIST_DELIVERY_GUIDE.md)

## Blog Content Strategy

### Published Posts (10/13 Complete)
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

### Remaining Posts (3 of 13)

#### Post #11: Traditional ISO Consultants vs. AI (THOUGHT LEADERSHIP) - November 2025
- **Keyword**: "iso 9001 consultant vs ai" (low volume, brand positioning)
- **Focus**: Directly positions your AI value proposition
- **Content**: Honest comparison, pros/cons, when to use which, cost-benefit analysis
- **Publish date**: November 4, 2025

#### Post #12: 5 ISO 9001 Myths That Cost Manufacturers Thousands - December 2025
- **Keyword**: "iso 9001 myths" (low volume, high shareability)
- **Focus**: Myth-busting posts get shared, drive traffic
- **Content**: "Too expensive for small manufacturers", "Only big companies need it", "Certification guarantees quality"
- **Publish date**: December 2, 2025

#### Post #13: What Happens If You Fail Your ISO 9001 Audit? - January 2026
- **Keyword**: "failed iso 9001 audit" (low volume, fear-based motivation)
- **Focus**: Real stories drive action
- **Content**: Case studies of audit failures, lessons learned, re-audit costs, how to recover
- **Publish date**: January 6, 2026

#### Post #11: Traditional ISO Consultants vs. AI (THOUGHT LEADERSHIP) - November 2025
- **Keyword**: "iso 9001 consultant vs ai" (low volume, brand positioning)
- **Focus**: Directly positions your AI value proposition
- **Content**: Honest comparison, pros/cons, when to use which, cost-benefit analysis
- **Publish date**: November 4, 2025

#### Post #12: 5 ISO 9001 Myths That Cost Manufacturers Thousands - December 2025
- **Keyword**: "iso 9001 myths" (low volume, high shareability)
- **Focus**: Myth-busting posts get shared, drive traffic
- **Content**: "Too expensive for small manufacturers", "Only big companies need it", "Certification guarantees quality"
- **Publish date**: December 2, 2025

#### Post #13: What Happens If You Fail Your ISO 9001 Audit? - January 2026
- **Keyword**: "failed iso 9001 audit" (low volume, fear-based motivation)
- **Focus**: Real stories drive action
- **Content**: Case studies of audit failures, lessons learned, re-audit costs, how to recover
- **Publish date**: January 6, 2026

### Content Cluster Strategy
- **Hub**: Post #6 (Requirements Guide) links to all other posts
- **Spokes**: All posts link back to hub and homepage
- **Goal**: Topical authority in Google's eyes

### SEO Best Practices Applied
- ✅ BlogPosting schema on all posts
- ✅ Proper meta tags, OpenGraph, canonical URLs
- ✅ Internal linking between related posts
- ✅ Mobile-responsive design
- ✅ 2,000+ word comprehensive content
- ✅ Electronic document control messaging (not printed docs)

## Next Steps for Traffic Growth

### Immediate Actions (This Week)
1. **Re-submit sitemap in Google Search Console** to show 5 URLs
2. **Request indexing** for new blog posts via URL Inspection tool
3. **Monitor Google Analytics** for blog traffic (check in 7-14 days)

### Priority 1: Content Marketing (Ongoing)
- ✅ Blog section created
- ✅ 2 posts published targeting "gap analysis cost" and "audit preparation"
- 🔄 Write Post #3 (Certification Cost) - March 4, 2025
- 🔄 Write 1 post per month following schedule above
- 📅 Timeline: 13 months total (Jan 2025 - Jan 2026)

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
- Industries: `pages/index.js` industries section
- SEO: Update `<Head>` meta tags and structured data
- Blog posts: Create feature branch → write post → test locally → commit → push → PR → merge

## Known Issues

1. All code in pages - consider extracting components
2. No automated testing
3. 8-second demo video is temporary - full 2-minute demo to be created manually later (AI tools not yet capable of 2-minute videos)

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

**Last Updated:** 2025-11-08
**Branch:** main
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

**Last Updated:** 2025-11-08
**Branch:** main
**Deployment:** Live on Vercel via GitHub integration
