# AuditsReady - Marketing Website

## Project Overview

This is the marketing and landing page website for AuditsReady, an AI-powered SOP (Standard Operating Procedure) compliance platform targeting manufacturing companies in Alberta, Canada.

**Purpose:** Customer acquisition, lead generation, and product information for an AI-powered ISO9001 compliance service.

**Current Location:** `/Users/gjayasun/git/auditsready`

## Technology Stack

- **Framework:** Next.js (latest version with React)
- **Styling:** Tailwind CSS v3.0+
- **CSS Processing:** PostCSS with Autoprefixer
- **Analytics:** Google Analytics 4 (Tracking ID: G-223ZBY1BM9)
- **Deployment Target:** Vercel (push-to-deploy)
- **Node Version:** Compatible with latest Node.js LTS

## Project Structure

```
auditsready/
├── pages/
│   ├── _app.js           # App wrapper with analytics route tracking
│   ├── _document.js      # Custom HTML document with GA script
│   ├── index.js          # Main landing page (347 lines)
│   └── privacy.js        # Privacy policy page (71 lines)
├── lib/
│   └── gtag.js          # Google Analytics utility functions (22 lines)
├── styles/
│   └── globals.css      # Tailwind CSS imports
├── public/
│   ├── auditsready-logo.png  # Company logo (1.2MB)
│   └── robots.txt       # SEO crawler directives
├── .next/               # Build output (gitignored)
├── node_modules/        # Dependencies (gitignored)
├── package.json         # Dependencies and scripts
├── next.config.js       # Next.js config with security headers
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── .env.local          # Environment variables (gitignored)
├── .env.example        # Environment template
├── .gitignore          # Git ignore rules
└── README.md           # Setup instructions
```

## Key Files Explained

### pages/index.js (347 lines)
The main landing page with these sections:

1. **PhoneReveal Component**
   - Interactive click-to-reveal: +1-403-404-4643
   - Prevents bot scraping
   - Used in hero and CTA sections

2. **Hero Section**
   - Purple/blue gradient background
   - Company logo and value proposition
   - Email and phone CTAs

3. **AI Features Section**
   - Advanced AI Backend (Claude Sonnet 4.5 + Opus)
   - Intelligent Gap Detection
   - Smart Assistance (P.Eng validated)

4. **Service Description**
   - AI-powered gap detection for ISO9001
   - Handwritten document conversion

5. **Industries Section**
   - Craft Breweries
   - Oilfield Services
   - Food Processing
   - Metal Fabrication

6. **Pricing/CTA Section**
   - Early adopter pricing mention
   - Contact information

7. **Footer**
   - Contact details
   - Privacy policy link

**SEO Features:**
- Meta title and description optimized
- OpenGraph tags for social sharing
- Twitter Card support
- Structured data (Organization, LocalBusiness, Service, FAQPage)
- Canonical URL

### pages/_app.js (22 lines)
- Global styles import
- Analytics route change tracking
- Wraps all pages

### pages/_document.js (33 lines)
- Custom HTML structure
- Google Analytics script injection
- Loads GA_ID from environment

### pages/privacy.js (71 lines)
Standard privacy policy covering:
- Information collection and usage
- Data sharing and security
- User rights
- Contact information

### lib/gtag.js (22 lines)
Google Analytics helper functions:
- `pageview(url)` - Track page views
- `event({ action, category, label, value })` - Track custom events

## Configuration Files

### package.json
```json
{
  "name": "auditsready-site",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "autoprefixer": "^10.0.0",
    "next": "latest",
    "postcss": "^8.0.0",
    "react": "latest",
    "react-dom": "latest",
    "tailwindcss": "^3.0.0"
  }
}
```

### next.config.js
**Key Features:**
- React Strict Mode enabled
- Image optimization (WebP/AVIF formats)
- Comprehensive security headers:
  - `X-Frame-Options: DENY` - Prevents clickjacking
  - `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `X-XSS-Protection: 1; mode=block`
  - Content-Security-Policy with strict directives

### tailwind.config.js
- Scans `pages/**/*.{js,jsx}` and `components/**/*.{js,jsx}`
- Uses default Tailwind theme

### .env.local (not in git)
```bash
NEXT_PUBLIC_GA_ID=G-223ZBY1BM9
```

## Development Workflow

### Initial Setup
```bash
npm install
```

### Development Server
```bash
npm run dev
# Opens at http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
```

### Deployment to Vercel
1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variable: `NEXT_PUBLIC_GA_ID=G-223ZBY1BM9`
4. Auto-deploys on push to main branch

## Target Market

**Primary Audience:**
- Small to medium manufacturing businesses worldwide
- 10-500 employees
- Companies seeking ISO9001 certification
- Facilities with handwritten/scattered documentation
- Businesses preparing for compliance audits

**Geographic Focus:**
- North America (USA, Canada, Mexico) - primary
- Global reach - accepting customers worldwide
- English language service

**Specific Industries:**
1. **Craft Breweries** - Food safety + quality management requirements
2. **Oilfield Services** - Heavy compliance needs
3. **Food Processing** - FDA/CFIA compliance
4. **Metal Fabrication** - Quality control and traceability

**Key Pain Points Addressed:**
- Handwritten procedures not audit-ready
- Don't know what's missing from their SOPs
- Expensive consultants ($5K-30K for gap analysis)
- Failed audits cost $50K-200K+

## Value Proposition

**What We Offer:**
- AI-powered conversion of handwritten docs to ISO9001 SOPs
- Comprehensive gap analysis (what's missing)
- P.Eng validated results
- 10x value at 1/10th consultant cost

**Key Differentiators:**
- Advanced AI (Claude Sonnet 4.5 + Opus)
- Professional Engineer validation
- Industry-specific focus (Alberta manufacturing)
- Affordable pricing vs. consultants

## Git History

**Current Branch:** `main`

**Recent Commits:**
```
b162988 - Merge pull request #3: analytics-integration
3396ea0 - Add Google Analytics integration with tracking ID G-223ZBY1BM9
d3c38dd - Merge pull request #2: production-ready
62188c0 - Add production-ready features: security headers, SEO, privacy policy
8827c17 - Merge pull request #1: focus_industry_change
```

**Evolution:**
1. Initial landing page
2. PR #1 - Changed industry focus to Alberta small businesses
3. PR #2 - Production features (security, SEO, privacy policy)
4. PR #3 - Google Analytics integration

**Current Status:** Clean working directory, production-ready

## SEO Strategy

### Current Implementation

**Meta Tags:**
- Title: "AuditsReady – AI-Powered SOP Compliance for Alberta Manufacturers"
- Description optimized for manufacturing compliance keywords
- OpenGraph tags for LinkedIn/Facebook sharing
- Twitter Card support

**Structured Data:**
```json
{
  "@type": "Organization",
  "name": "AuditsReady",
  "url": "https://auditsready.com",
  "contactPoint": {
    "telephone": "+1-403-404-4643",
    "email": "info@auditsready.com"
  }
}
```
- LocalBusiness schema (Calgary, Alberta)
- Service schema
- FAQPage schema

**Technical SEO:**
- robots.txt configured
- Semantic HTML structure
- Mobile-responsive design
- Fast page loads (Next.js static optimization)

**Target Keywords:**
- ISO9001 compliance
- SOP gap analysis
- Manufacturing documentation
- Alberta manufacturing compliance

## Security Features

### Implemented Security
- **Content Security Policy (CSP)** - Strict directives in next.config.js
- **XSS Protection** - Multiple layers
- **Clickjacking Prevention** - X-Frame-Options: DENY
- **MIME Sniffing Prevention** - X-Content-Type-Options: nosniff
- **Referrer Policy** - Strict origin control

### Phone Number Protection
- Click-to-reveal mechanism prevents bot scraping
- Maintains good UX for real users

## Analytics Implementation

### Google Analytics Setup
- **Tracking ID:** G-223ZBY1BM9
- **Automatic page view tracking** on route changes
- **Custom event tracking** ready to use

### Usage Example
```javascript
import * as gtag from '../lib/gtag'

// Track page view
gtag.pageview(window.location.pathname)

// Track custom event
gtag.event({
  action: 'click',
  category: 'CTA',
  label: 'Email Contact',
  value: 1
})
```

### Potential Events to Track
- Phone number reveal clicks
- Email link clicks
- Industry card interactions
- Scroll depth
- Time on page

## Contact Information

- **Email:** info@auditsready.com
- **Phone:** +1-403-404-4643
- **Target Location:** Calgary, Alberta, Canada

## Known Issues & Technical Debt

1. **Large Logo File:** auditsready-logo.png is 1.2MB - should be optimized/converted to WebP
2. **No Components Directory:** All code in pages - consider extracting reusable components
3. **Hardcoded Content:** Content embedded in JSX - consider JSON/MDX for easier management
4. **No Contact Form:** Only email/phone links - could add form with email service
5. **No Testing:** No unit or integration tests implemented
6. **No Blog/Resources:** Could add content marketing section

## Development Guidelines for AI Assistants

### Code Style
- Follow existing React/JSX patterns
- Use Tailwind utility classes (avoid custom CSS)
- Maintain mobile-first responsive design
- Keep components functional (no class components)

### When Making Changes
1. **Preserve production features:**
   - Don't modify security headers without approval
   - Maintain SEO optimization
   - Keep analytics functional

2. **Adding new features:**
   - Mobile-first design
   - Add proper meta tags
   - Track interactions with GA events
   - Consider security implications

3. **Content updates:**
   - Maintain professional, technical tone
   - Keep Alberta manufacturing focus
   - Emphasize AI + P.Eng validation
   - Highlight gap analysis value

4. **Performance:**
   - Optimize images before adding
   - Use Next.js `<Image>` component
   - Minimize JavaScript bundle

### Common Tasks

**Update Contact Info:**
- Phone: Update PhoneReveal component in `pages/index.js`
- Email: Update in `pages/index.js` and `pages/privacy.js`

**Modify Industries:**
- Edit industries section in `pages/index.js` (around lines 150-200)
- Update structured data in `<Head>` section

**Add Analytics Events:**
```javascript
import * as gtag from '../lib/gtag'

gtag.event({
  action: 'button_click',
  category: 'engagement',
  label: 'CTA Button',
  value: 1
})
```

**Update SEO:**
- Meta tags in each page's `<Head>` component
- Structured data in JSON-LD `<script>` tags
- Update `public/robots.txt` for crawler control

## Future Enhancements

### Phase 2 - Web Application
- Customer dashboard
- Document upload interface
- Real-time processing status
- Payment integration (Stripe)
- User authentication

### Content Marketing
- Add blog section
- Industry-specific case studies
- Customer testimonials
- Downloadable resources (ISO9001 checklists, etc.)

### UX Improvements
- Add contact form
- Live chat integration
- Interactive pricing calculator
- Document upload demo

### Technical Improvements
- Extract reusable components
- Add unit/integration tests
- Optimize images (WebP/AVIF)
- Add error boundaries
- Implement proper error pages (404, 500)

## Resources

- **Next.js Documentation:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Google Analytics:** https://developers.google.com/analytics/devguides/collection/gtagjs
- **Vercel Deployment:** https://vercel.com/docs

## Environment Variables

Required for production:
```bash
NEXT_PUBLIC_GA_ID=G-223ZBY1BM9  # Google Analytics tracking ID
```

## Build Information

- **Node Version:** Latest LTS recommended
- **Build Time:** ~30 seconds
- **Output:** Static pages (index, privacy) + Next.js dynamic features
- **Bundle Size:** Minimal (React + Next.js + Tailwind)

---

**Last Updated:** 2025-11-05
**Status:** Production-ready, deployed
**Repository:** `/Users/gjayasun/git/auditsready`
**Branch:** `main`
**Working Directory:** Clean
