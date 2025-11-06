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
- **Deployment:** Vercel (auto-deploy on push to main)

## Project Structure

```
auditsready/
├── pages/
│   ├── _app.js           # Analytics tracking
│   ├── _document.js      # GA script injection
│   ├── index.js          # Main landing page
│   └── privacy.js        # Privacy policy
├── lib/
│   └── gtag.js          # Google Analytics helpers
├── public/
│   ├── auditsready-logo.png
│   ├── sitemap.xml
│   ├── robots.txt
│   ├── favicon.ico
│   ├── favicon.svg
│   └── apple-touch-icon.png
├── package.json
├── next.config.js       # Security headers
└── tailwind.config.js
```

## Key Features

### Landing Page Sections
1. **Hero** - Value proposition with email CTA and phone reveal
2. **How It Works** - 3-step process with P.Eng trust badge
3. **AI Features** - Claude Sonnet 4.5 + Opus capabilities
4. **Service Description** - Gap detection and SOP conversion
5. **Industries** - Breweries, Oilfield, Food Processing, Metal Fabrication
6. **Pricing/CTA** - Early adopter pricing with dual CTAs
7. **Footer** - Contact info with click-to-reveal phone

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
**Geographic:** North America (USA, Canada, Mexico) + Global
**Industries:** Craft breweries, oilfield services, food processing, metal fabrication

## SEO Implementation

### Meta Tags (Global Positioning)
- Title: "AI-Powered ISO 9001 Gap Analysis | Audit-Ready SOP Compliance"
- Keywords: ISO 9001 gap analysis, SOP compliance, audit preparation
- No geographic restrictions (worldwide service)

### Structured Data
- ProfessionalService schema (USA, Canada, Mexico coverage)
- Service schema with offerings
- Phone number visible to crawlers in structured data

### Technical SEO
- ✅ Sitemap.xml (submitted to Google Search Console)
- ✅ Favicon files (ICO, SVG, Apple Touch Icon)
- ✅ robots.txt configured
- ✅ Mobile-responsive
- ✅ Security headers (CSP, XSS protection, etc.)

### Google Search Console
- **Status:** Domain verified (DNS method)
- **Sitemap:** Submitted and discovered (2 pages)
- **Indexing:** Requested for homepage and privacy page

## Configuration

### Environment Variables
```bash
NEXT_PUBLIC_GA_ID=G-223ZBY1BM9
```

### Security Headers (next.config.js)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- X-XSS-Protection: 1; mode=block
- Content-Security-Policy with strict directives

## Contact Information

- **Email:** info@auditsready.com
- **Phone:** +1-403-404-4643 (click-to-reveal)
- **Serving:** North America & Beyond

## Recent Updates (2025-11-05)

### SEO Improvements Deployed
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
- ✅ Sitemap submitted and crawlable
- ✅ Clean git working directory

## Next Steps for Traffic Growth

### Priority 1: Content Marketing
- Create blog section
- Target long-tail keywords: "ISO9001 gap analysis cost", "how to prepare for ISO audit"
- Write 1-2 blog posts per week
- Industry-specific landing pages

### Priority 2: Backlinks
- Submit to business directories (Thomasnet, IQS Directory)
- Guest posting on manufacturing blogs
- Resource page links
- Target: 2-3 quality backlinks per month

### Priority 3: Monitoring
- Google Search Console performance tracking
- Google Analytics traffic sources
- Search rankings for target keywords

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

### Common Tasks
- Phone/Email updates: `pages/index.js` PhoneReveal component
- Industries: `pages/index.js` industries section
- SEO: Update `<Head>` meta tags and structured data

## Known Issues

1. No blog/content section yet
2. All code in pages - consider extracting components
3. No automated testing

---

**Last Updated:** 2025-11-05
**Branch:** main
**Deployment:** Live on Vercel via GitHub integration
