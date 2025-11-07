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
            <h2 className="text-3xl font-bold text-gray-900">Get Custom Quote</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
            >
              ×
            </button>
          </div>

          <p className="text-gray-600 mb-6">
            Tell us about your needs and we'll provide a customized quote within 24 hours.
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
                <p className="text-green-800 font-semibold">✓ Thank you! We'll send you a custom quote within 24 hours.</p>
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
                {isSubmitting ? 'Submitting...' : 'Get Custom Quote'}
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
        <title>Pricing - AI-Powered ISO 9001 Compliance | AuditsReady</title>
        <meta name="description" content="AuditsReady pricing: 70-85% savings vs traditional ISO 9001 consultants. One-time packages from $1,500 or monthly subscriptions from $99. AI-powered gap analysis and SOP generation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="ISO 9001 pricing, ISO consultant cost, gap analysis price, SOP compliance cost, ISO certification pricing, affordable ISO 9001" />
        <link rel="canonical" href="https://auditsready.com/pricing" />

        {/* OpenGraph */}
        <meta property="og:title" content="Pricing - AI-Powered ISO 9001 Compliance | AuditsReady" />
        <meta property="og:description" content="Save 70-85% vs traditional consultants. AI-powered ISO 9001 gap analysis and SOP generation from $1,500." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://auditsready.com/pricing" />
        <meta property="og:image" content="https://auditsready.com/iso-9001-ai-powered-compliance-auditsready-logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing - AI-Powered ISO 9001 Compliance" />
        <meta name="twitter:description" content="70-85% savings vs traditional ISO consultants. AI-powered compliance from $1,500." />
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
              "name": "AuditsReady ISO 9001 Compliance Service",
              "description": "AI-powered ISO 9001 gap analysis and SOP generation service",
              "brand": {
                "@type": "Brand",
                "name": "AuditsReady"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Basic Package",
                  "price": "1500",
                  "priceCurrency": "USD",
                  "description": "25 documents digitization with ISO 9001 formatting"
                },
                {
                  "@type": "Offer",
                  "name": "Professional Package",
                  "price": "2500",
                  "priceCurrency": "USD",
                  "description": "25 documents with detailed gap analysis and compliance mapping"
                },
                {
                  "@type": "Offer",
                  "name": "Premium Package",
                  "price": "4500",
                  "priceCurrency": "USD",
                  "description": "25 documents with AI-generated fixes and P.Eng verification"
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
            Save 70-85% vs Traditional ISO Consultants
          </p>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            One-time packages or flexible monthly subscriptions. No hidden fees. No surprises.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto py-20 px-6">

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-12 mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6">
            AI-Powered Compliance at 1/10th the Cost
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Our AI analyzes your documentation, identifies gaps, and generates ISO 9001-compliant SOPs — all validated by a licensed Professional Engineer (P.Eng). Get consultant-quality results without consultant-level prices.
          </p>
        </div>

        {/* One-Time Packages */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              One-Time Packages
            </h2>
            <p className="text-xl text-gray-600">
              Perfect for certification preparation or one-time document reviews
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Basic */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Basic</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">$1,500</div>
                <p className="text-gray-600">25 documents ($60/doc)</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Document digitization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>ISO 9001 formatted SOPs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Quality validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Editable Word documents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Basic confidence scoring</span>
                </li>
              </ul>

              <p className="text-sm text-gray-600 mb-6">
                <strong>Best for:</strong> Companies with existing ISO knowledge who need digitization
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-blue-900 text-white py-4 rounded-full font-semibold hover:bg-blue-800 transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Professional */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-blue-900 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>

              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Professional</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">$2,500</div>
                <p className="text-gray-600">25 documents ($100/doc)</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span><strong>Everything in Basic</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span><strong>Detailed gap analysis</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Clause-by-clause ISO 9001 mapping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Gap severity levels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Comprehensive gap report</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Priority action plan</span>
                </li>
              </ul>

              <p className="text-sm text-gray-600 mb-6">
                <strong>Best for:</strong> Companies preparing for certification who need to know exactly what's missing
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Get Started
              </button>
            </div>

            {/* Premium */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Premium</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">$4,500</div>
                <p className="text-gray-600">25 documents ($180/doc)</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span><strong>Everything in Professional</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span><strong>AI-generated gap fixes</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Surgical insertions (preserves content)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Fixed SOP documents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span><strong>P.Eng verification</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Compliance certification letter</span>
                </li>
              </ul>

              <p className="text-sm text-gray-600 mb-6">
                <strong>Best for:</strong> Companies wanting "done for you" with P.Eng validation
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-blue-900 text-white py-4 rounded-full font-semibold hover:bg-blue-800 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-12 border-l-8 border-orange-500">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Your Savings vs Traditional Consultants
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="py-4 px-6 text-left font-bold">Service</th>
                    <th className="py-4 px-6 text-left font-bold">Traditional Consultant</th>
                    <th className="py-4 px-6 text-left font-bold">AuditsReady</th>
                    <th className="py-4 px-6 text-left font-bold">Your Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-semibold">Document Digitization (25 docs)</td>
                    <td className="py-4 px-6">$5,000 - $8,000</td>
                    <td className="py-4 px-6 text-blue-900 font-bold">$1,500</td>
                    <td className="py-4 px-6 text-green-600 font-bold">$3,500 - $6,500 (70-81%)</td>
                  </tr>
                  <tr className="border-b bg-blue-50">
                    <td className="py-4 px-6 font-semibold">Gap Analysis + Digitization</td>
                    <td className="py-4 px-6">$10,000 - $15,000</td>
                    <td className="py-4 px-6 text-blue-900 font-bold">$2,500</td>
                    <td className="py-4 px-6 text-green-600 font-bold">$7,500 - $12,500 (75-83%)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-semibold">Gap Analysis + Remediation</td>
                    <td className="py-4 px-6">$15,000 - $30,000</td>
                    <td className="py-4 px-6 text-blue-900 font-bold">$4,500</td>
                    <td className="py-4 px-6 text-green-600 font-bold">$10,500 - $25,500 (70-85%)</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-semibold">Full Certification Support (Annual)</td>
                    <td className="py-4 px-6">$20,000 - $50,000</td>
                    <td className="py-4 px-6 text-blue-900 font-bold">$8,088<br/><span className="text-sm text-gray-600">(Package + Subscription)</span></td>
                    <td className="py-4 px-6 text-green-600 font-bold">$11,912 - $41,912 (60-84%)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 bg-white rounded-xl p-8 text-center shadow-lg">
              <h3 className="text-3xl font-bold text-green-600 mb-4">Average Customer Savings</h3>
              <p className="text-5xl font-bold text-green-600 mb-4">$10,000 - $25,000</p>
              <p className="text-gray-600 text-lg">Per engagement compared to traditional consulting</p>
            </div>
          </div>
        </section>

        {/* Monthly Subscriptions */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Monthly Subscription Plans
            </h2>
            <p className="text-xl text-gray-600">
              Ongoing compliance support with document management and continuous analysis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Subscription */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Basic</h3>
              <div className="text-center mb-8">
                <span className="text-5xl font-bold text-gray-900">$99</span>
                <span className="text-gray-600">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>50 conversions/month</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>500 documents storage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Version control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Basic support</span>
                </li>
              </ul>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-blue-900 text-white py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors"
              >
                Start Free Trial
              </button>
            </div>

            {/* Professional Subscription */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-blue-900 transform scale-105">
              <div className="bg-blue-900 text-white text-center py-2 rounded-lg mb-4 font-bold">
                RECOMMENDED
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Professional</h3>
              <div className="text-center mb-8">
                <span className="text-5xl font-bold text-gray-900">$299</span>
                <span className="text-gray-600">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>500 conversions/month</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span><strong>Gap analysis included</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>5,000 documents storage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>API access</span>
                </li>
              </ul>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Start Free Trial
              </button>
            </div>

            {/* Enterprise Subscription */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Enterprise</h3>
              <div className="text-center mb-8">
                <span className="text-5xl font-bold text-gray-900">$999</span>
                <span className="text-gray-600">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Unlimited conversions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span><strong>Multi-standard support</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Unlimited storage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Multi-user access (10 users)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Dedicated account manager</span>
                </li>
              </ul>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-blue-900 text-white py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* ROI Example */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-12 border-l-8 border-green-500">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Real-World Example: Small Manufacturer
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Traditional Consultant Route</h3>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex justify-between pb-3 border-b">
                      <span>Gap Analysis</span>
                      <span className="font-bold">$10,000</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b">
                      <span>Document Remediation</span>
                      <span className="font-bold">$15,000</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b">
                      <span>Annual Support</span>
                      <span className="font-bold">$5,000</span>
                    </div>
                    <div className="flex justify-between pt-3 bg-red-50 p-4 rounded-lg">
                      <span className="font-bold">First Year Total</span>
                      <span className="font-bold text-red-600 text-2xl">$30,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">AuditsReady Route</h3>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex justify-between pb-3 border-b">
                      <span>Premium Package (25 docs)</span>
                      <span className="font-bold">$4,500</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b">
                      <span>Professional Subscription (12 months)</span>
                      <span className="font-bold">$3,588</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b">
                      <span>&nbsp;</span>
                      <span>&nbsp;</span>
                    </div>
                    <div className="flex justify-between pt-3 bg-green-50 p-4 rounded-lg">
                      <span className="font-bold">First Year Total</span>
                      <span className="font-bold text-green-600 text-2xl">$8,088</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-xl p-8 text-center shadow-lg">
              <h3 className="text-3xl font-bold text-green-600 mb-3">Total First Year Savings</h3>
              <p className="text-6xl font-bold text-green-600 mb-4">$21,912</p>
              <p className="text-gray-600 text-xl">That's a 73% cost reduction with the same compliance results</p>
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
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Fast</h3>
                <p className="text-gray-600">5 minutes per document vs weeks with consultants</p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Affordable</h3>
                <p className="text-gray-600">1/10th the cost of traditional consulting</p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Accurate</h3>
                <p className="text-gray-600">P.Eng-verified compliance analysis</p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Comprehensive</h3>
                <p className="text-gray-600">Clause-by-clause ISO 9001:2015 mapping</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us for a free consultation and see how much you can save with AI-powered compliance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get Custom Quote
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
                AI-Powered ISO 9001 Compliance for Manufacturers Worldwide
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2 text-sm">
                <p>📧 <a href="mailto:info@auditsready.com" className="hover:text-white transition-colors">info@auditsready.com</a></p>
                <p><PhoneDisplay /></p>
                <p>🌎 Serving Worldwide</p>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>AI-Powered Gap Analysis</li>
                <li>SOP Document Generation</li>
                <li>Audit Preparation</li>
                <li>P.Eng Validated Consulting</li>
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
              &copy; 2025 AuditsReady. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Professional Engineer (P.Eng) Validated | AI-Powered ISO 9001 Compliance
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
