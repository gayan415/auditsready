import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

// Simple Phone Display Component
function PhoneDisplay() {
  const [showPhone, setShowPhone] = useState(false);

  if (showPhone) {
    return <span>📞 +1 (403) 404-4643</span>;
  }

  return (
    <button
      onClick={() => setShowPhone(true)}
      className="underline hover:text-gray-100 transition-colors"
    >
      📞 Click for Phone
    </button>
  );
}

// Contact Form Modal Component
function ContactFormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setFormData({ name: '', company: '', email: '', phone: '', message: '' });
          setSubmitStatus(null);
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Tell Us About Your Project</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
            >
              ×
            </button>
          </div>

          <p className="text-gray-600 mb-6">
            Tell us what you're preparing for and roughly how many documents you have. We'll reply within 24 hours.
            Prefer to see it first? Send one document for a free sample gap analysis.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Acme Manufacturing"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@acme.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+1 (403) 555-1234"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Tell us about your needs *
                </label>
                <textarea
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Number of documents, industry, timeline, specific requirements..."
                />
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-semibold">✓ Thank you! We'll reply within 24 hours. If you sent a document, we'll return a sample gap analysis at no charge.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 font-semibold">Something went wrong. Please try again.</p>
                <p className="text-red-700 text-sm mt-1">Or email us directly at info@auditsready.com</p>
              </div>
            )}

            <div className="mt-8 flex gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Send Request'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <Head>
        <title>ISO 9001 Gap Analysis Pricing | Pilot $597, Full $1,500 | P.Eng-Validated | AuditsReady</title>
        <meta name="description" content="ISO 9001 gap analysis for small and mid-size manufacturers. Pilot from $597, full engagement $1,500. Findings mapped to ISO 9001:2015 clauses and signed off by a licensed P.Eng. A fraction of consultant cost." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="ISO 9001 gap analysis pricing, ISO 9001 pre-assessment cost, ISO 9001 for small manufacturers, ISO consultant cost, P.Eng validated gap analysis, affordable ISO 9001" />
        <link rel="canonical" href="https://auditsready.com/pricing" />

        {/* OpenGraph */}
        <meta property="og:title" content="ISO 9001 Gap Analysis Pricing | Pilot $597, Full $1,500 | P.Eng-Validated" />
        <meta property="og:description" content="ISO 9001 gap analysis for small and mid-size manufacturers. Pilot from $597, full engagement $1,500. Signed off by a licensed P.Eng. A fraction of consultant cost." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://auditsready.com/pricing" />
        <meta property="og:image" content="https://auditsready.com/iso-9001-ai-powered-compliance-auditsready-logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ISO 9001 Gap Analysis Pricing | Pilot $597, Full $1,500" />
        <meta name="twitter:description" content="ISO 9001 gap analysis for small and mid-size manufacturers. Signed off by a licensed P.Eng. A fraction of consultant cost." />
        <meta name="twitter:image" content="https://auditsready.com/iso-9001-ai-powered-compliance-auditsready-logo.png" />

        {/* Favicon */}
        <link rel="icon" href="/iso-9001-auditsready-favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/iso-9001-auditsready-favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/iso-9001-auditsready-app-icon.png" />

        {/* Structured Data - Product Pricing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "AuditsReady ISO 9001 Gap Analysis",
              "description": "P.Eng-validated ISO 9001 gap analysis for small and mid-size manufacturers. Findings mapped to specific ISO 9001:2015 clauses with corrective action recommendations.",
              "brand": {
                "@type": "Brand",
                "name": "AuditsReady"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Pilot Gap Analysis",
                  "price": "597",
                  "priceCurrency": "USD",
                  "description": "Gap analysis of your quality manual or one process area, mapped to ISO 9001:2015 clauses and signed off by a licensed P.Eng. A low-risk first step."
                },
                {
                  "@type": "Offer",
                  "name": "Full Gap Analysis",
                  "price": "1500",
                  "priceCurrency": "USD",
                  "description": "Full documentation gap analysis, clause-by-clause findings report, corrective action roadmap, and one review call. Every finding validated by a licensed P.Eng."
                }
              ]
            })
          }}
        />
      </Head>

      {/* Header */}
      <header className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image
                src="/iso-9001-ai-powered-compliance-auditsready-logo.png"
                alt="AuditsReady Logo"
                width={50}
                height={50}
                className="drop-shadow-lg"
              />
              <span className="text-2xl font-bold">AuditsReady</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="hover:text-blue-200 transition-colors">Home</Link>
              <Link href="/blog" className="hover:text-blue-200 transition-colors">Blog</Link>
              <Link href="/pricing" className="text-orange-300 font-semibold">Pricing</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8 text-blue-100">
            Pilot from $597. Full gap analysis $1,500.
          </p>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            One-time engagements. No retainer, no long contract. Every finding signed off by a licensed P.Eng.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto py-20 px-6">

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-12 mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Consultant-Quality Findings, a Fraction of the Cost
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            We check your documentation against ISO 9001:2015 clause by clause and tell you exactly what to fix before your audit. Every finding is reviewed and signed off by a licensed Professional Engineer (P.Eng) with 12+ years in manufacturing quality. Nothing is auto-generated and shipped.
          </p>
        </div>

        {/* Engagements */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Two Ways to Start
            </h2>
            <p className="text-xl text-gray-600">
              Try a pilot first, or go straight to the full gap analysis. One-time engagements, no retainer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {/* Pilot */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Pilot Gap Analysis</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">$597</div>
                <p className="text-gray-600">Your quality manual or one process area</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Gap analysis of one document set or process area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Findings mapped to ISO 9001:2015 clauses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Corrective action recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Reviewed and signed off by a licensed P.Eng</span>
                </li>
              </ul>

              <p className="text-sm text-gray-600 mb-6">
                <strong>Best for:</strong> Seeing the quality of our work before a full engagement
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-blue-900 text-white py-4 rounded-full font-semibold hover:bg-blue-800 transition-colors"
              >
                Start With a Pilot
              </button>
            </div>

            {/* Full */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-blue-900 relative transform md:scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>

              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Full Gap Analysis</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">$1,500</div>
                <p className="text-gray-600">Your full documentation set</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span><strong>Full documentation gap analysis</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Clause-by-clause findings report</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Corrective action roadmap, prioritized by audit risk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>One review call to walk through the findings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span><strong>Every finding validated by a licensed P.Eng</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Audit-ready findings in about 2 weeks</span>
                </li>
              </ul>

              <p className="text-sm text-gray-600 mb-6">
                <strong>Best for:</strong> Manufacturers preparing for certification, surveillance, or a customer audit
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Get Started
              </button>
            </div>
          </div>

          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Not sure yet? Send us one document — your quality manual or a single SOP — and we'll return a real
            sample gap analysis at no charge, usually within 24 hours.
          </p>
        </section>

        {/* Cost Comparison */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-12 border-l-8 border-orange-500">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              What Gap Analysis Usually Costs
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="py-4 px-6 text-left font-bold">Approach</th>
                    <th className="py-4 px-6 text-left font-bold">Typical Cost</th>
                    <th className="py-4 px-6 text-left font-bold">Turnaround</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-semibold">Traditional consultant gap analysis</td>
                    <td className="py-4 px-6">$5,000 - $15,000</td>
                    <td className="py-4 px-6">4 - 8 weeks</td>
                  </tr>
                  <tr className="border-b bg-blue-50">
                    <td className="py-4 px-6 font-semibold">AuditsReady Full Gap Analysis (P.Eng-validated)</td>
                    <td className="py-4 px-6 text-blue-900 font-bold">$1,500</td>
                    <td className="py-4 px-6">~2 weeks</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-semibold">AuditsReady Pilot Gap Analysis</td>
                    <td className="py-4 px-6 text-blue-900 font-bold">$597</td>
                    <td className="py-4 px-6">~1 week</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 bg-white rounded-xl p-8 text-center shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">The Real Number to Watch</h3>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                A failed certification audit typically costs <strong>$8,000&ndash;$15,000</strong> in wasted audit fees
                plus <strong>3&ndash;6 months</strong> of delay. A pre-assessment costs a fraction of that. Find the gaps
                before the auditor does.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Why Choose AuditsReady?
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">P.Eng-Validated</h3>
                <p className="text-gray-600">Every finding reviewed and signed off by a licensed Professional Engineer</p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Plant Experience</h3>
                <p className="text-gray-600">12+ years in manufacturing quality at building-materials and packaging plants</p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Clause-Mapped</h3>
                <p className="text-gray-600">Findings tied to specific ISO 9001:2015 clauses with corrective actions</p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">A Fraction of the Cost</h3>
                <p className="text-gray-600">Far less than a traditional consultant, and far less than a failed audit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Send us one document for a free sample gap analysis, or start with a $597 pilot. Every finding is validated by a licensed P.Eng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get a Free Sample Gap Analysis
              </button>
              <Link
                href="/blog/iso-9001-checklist"
                className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Download Free Checklist
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image
                src="/iso-9001-ai-powered-compliance-auditsready-logo.png"
                alt="AuditsReady Logo"
                width={48}
                height={48}
                className="mb-4 opacity-80"
              />
              <p className="text-sm text-gray-400">
                P.Eng-Validated ISO 9001 Gap Analysis for Small & Mid-Size Manufacturers
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2 text-sm">
                <p>📧 <a href="mailto:info@auditsready.com" className="hover:text-white transition-colors">info@auditsready.com</a></p>
                <p><PhoneDisplay /></p>
                <p>🌎 Serving manufacturers in North America & worldwide</p>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>ISO 9001 Gap Analysis</li>
                <li>Pre-Assessment & Audit Readiness</li>
                <li>Corrective Action Roadmaps</li>
                <li>P.Eng-Validated Findings</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm mb-2">
              &copy; {new Date().getFullYear()} AuditsReady. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              ISO 9001 gap analysis reviewed and signed off by a licensed Professional Engineer (P.Eng).
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
