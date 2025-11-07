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
RESEND_API_KEY=re_7R9j7PVX_GR8WzoKs9L5phAaCAAyrVFjQ
```

**Resend Account:** jayasundara.jmg@gmail.com
**API Keys:** https://resend.com/api-keys (free tier: 100 emails/day)

## Email Setup

### Contact Form Configuration

The contact form uses **Resend** (sending) + **ImprovMX** (forwarding):

```
Customer submits form → Resend API → info@auditsready.com → ImprovMX → Your inbox
```

### Resend Setup (Already Configured ✅)

1. **Domain Verified:** auditsready.com
   - Go to: https://resend.com/domains
   - Status: ✅ Verified (DKIM, SPF, DMARC)

2. **Sender Email:** noreply@auditsready.com (used in code)

3. **API Key:** Already set in Vercel environment variables

### ImprovMX Setup (Already Configured ✅)

1. **Forwarding:** info@auditsready.com → Personal email
2. **Dashboard:** https://app.improvmx.com

### Troubleshooting

If contact form fails:
1. Check Vercel logs: https://vercel.com/dashboard → Project → Logs
2. Verify `RESEND_API_KEY` is set in Vercel environment variables
3. Confirm domain is verified: https://resend.com/domains
4. Test API directly (see CLAUDE.md for curl command)

## Deployment

### Production Deployment

1. Push to GitHub main branch
2. Ensure environment variables are set in Vercel Dashboard:
   - Go to: https://vercel.com/dashboard → Project → Settings → Environment Variables
   - Add `RESEND_API_KEY` (already configured)
3. Vercel automatically deploys

### First-Time Email Setup

**Note:** Email is already configured for auditsready.com. Only follow these steps if setting up a new domain:

1. **Verify Domain in Resend:**
   - Go to: https://resend.com/domains
   - Add your domain
   - Add DNS records (TXT, MX) to your domain provider
   - Wait for verification (5-60 minutes)

2. **Update Code:**
   - Change `from` field in `/pages/api/contact.js`
   - Use your verified domain email (e.g., `noreply@yourdomain.com`)

3. **Configure Forwarding (Optional):**
   - Set up ImprovMX or similar to forward emails to your inbox

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
