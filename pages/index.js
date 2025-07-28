
import Head from 'next/head'
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
        <title>AuditsReady – AI-Powered Factory Compliance</title>
        <meta name="description" content="AI-powered SOP compliance platform with intelligent backend. Automatically finds gaps and transforms documentation with intelligent assistance." />
      </Head>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center text-white">
          <div className="flex justify-center mb-8">
            <img 
              src="/auditsready-logo.png" 
              alt="AuditsReady Logo" 
              className="h-20 w-auto drop-shadow-lg"
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
              { icon: "🍎", title: "Food Processing", desc: "HACCP gap analysis & AI-powered compliance" },
              { icon: "📦", title: "Packaging", desc: "Smart quality control optimization" },
              { icon: "🏗️", title: "Building Materials", desc: "Automated ISO 9001 mapping" },
              { icon: "⚙️", title: "Manufacturing", desc: "Custom AI solutions for any process" }
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
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6">
            <img 
              src="/auditsready-logo.png" 
              alt="AuditsReady Logo" 
              className="h-12 w-auto mx-auto opacity-80"
            />
          </div>
          <p className="text-lg mb-2">
            🤖 AI-Powered SOP Compliance Experts
          </p>
          <p className="text-sm mb-4">
            📧 info@auditsready.com • <PhoneDisplay />
          </p>
          <p className="text-sm">
            &copy; 2025 AuditsReady. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Where artificial intelligence meets manufacturing excellence.
          </p>
        </div>
      </footer>
    </div>
  )
}
