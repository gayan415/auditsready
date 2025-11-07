# AuditsReady - AI-Powered ISO 9001 Compliance Platform

Marketing website for AuditsReady, an AI-powered ISO 9001 SOP compliance platform serving manufacturers worldwide.

**Live Site:** https://auditsready.com

## Features

- 🤖 AI-powered gap analysis and SOP compliance
- 📧 Contact form with Resend API integration
- 📱 Mobile-responsive design
- 🔍 SEO-optimized with structured data (FAQPage, ProfessionalService schemas)
- 📝 10 comprehensive blog posts (27,000+ words)
- 🌍 Worldwide coverage - any manufacturing industry
- 📊 Google Analytics 4 tracking

## Tech Stack

- **Framework:** Next.js (latest) with React
- **Styling:** Tailwind CSS v3.0+
- **Email:** Resend API + ImprovMX forwarding
- **Analytics:** Google Analytics 4
- **Deployment:** Vercel (auto-deploy on push to main)

## Local Development

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your RESEND_API_KEY to .env.local

# Run development server
npm run dev
```

Visit http://localhost:3000

## Environment Variables

Required environment variables (add to `.env.local`):

```bash
NEXT_PUBLIC_GA_ID=G-223ZBY1BM9
RESEND_API_KEY=your_resend_api_key_here
```

Get Resend API key from: https://resend.com/api-keys (free tier: 100 emails/day)

## Deployment

1. Push to GitHub main branch
2. Add environment variables in Vercel Dashboard:
   - `RESEND_API_KEY` - Your Resend API key
3. Vercel automatically deploys

## Project Structure

```
auditsready/
├── pages/
│   ├── index.js          # Main landing page
│   ├── api/
│   │   └── contact.js    # Contact form API endpoint
│   └── blog/
│       └── [10 blog posts]
├── public/
│   ├── sitemap.xml       # SEO sitemap
│   └── [images, favicons]
├── .env.example          # Environment variables template
└── claude.md             # Detailed project documentation
```

## Documentation

See `claude.md` for comprehensive project documentation including:
- Detailed feature descriptions
- SEO implementation details
- Blog content strategy
- Email configuration
- Development guidelines

## Contact

- Email: info@auditsready.com
- Website: https://auditsready.com

---

Built with Next.js, Tailwind CSS, and Resend API
