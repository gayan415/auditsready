
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

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

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <Head>
        <title>AI-Powered ISO 9001 Gap Analysis | Audit-Ready SOP Compliance | AuditsReady</title>
        <meta name="description" content="AI-powered ISO 9001 compliance service for manufacturers worldwide. Expert gap analysis, SOP conversion, and audit preparation. P.Eng validated. Turn handwritten procedures into audit-ready documentation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AuditsReady" />
        <meta name="keywords" content="ISO 9001 gap analysis, ISO 9001 consultant, SOP compliance, manufacturing audit preparation, ISO certification service, quality management system, audit-ready documentation, SOP conversion" />
        <link rel="canonical" href="https://auditsready.com" />

        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="AI-Powered ISO 9001 Gap Analysis | Audit-Ready SOP Compliance" />
        <meta property="og:description" content="AI-powered ISO 9001 compliance service for manufacturers. Expert gap analysis, SOP conversion, and audit preparation. P.Eng validated." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://auditsready.com" />
        <meta property="og:image" content="https://auditsready.com/auditsready-logo.png" />
        <meta property="og:site_name" content="AuditsReady" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Powered ISO 9001 Gap Analysis | Audit-Ready SOP Compliance" />
        <meta name="twitter:description" content="AI-powered ISO 9001 compliance service for manufacturers. Expert gap analysis & audit preparation worldwide." />
        <meta name="twitter:image" content="https://auditsready.com/auditsready-logo.png" />

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "AuditsReady",
              "description": "AI-powered ISO 9001 compliance and SOP gap analysis service for manufacturers worldwide. P.Eng validated audit preparation.",
              "url": "https://auditsready.com",
              "logo": "https://auditsready.com/auditsready-logo.png",
              "image": "https://auditsready.com/auditsready-logo.png",
              "telephone": "+1-403-404-4643",
              "email": "info@auditsready.com",
              "priceRange": "$$",
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "United States"
                },
                {
                  "@type": "Country",
                  "name": "Canada"
                },
                {
                  "@type": "Country",
                  "name": "Mexico"
                }
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
              "provider": {
                "@type": "Organization",
                "name": "AuditsReady",
                "url": "https://auditsready.com"
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "United States"
                },
                {
                  "@type": "Country",
                  "name": "Canada"
                },
                {
                  "@type": "Country",
                  "name": "Mexico"
                }
              ],
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
      </Head>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center text-white">
          <div className="flex justify-center mb-8">
            <Image
              src="/auditsready-logo.png"
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
            <a 
              href="mailto:info@auditsready.com" 
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              See How It Works
            </a>
            <PhoneReveal 
              buttonStyle="inline-block border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
              buttonText="📞 Call Us Today"
            />
          </div>
          <p className="text-sm text-blue-200 mt-4">
            🤖 Powered by Advanced AI • 🔍 Intelligent Gap Detection • 🏆 Audit-Ready Results
          </p>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-300 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </header>

      <main className="max-w-7xl mx-auto py-20 px-6">
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
                  inconsistencies, and compliance risks you never knew existed.
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Transform
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🍺", title: "Craft Breweries", desc: "Quality consistency & export compliance" },
              { icon: "🛢️", title: "Oilfield Services", desc: "Fabrication & equipment ISO 9001" },
              { icon: "🥩", title: "Food Processing", desc: "HACCP & ISO compliance made simple" },
              { icon: "🏗️", title: "Metal Fabrication", desc: "Structural steel & custom work certification" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Early Adopter Pricing Available
              </h2>
              <p className="text-xl text-blue-100">
                No two factories are the same — and neither are their SOPs
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
                <strong>See how AI transforms your compliance process — free demonstration included.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:info@auditsready.com" 
                  className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  🤖 Book AI Demo
                </a>
                <PhoneReveal 
                  buttonStyle="inline-block bg-white text-blue-900 px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  buttonText="📞 Speak to Experts"
                />
              </div>
              <p className="text-sm text-blue-200 mt-4">
                Free AI analysis • Same-day response • Personal consultation
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <Image
                src="/auditsready-logo.png"
                alt="AuditsReady Logo"
                width={48}
                height={48}
                className="mb-4 opacity-80"
              />
              <p className="text-sm text-gray-400">
                AI-Powered ISO 9001 Compliance & SOP Gap Analysis for Manufacturers Worldwide
              </p>
            </div>

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
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
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
