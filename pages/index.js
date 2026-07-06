
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

// Phone Reveal Component
function PhoneReveal({ buttonStyle, buttonText = "📞 Call Us", displayStyle = "" }) {
  const [showPhone, setShowPhone] = useState(false);
  
  const handleClick = () => {
    setShowPhone(true);
  };

  if (showPhone) {
    return (
      <a 
        href="tel:+1-403-404-4643" 
        className={buttonStyle}
      >
        📞 +1 (403) 404-4643
      </a>
    );
  }

  return (
    <button 
      onClick={handleClick}
      className={buttonStyle}
    >
      {buttonText}
    </button>
  );
}

// Simple Phone Display Component for Footer
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
      // Send form data to API endpoint
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
            <h2 className="text-3xl font-bold text-gray-900">Get Your Free Gap Analysis</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
            >
              ×
            </button>
          </div>

          <p className="text-gray-600 mb-6">
            Send us one document — your quality manual or a single SOP — and we'll return a real sample gap analysis at no charge.
            Attach it here or email it to info@auditsready.com. Prefer to talk first? Ask for a 15-minute call in the message below.
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
                  Message *
                </label>
                <textarea
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What are you preparing for — certification, a surveillance audit, or a customer audit? Roughly how many documents do you have? (Or ask for a 15-minute call.)"
                />
              </div>
            </div>

            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                ✓ We reply within 24 hours. Every gap analysis is reviewed and signed off by a licensed P.Eng.
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-semibold">✓ Thank you! Your request has been submitted successfully.</p>
                <p className="text-green-700 text-sm mt-1">We'll reply within 24 hours. If you attached or emailed a document, we'll send back a sample gap analysis at no charge.</p>
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
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
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

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Head>
        <title>ISO 9001 Gap Analysis for Small & Mid-Size Manufacturers | P.Eng-Validated | AuditsReady</title>
        <meta name="description" content="Pass your ISO 9001 audit without a $20K consultant. Gap analysis for small and mid-size manufacturers, reviewed and signed off by a licensed Professional Engineer (P.Eng). Audit-ready findings in 2 weeks, at a fraction of consultant cost." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AuditsReady" />
        <meta name="keywords" content="ISO 9001 gap analysis, ISO 9001 pre-assessment, ISO 9001 for small manufacturers, ISO 9001 certification, surveillance audit, customer audit, quality management system, P.Eng validated, building materials manufacturing, packaging manufacturing, plastics manufacturing, metal fabrication, industrial products manufacturing, quality manual review, SOP gap analysis" />
        <link rel="canonical" href="https://auditsready.com" />

        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="ISO 9001 Gap Analysis for Small & Mid-Size Manufacturers | P.Eng-Validated" />
        <meta property="og:description" content="Pass your ISO 9001 audit without a $20K consultant. Gap analysis for small and mid-size manufacturers, reviewed and signed off by a licensed P.Eng. Audit-ready findings in 2 weeks." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://auditsready.com" />
        <meta property="og:image" content="https://auditsready.com/iso-9001-ai-powered-compliance-auditsready-logo.png" />
        <meta property="og:site_name" content="AuditsReady" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ISO 9001 Gap Analysis for Small & Mid-Size Manufacturers | P.Eng-Validated" />
        <meta name="twitter:description" content="Pass your ISO 9001 audit without a $20K consultant. Gap analysis for small and mid-size manufacturers, signed off by a licensed P.Eng. Audit-ready findings in 2 weeks." />
        <meta name="twitter:image" content="https://auditsready.com/iso-9001-ai-powered-compliance-auditsready-logo.png" />

        {/* Favicon and Icons */}
        <link rel="icon" href="/iso-9001-auditsready-favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/iso-9001-auditsready-favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/iso-9001-auditsready-app-icon.png" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "AuditsReady",
              "description": "ISO 9001 gap analysis for small and mid-size manufacturers preparing for certification, surveillance audits, or customer audits. Every finding is reviewed and signed off by a licensed Professional Engineer (P.Eng) with 12+ years of manufacturing quality experience. Focused on general industrial manufacturing: building materials, packaging, plastics, metal fabrication, and industrial products.",
              "url": "https://auditsready.com",
              "logo": "https://auditsready.com/iso-9001-ai-powered-compliance-auditsready-logo.png",
              "image": "https://auditsready.com/iso-9001-ai-powered-compliance-auditsready-logo.png",
              "telephone": "+1-403-404-4643",
              "email": "info@auditsready.com",
              "priceRange": "$$",
              "areaServed": {
                "@type": "Place",
                "name": "Worldwide"
              },
              "knowsAbout": [
                "ISO 9001 Certification",
                "ISO 9001 Gap Analysis",
                "ISO 9001 Pre-Assessment",
                "Quality Management Systems",
                "Building Materials Manufacturing",
                "Packaging Manufacturing",
                "Plastics Manufacturing",
                "Metal Fabrication",
                "Industrial Products Manufacturing",
                "Surveillance Audit Preparation",
                "Customer Audit Preparation",
                "Corrective Action Planning",
                "Quality Manual Review"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-403-404-4643",
                "email": "info@auditsready.com",
                "contactType": "Customer Service",
                "availableLanguage": ["English", "en"]
              },
              "sameAs": []
            })
          }}
        />

        {/* Structured Data - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "ISO 9001 Gap Analysis",
              "name": "ISO 9001 Gap Analysis for Small & Mid-Size Manufacturers",
              "description": "P.Eng-validated ISO 9001 gap analysis for small and mid-size manufacturers preparing for certification, surveillance audits, or customer audits. Findings mapped to specific ISO 9001:2015 clauses with corrective action recommendations.",
              "provider": {
                "@type": "Organization",
                "name": "AuditsReady",
                "url": "https://auditsready.com"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Worldwide"
              },
              "audience": {
                "@type": "BusinessAudience",
                "audienceType": "Small and mid-size manufacturers (10-500 employees) in building materials, packaging, plastics, metal fabrication, and industrial products"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "ISO 9001 Gap Analysis Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Pilot Gap Analysis",
                      "description": "Gap analysis of your quality manual or one process area, mapped to ISO 9001:2015 clauses and validated by a licensed P.Eng. A low-risk first step before a full engagement."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Full Documentation Gap Analysis",
                      "description": "Full documentation gap analysis, clause-by-clause findings report, corrective action roadmap, and one review call. Every finding reviewed and signed off by a licensed P.Eng."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Free Sample Gap Analysis",
                      "description": "Upload or email one document (quality manual or a single SOP) and receive a real sample gap analysis at no charge."
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Structured Data - FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Who is AuditsReady for?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Small and mid-size manufacturers (10-500 employees) preparing for ISO 9001 certification, surveillance audits, or customer audits. We focus on general industrial manufacturing: building materials, packaging, plastics, metal fabrication, and industrial products. We work with other manufacturing sectors as well."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who reviews the gap analysis?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Every finding is reviewed and signed off by a licensed Professional Engineer (P.Eng, APEGA) with 12+ years of manufacturing quality experience at building-materials and packaging plants. We use modern analysis tooling to work fast, but nothing is auto-generated and shipped. A P.Eng validates everything before it reaches you."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What do I receive?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Audit-ready findings mapped to specific ISO 9001:2015 clauses, with corrective action recommendations. The full engagement includes a documentation gap analysis, a clause-by-clause findings report, a corrective action roadmap, and one review call. Turnaround is about 2 weeks."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does it cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Pilot Gap Analysis of your quality manual or one process area is $597, positioned as a first step. The full documentation gap analysis is $1,500. A failed certification audit typically costs $8,000-$15,000 in wasted audit fees plus 3-6 months of delay, so a pre-assessment costs a fraction of that. You can also send one document for a free sample gap analysis."
                  }
                }
              ]
            })
          }}
        />
      </Head>

      {/* Navigation */}
      <nav className="bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/iso-9001-ai-powered-compliance-auditsready-logo.png"
                alt="AuditsReady Logo"
                width={50}
                height={50}
                className="drop-shadow-lg"
              />
              <span className="text-2xl font-bold text-white">AuditsReady</span>
            </div>
            <div className="hidden md:flex gap-6 text-white">
              <Link href="/blog" className="hover:text-blue-200 transition-colors">Blog</Link>
              <Link href="/faq" className="hover:text-blue-200 transition-colors">FAQ</Link>
              <Link href="/pricing" className="hover:text-blue-200 transition-colors">Pricing</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center text-white">
          {/* P.Eng trust line */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8 text-sm font-semibold text-blue-50">
            <span className="text-lg">🛡️</span>
            Reviewed and signed off by a licensed Professional Engineer (P.Eng)
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Pass your ISO 9001 audit — without the $20K consultant.
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-6 text-blue-100 leading-relaxed">
            Gap analysis for small and mid-size manufacturers, reviewed and signed off by a licensed
            Professional Engineer (P.Eng) with 12+ years of manufacturing quality experience at
            building-materials and packaging plants. Audit-ready findings in 2 weeks, at a fraction of consultant cost.
          </p>
          <p className="text-base max-w-3xl mx-auto mb-10 text-blue-200">
            Built for building materials, packaging, plastics, metal fabrication, and industrial products —
            10 to 500 employees. Other manufacturing sectors welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get a free gap analysis of your quality manual or one SOP
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Book a 15-minute call
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            ✓ Upload or email one document • 🚀 Real sample gap analysis at no charge • ✓ No obligation
          </p>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-300 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </header>

      <main className="max-w-7xl mx-auto py-20 px-6">
        {/* Trust Signals - How It Works */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three steps to audit-ready findings — reviewed by a P.Eng before they reach you
            </p>
          </div>

          {/* Demo Video */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-black" style={{ aspectRatio: '16 / 9' }}>
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                poster="/iso-9001-ai-powered-compliance-auditsready-logo.png"
              >
                <source src="/auditsready-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Send Your Documents</h3>
              <p className="text-gray-600">Email your quality manual, SOPs, or work instructions. Word, PDF, or scans — whatever you have.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">P.Eng Reviews the Gaps</h3>
              <p className="text-gray-600">We check your documentation against ISO 9001:2015 clause by clause. A licensed P.Eng reviews and validates every finding.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Audit-Ready Findings</h3>
              <p className="text-gray-600">Receive a findings report mapped to specific clauses, with corrective action recommendations — in about 2 weeks, not 6 months.</p>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border-2 border-green-200 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-4xl">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900">Professional Engineer Validated</h3>
            </div>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Every gap analysis is reviewed and signed off by a licensed Professional Engineer (P.Eng, APEGA)
              with 12+ years in manufacturing quality assurance at building-materials and packaging plants.
              Nothing is auto-generated and shipped.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
              <div>✓ Licensed P.Eng (APEGA)</div>
              <div>✓ 12+ Years in Manufacturing QA</div>
              <div>✓ Findings Mapped to ISO 9001:2015 Clauses</div>
            </div>
          </div>

          {/* Free Checklist Button */}
          <div className="mt-12 text-center">
            <Link
              href="/blog/iso-9001-checklist"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="text-2xl">📋</span>
              Free ISO 9001 Checklist
            </Link>
            <p className="text-gray-600 mt-3 text-sm">Download our comprehensive implementation guide</p>
          </div>
        </section>

        {/* Why Trust Us Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Trust Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A licensed engineer with real plant experience reviews your documentation. No black box.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Licensed Professional Engineer</h3>
              <p className="text-gray-700">
                Licensed Professional Engineer (P.Eng, APEGA) with 12+ years in manufacturing quality assurance.
                Your findings are reviewed by an engineer, not a template.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real Plant Experience</h3>
              <p className="text-gray-700">
                Hands-on QMS and ISO experience in building materials manufacturing (IKO Industries)
                and packaging manufacturing (WestRock). We have worked the shop floor, not just the standard.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Audit-Ready Deliverables</h3>
              <p className="text-gray-700">
                Findings are mapped to specific ISO 9001:2015 clauses, each with a corrective action
                recommendation. You know exactly what to fix and where the standard requires it.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Cost of Failing</h3>
              <p className="text-gray-700">
                A failed certification audit typically costs $8,000–$15,000 in wasted audit fees plus
                3–6 months of delay. A pre-assessment costs a fraction of that. Find the gaps before the auditor does.
              </p>
            </div>
          </div>

          {/* Single AI mention — framed as speed/cost, human-validated */}
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 max-w-4xl mx-auto text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>How we work fast:</strong> we use modern analysis tooling to move quickly — but every finding
              is reviewed and validated by a licensed P.Eng before it reaches you. Nothing is auto-generated and shipped.
              Drafts are prepared for your review and validated by a P.Eng.
            </p>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  What You Get
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  A clear picture of where your documentation stands against ISO 9001:2015 — and exactly
                  what to fix before your audit. Every finding is drafted for your review and validated by a P.Eng.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-700">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <strong>Clause-by-clause findings:</strong> each gap tied to the specific ISO 9001:2015 clause it affects
                    </div>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <strong>Corrective action recommendations:</strong> what to change, in plain language, prioritized by audit risk
                    </div>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <strong>P.Eng sign-off:</strong> a licensed engineer reviews and validates every finding before you see it
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-8 text-center">
                <div className="text-6xl mb-4">📋</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Audit-Ready in About 2 Weeks</h4>
                <p className="text-gray-600">A findings report you can hand to your team and act on before the auditor arrives</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-12 border border-blue-100">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Built for Industrial Manufacturers
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We focus on small and mid-size general manufacturers — <strong>10 to 500 employees</strong> —
                preparing for ISO 9001 certification, surveillance audits, or customer audits.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4 text-center">🏭</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Industrial Manufacturing</h3>
                <p className="text-gray-600 text-sm text-center">
                  Building materials, packaging, plastics, metal fabrication, and industrial products — the sectors we know firsthand
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4 text-center">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Small & Mid-Size</h3>
                <p className="text-gray-600 text-sm text-center">
                  10 to 500 employees — the range where a full-time quality department is rare and outside help matters most
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4 text-center">✅</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Any Audit Milestone</h3>
                <p className="text-gray-600 text-sm text-center">
                  First certification, annual surveillance audit, or a customer audit you can't afford to fail
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-700 text-lg">
                In a different manufacturing sector? We still work with you — just ask.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Start Small. Prove the Value First.
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Try a Pilot Gap Analysis before committing to a full engagement. No retainer, no long contract.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Pilot */}
              <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-1">Pilot Gap Analysis</h3>
                <div className="text-4xl font-bold mb-1">$597</div>
                <p className="text-blue-200 mb-6 text-sm">Your quality manual or one process area</p>
                <ul className="space-y-3 text-blue-100 text-sm">
                  <li>✓ Gap analysis of one document set or process area</li>
                  <li>✓ Findings mapped to ISO 9001:2015 clauses</li>
                  <li>✓ Corrective action recommendations</li>
                  <li>✓ Reviewed and signed off by a licensed P.Eng</li>
                </ul>
                <p className="text-blue-200 text-sm mt-6">A low-risk first step before the full engagement.</p>
              </div>

              {/* Full */}
              <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-1 text-blue-900">Full Gap Analysis</h3>
                <div className="text-4xl font-bold mb-1">$1,500</div>
                <p className="text-gray-600 mb-6 text-sm">Your full documentation set</p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>✓ Full documentation gap analysis</li>
                  <li>✓ Clause-by-clause findings report</li>
                  <li>✓ Corrective action roadmap</li>
                  <li>✓ One review call to walk through the findings</li>
                  <li>✓ Every finding validated by a licensed P.Eng</li>
                </ul>
                <p className="text-gray-600 text-sm mt-6">Audit-ready findings in about 2 weeks.</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg mb-8 text-blue-100 max-w-3xl mx-auto">
                A failed certification audit typically costs $8,000–$15,000 plus 3–6 months of delay.
                A pre-assessment costs a fraction of that.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Get a free sample gap analysis
                </button>
                <Link
                  href="/pricing"
                  className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  View Detailed Pricing
                </Link>
              </div>
              <p className="text-sm text-blue-200 mt-4">
                ✓ Send one document • 🚀 24-hour response • ✓ No obligation
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2 text-sm">
                <p>📧 <a href="mailto:info@auditsready.com" className="hover:text-white transition-colors">info@auditsready.com</a></p>
                <p><PhoneDisplay /></p>
                <p>🌎 Serving manufacturers in North America & worldwide</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>ISO 9001 Gap Analysis</li>
                <li>Pre-Assessment & Audit Readiness</li>
                <li>Corrective Action Roadmaps</li>
                <li>P.Eng-Validated Findings</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
                <li><Link href="/acceptable-use" className="hover:text-white transition-colors">Acceptable Use</Link></li>
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
