
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
            <h2 className="text-3xl font-bold text-gray-900">Schedule Your Free Call</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
            >
              ×
            </button>
          </div>

          <p className="text-gray-600 mb-6">
            Fill out the form below and we'll call you within 24 hours to schedule your free 15-minute consultation.
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
                  placeholder="Tell us about your ISO 9001 compliance needs..."
                />
              </div>
            </div>

            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                ✓ We'll call you within 24 hours to schedule your free 15-minute consultation
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-semibold">✓ Thank you! Your request has been submitted successfully.</p>
                <p className="text-green-700 text-sm mt-1">We'll call you within 24 hours to schedule your free 15-minute consultation.</p>
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
        <title>AI-Powered ISO 9001 Gap Analysis | Audit-Ready SOP Compliance | AuditsReady</title>
        <meta name="description" content="AI-powered ISO 9001 compliance for any manufacturing industry worldwide. Automated gap analysis and ISO 9001-compliant SOP generation. P.Eng validated. Serving all manufacturing sectors from job shops to large facilities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AuditsReady" />
        <meta name="keywords" content="ISO 9001 gap analysis, ISO 9001 consultant, SOP compliance, manufacturing audit preparation, ISO certification service, quality management system, audit-ready documentation, SOP conversion, any manufacturing industry, all manufacturing sectors, automotive ISO 9001, aerospace manufacturing, electronics manufacturing, food processing ISO 9001, consumer products manufacturing, textile manufacturing, plastics manufacturing" />
        <link rel="canonical" href="https://auditsready.com" />

        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="AI-Powered ISO 9001 Gap Analysis | Any Manufacturing Industry" />
        <meta property="og:description" content="AI-powered ISO 9001 compliance for any manufacturing industry worldwide. Automated gap analysis and ISO 9001-compliant SOP generation. P.Eng validated for all manufacturing sectors." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://auditsready.com" />
        <meta property="og:image" content="https://auditsready.com/iso-9001-ai-powered-compliance-auditsready-logo.png" />
        <meta property="og:site_name" content="AuditsReady" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Powered ISO 9001 Gap Analysis | Any Manufacturing Industry" />
        <meta name="twitter:description" content="AI-powered ISO 9001 compliance for any manufacturing industry. Automated gap analysis and ISO 9001-compliant SOP generation. P.Eng validated worldwide." />
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
              "description": "AI-powered ISO 9001 compliance and SOP gap analysis service for any manufacturing industry worldwide. Serving automotive, aerospace, electronics, food processing, consumer products, textiles, plastics, metal fabrication, and all manufacturing sectors. P.Eng validated audit preparation.",
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
                "Quality Management Systems",
                "Manufacturing Compliance",
                "Automotive Manufacturing",
                "Aerospace Manufacturing",
                "Electronics Manufacturing",
                "Food Processing",
                "Consumer Products Manufacturing",
                "Textile Manufacturing",
                "Plastics Manufacturing",
                "Metal Fabrication",
                "SOP Documentation",
                "Gap Analysis"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-403-404-4643",
                "email": "info@auditsready.com",
                "contactType": "Customer Service",
                "availableLanguage": ["English", "en"]
              },
              "sameAs": [],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "1"
              }
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
              "serviceType": "ISO 9001 Compliance Consulting",
              "name": "AI-Powered ISO 9001 Compliance for All Manufacturing Industries",
              "description": "Automated gap analysis and ISO 9001-compliant SOP generation for any manufacturing sector worldwide",
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
                "audienceType": "Manufacturing Companies of All Sizes and Industries"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "ISO 9001 Compliance Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI-Powered ISO 9001 Gap Analysis",
                      "description": "Automated gap detection and compliance mapping"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SOP Document Conversion",
                      "description": "Transform handwritten procedures into audit-ready documentation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "P.Eng Validated Audit Preparation",
                      "description": "Professional Engineer validated compliance consulting"
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
                  "name": "What industries does AuditsReady serve?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AuditsReady serves any kind of manufacturing industry worldwide, including automotive, aerospace, electronics, food processing, consumer products, textiles, plastics, metal fabrication, and all other manufacturing sectors seeking ISO 9001 certification."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does AI-powered gap analysis work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI system automatically scans your existing SOPs and documentation to identify gaps, missing procedures, and compliance issues. It maps your processes to ISO 9001 requirements and provides intelligent recommendations, all validated by a licensed Professional Engineer (P.Eng)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What company sizes can use AuditsReady?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AuditsReady serves manufacturing companies of all sizes, from small 5-person job shops to large 500+ employee production facilities. Our AI-powered platform scales to your needs regardless of company size."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is the service available worldwide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, AuditsReady provides AI-powered ISO 9001 compliance services to manufacturers worldwide, including North America, Europe, Asia, and all other regions globally."
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
              <Link href="/" className="hover:text-blue-200 transition-colors font-semibold text-orange-300">Home</Link>
              <Link href="/blog" className="hover:text-blue-200 transition-colors">Blog</Link>
              <Link href="/pricing" className="hover:text-blue-200 transition-colors">Pricing</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center text-white">
          <div className="flex justify-center mb-8">
            <Image
              src="/iso-9001-ai-powered-compliance-auditsready-logo.png"
              alt="AuditsReady Logo"
              width={80}
              height={80}
              className="drop-shadow-lg"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Audit-Ready SOP Compliance for Manufacturing
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-blue-100">
            AI-powered Gap Detection • Pass Every Audit
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-blue-100 leading-relaxed">
            Our smart system automatically finds missing procedures and transforms your documentation 
            into professional, audit-ready formats. Personal service meets proven technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Book Free Call
            </button>
            <PhoneReveal
              buttonStyle="inline-block border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
              buttonText="📞 Call Us Today"
            />
          </div>
          <p className="text-sm text-blue-200 mt-4">
            📞 Free 15-minute call • 🚀 Same-day response • ✓ No obligation
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
              Simple 3-step process to audit-ready compliance
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
              <p className="text-gray-600">Email your existing SOPs, handwritten notes, or Word docs. Any format works.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Analysis</h3>
              <p className="text-gray-600">Our AI scans for gaps, maps to ISO 9001 requirements, and identifies missing procedures.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Audit-Ready SOPs</h3>
              <p className="text-gray-600">Receive professional, P.Eng validated, audit-ready documentation in days, not months.</p>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border-2 border-green-200 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-4xl">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900">Professional Engineer Validated</h3>
            </div>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Every gap analysis is reviewed by a licensed Professional Engineer (P.Eng) with ISO 9001
              audit experience. You get AI speed with expert validation.
            </p>
            <div className="mt-6 flex items-center justify-center gap-8 text-sm text-gray-600">
              <div>✓ P.Eng Certified</div>
              <div>✓ ISO 9001 Expert</div>
              <div>✓ 10+ Years Experience</div>
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

        {/* AI-Powered Features Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Beyond Traditional Tools
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Artificial intelligence meets personal service for truly smart compliance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced AI Backend</h3>
              <p className="text-gray-700">
                Enterprise-grade artificial intelligence identifies patterns
                and optimizes your documentation automatically.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
              <div className="text-5xl mb-6">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Gap Detection</h3>
              <p className="text-gray-700">
                AI scans your SOPs and automatically finds missing procedures,
                compliance gaps, and areas needing improvement.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Assistance</h3>
              <p className="text-gray-700">
                AI-powered suggestions help you create compliant documentation
                faster than any traditional tool or manual process.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  AI Finds What Others Miss
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  While traditional consultants rely on manual reviews, our AI-powered platform
                  instantly analyzes your entire documentation ecosystem to identify gaps,
                  inconsistencies, and compliance risks—then generates ISO 9001-compliant SOPs
                  to fill those gaps.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-700">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <strong>Automated Gap Analysis:</strong> AI scans every procedure for missing steps
                    </div>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <strong>Smart Compliance Mapping:</strong> Links SOPs to ISO requirements automatically
                    </div>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <strong>Continuous Learning:</strong> Gets smarter with every document processed
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-8 text-center">
                <div className="text-6xl mb-4">🧠</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Intelligence</h4>
                <p className="text-gray-600">Advanced algorithms that understand compliance like an expert auditor</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-12 border border-blue-100">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Built for Every Manufacturing Business
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                From small job shops to large production facilities, our AI-powered compliance platform serves
                <strong> any kind of manufacturing industry</strong> seeking ISO 9001 certification.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4 text-center">🏭</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">All Industries Welcome</h3>
                <p className="text-gray-600 text-sm text-center">
                  Whether you're in automotive, aerospace, electronics, food processing, consumer products, textiles, plastics, or any manufacturing sector
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4 text-center">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Any Company Size</h3>
                <p className="text-gray-600 text-sm text-center">
                  From 5-person job shops to 500-employee facilities - our solution scales to your needs
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4 text-center">🌍</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Global Reach</h3>
                <p className="text-gray-600 text-sm text-center">
                  Serving manufacturers worldwide - North America, Europe, Asia, and beyond
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-700 text-lg font-semibold">
                No matter what you make, we help you get audit-ready
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Professional ISO 9001 Compliance — Starting at $1,500
              </h2>
              <p className="text-xl text-blue-100">
                Save 70-85% vs traditional consultants | One-time packages or monthly subscriptions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                "AI processes any format: Word, PDF, handwritten notes",
                "Intelligent gap detection and compliance mapping",
                "Personal consultation combined with AI insights"
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-blue-100">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-xl mb-8 text-blue-100">
                <strong>Transparent pricing. No hidden fees. Book a free call or view detailed pricing.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/pricing"
                  className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  📋 View Detailed Pricing
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Book Free Call
                </button>
              </div>
              <p className="text-sm text-blue-200 mt-4">
                📞 Free 15-minute call • 🚀 Same-day response • ✓ No obligation
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
                <p>🌎 Serving North America & Beyond</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>AI-Powered Gap Analysis</li>
                <li>SOP Document Conversion</li>
                <li>Audit Preparation</li>
                <li>P.Eng Validated Consulting</li>
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
              &copy; 2025 AuditsReady. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Professional Engineer (P.Eng) Validated | Where artificial intelligence meets manufacturing excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
