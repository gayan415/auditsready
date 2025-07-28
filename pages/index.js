
import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <Head>
        <title>AuditsReady – Factory Compliance Made Simple</title>
        <meta name="description" content="Get your manufacturing SOPs audit-ready with minimal effort. Flexible ISO-aligned documentation, AI-supported, and custom pricing." />
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
            Factory SOP Compliance
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-blue-100">
            Made Simple & Audit-Ready
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-blue-100 leading-relaxed">
            Transform your manufacturing documentation from handwritten SOPs to ISO-aligned, 
            audit-ready procedures with AI-powered assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@auditsready.com" 
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </a>
            <button className="inline-block border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-300 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </header>

      <main className="max-w-7xl mx-auto py-20 px-6">
        {/* What We Do Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help manufacturing operations streamline SOP creation and compliance
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  From Paper to Digital Excellence
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Transform handwritten documentation into ISO audit-ready procedures. 
                  Our platform helps your team digitize, organize, and align with key 
                  standards like ISO 9001 and ISO 22000.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Digitize handwritten SOPs
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    ISO compliance alignment
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    AI-powered documentation
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
                <div className="text-6xl mb-4">📋</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Smart Documentation</h4>
                <p className="text-gray-600">Automated compliance checking and formatting</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for Manufacturers
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🍎", title: "Food Manufacturing", desc: "HACCP & ISO 22000 compliance" },
              { icon: "📦", title: "Packaging", desc: "Quality control procedures" },
              { icon: "🏗️", title: "Building Materials", desc: "ISO 9001 documentation" },
              { icon: "⚙️", title: "General Manufacturing", desc: "Custom SOP solutions" }
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
                Flexible Pricing That Fits
              </h2>
              <p className="text-xl text-blue-100">
                No two factories are the same — and neither are their SOPs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                "SOPs in Word, PDF, or handwritten formats",
                "Support for ISO standards (9001, 22000, etc.)",
                "Document formatting, mapping, and version tracking"
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
                <strong>Contact us for a custom quote and early adopter pricing.</strong>
              </p>
              <a 
                href="mailto:info@auditsready.com" 
                className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Request Custom Quote
              </a>
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
          <p className="text-sm">
            &copy; 2025 AuditsReady. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Making factory compliance simple, one SOP at a time.
          </p>
        </div>
      </footer>
    </div>
  )
}
