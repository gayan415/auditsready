import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function ISO9001MetalFabPost() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <Head>
        <title>ISO 9001 for Metal Fabrication Shops: Complete Guide (2025) | AuditsReady</title>
        <meta name="description" content="ISO 9001 certification guide for metal fabrication and job shops: welding specs (WPS/PQR), material traceability, CWB integration, customer requirements, costs ($55k-$120k), and common audit failures." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="iso 9001 metal fabrication, iso 9001 job shop, welding quality management, metal fab certification, cwb and iso 9001" />
        <link rel="canonical" href="https://auditsready.com/blog/iso-9001-for-metal-fabrication" />

        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="ISO 9001 for Metal Fabrication: Complete Certification Guide" />
        <meta property="og:description" content="Everything metal fab shops need about ISO 9001: welding documentation, material traceability, CWB integration, customer requirements, and real job shop examples." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://auditsready.com/blog/iso-9001-for-metal-fabrication" />
        <meta property="og:image" content="https://auditsready.com/iso-9001-ai-powered-compliance-auditsready-logo.png" />

        {/* Favicon and Icons */}
        <link rel="icon" href="/iso-9001-auditsready-favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/iso-9001-auditsready-favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/iso-9001-auditsready-app-icon.png" />

        {/* Structured Data - Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "ISO 9001 for Metal Fabrication Shops: Complete Guide (2025)",
              "description": "Comprehensive guide for metal fabrication shops seeking ISO 9001 certification including welding documentation, material traceability, CWB integration, and case studies.",
              "author": {
                "@type": "Organization",
                "name": "AuditsReady"
              },
              "publisher": {
                "@type": "Organization",
                "name": "AuditsReady",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://auditsready.com/iso-9001-ai-powered-compliance-auditsready-logo.png"
                }
              },
              "datePublished": "2025-10-07",
              "dateModified": "2025-10-07",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://auditsready.com/blog/iso-9001-for-metal-fabrication"
              }
            })
          }}
        />
      </Head>

      {/* Header */}
      <header className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Link href="/" className="inline-flex items-center gap-3 mb-8 text-white hover:text-blue-200 transition-colors">
            <Image
              src="/iso-9001-ai-powered-compliance-auditsready-logo.png"
              alt="AuditsReady Logo"
              width={48}
              height={48}
              className="drop-shadow-lg"
            />
            <span className="text-xl font-semibold">AuditsReady</span>
          </Link>
          <div className="flex items-center gap-4 mb-6 text-sm text-blue-200">
            <span className="bg-blue-800 px-3 py-1 rounded-full">ISO 9001 Compliance</span>
            <time dateTime="2025-10-07">October 7, 2025</time>
            <span>•</span>
            <span>14 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            ISO 9001 for Metal Fabrication Shops: Complete Guide (2025)
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-6">
        <article className="bg-white rounded-2xl shadow-xl p-8 md:p-12 prose prose-lg max-w-none">

          {/* Hook */}
          <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-blue-500 pl-6 mb-8 italic">
            Your biggest customer just sent an RFQ addendum: <em>"Suppliers must be ISO 9001:2015 certified. No exceptions."</em> You've been welding, cutting, and bending steel for 20 years. Your welds pass X-ray. Your CWB certification is current. But now they want ISO 9001? <strong>Here's why every serious metal fabrication shop is getting ISO 9001</strong>—and how it's different (and easier) than you think when you already have welding procedures documented.
          </p>

          {/* Quick Answer Box */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-8 mb-8 border-2 border-gray-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Metal Fab Shops Need ISO 9001</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                <div className="text-4xl mb-3 text-center">🏗️</div>
                <h3 className="text-lg font-bold text-blue-900 mb-3 text-center">OEM Requirements</h3>
                <p className="text-sm text-gray-700">
                  Major manufacturers (automotive, aerospace, construction equipment, oilfield) require ISO 9001 from all metal fabrication suppliers. It's mandatory for bid consideration.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-green-200">
                <div className="text-4xl mb-3 text-center">🔩</div>
                <h3 className="text-lg font-bold text-green-900 mb-3 text-center">Contract Specs</h3>
                <p className="text-sm text-gray-700">
                  Government contracts, structural steel projects, and pressure vessel work increasingly specify "ISO 9001 certified fabricator" in RFQs and specifications.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: The Reality */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Reality: Why Every Serious Fab Shop Gets ISO 9001</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Twenty years ago, ISO 9001 was rare for job shops. Today, if you're bidding on work over $100k or supplying OEMs, <strong>ISO 9001 is table stakes</strong>.
            Here's what changed:
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-900 mb-3">1. OEM Supplier Requirements</h3>
              <p className="text-gray-700 mb-4 text-sm">
                <strong>Automotive, aerospace, heavy equipment, mining, oil & gas</strong>—all require ISO 9001 from tier suppliers.
                Even if you're a sub-tier supplier (making parts for someone who supplies OEMs), they'll push ISO 9001 down the supply chain to you.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-900 mb-2">Who's Asking:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Automotive:</strong> GM, Ford, Toyota, Tesla (ISO 9001 or IATF 16949 required)</li>
                  <li>• <strong>Aerospace:</strong> Boeing, Airbus, Lockheed (AS9100 required, which includes ISO 9001)</li>
                  <li>• <strong>Construction Equipment:</strong> Caterpillar, Komatsu, John Deere</li>
                  <li>• <strong>Oil & Gas:</strong> Major operators and EPC contractors</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-orange-900 mb-3">2. Government & Infrastructure Projects</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Federal, state, and municipal infrastructure projects increasingly specify ISO 9001 certified fabricators—especially for bridges, buildings, and transit projects.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-700 italic">
                  <strong>Example:</strong> City transit authority RFQ for steel canopy fabrication: "Fabricator must be ISO 9001:2015 certified and provide CWB Division 2.1
                  welding procedures. Non-certified bidders will be disqualified."
                </p>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-900 mb-3">3. Competitive Advantage</h3>
              <p className="text-gray-700 text-sm">
                When 5 job shops bid on the same structural steel package, the one with ISO 9001 wins—even at a slightly higher price.
                It signals reliability, documented processes, and lower risk to the buyer.
              </p>
            </div>
          </div>

          {/* Section 2: CWB Integration */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Good News: CWB Certification = 60% of ISO 9001 Already Done</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            If you're <strong>CWB certified</strong> (Canadian Welding Bureau Division 1, 2, or 3), you already have the hardest part of ISO 9001 completed.
            CWB and ISO 9001 overlap significantly:
          </p>

          <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 mb-8 border-l-4 border-gray-500">
            <h3 className="text-xl font-bold text-gray-900 mb-6">CWB vs ISO 9001 for Fab Shops:</h3>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
                <h4 className="font-bold text-gray-900 mb-3">What CWB Covers (Welding Quality):</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Welding Procedure Specifications (WPS) documented and qualified</li>
                  <li>• Procedure Qualification Records (PQR) with test results</li>
                  <li>• Welder qualifications and certifications</li>
                  <li>• Welding inspection and non-destructive testing</li>
                  <li>• Corrective action for weld defects</li>
                  <li>• Document control for welding procedures</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
                <h4 className="font-bold text-blue-900 mb-3">What ISO 9001 Adds (Full Quality System):</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Beyond welding:</strong> Cutting, forming, machining, painting, assembly</li>
                  <li>• Customer order review (can we make it? do we have capacity?)</li>
                  <li>• Supplier control (steel suppliers, consumables, subcontractors)</li>
                  <li>• Calibration of measuring equipment (calipers, gauges, CMM)</li>
                  <li>• Customer satisfaction tracking and complaint handling</li>
                  <li>• Management review and continual improvement</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400">
              <p className="text-sm text-green-900">
                <strong>💡 Key Insight:</strong> CWB ensures your welds are good. ISO 9001 ensures everything ELSE is good too—cutting accuracy,
                material traceability, on-time delivery, customer spec compliance. Combined, they cover the complete fabrication process.
              </p>
            </div>
          </div>

          {/* Section 3: Fab Shop Requirements */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">ISO 9001 Requirements for Metal Fab Shops (Plain English)</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Here's what ISO 9001 looks like in a metal fabrication context. If you run a tight shop, you're already doing most of this—you just need to document it.
          </p>

          <div className="space-y-6 mb-8">
            {/* Requirement 1 */}
            <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Material Traceability (ISO 8.5.2)</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <p><strong>What ISO wants:</strong> Ability to trace finished product back to material certifications (mill test reports).</p>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Fab shop translation:</p>
                  <ul className="space-y-1">
                    <li>✓ Steel heat numbers recorded on job travelers</li>
                    <li>✓ Mill test reports (MTRs) filed by heat number</li>
                    <li>✓ Parts stamped or tagged with job number + heat number</li>
                    <li>✓ Can trace from customer complaint → specific weldment → steel heat → supplier</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-3 italic">
                    Example: "Customer reports cracked bracket → Job #45821 → Plate heat #ABC123 → Steel supplier XYZ → MTR shows out-of-spec carbon content"
                  </p>
                </div>
              </div>
            </div>

            {/* Requirement 2 */}
            <div className="bg-gradient-to-r from-orange-50 to-white rounded-xl p-6 border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Work Instructions (ISO 7.5 & 8.5)</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <p><strong>What ISO wants:</strong> Documented instructions for processes where results can't be verified afterward.</p>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Fab shop translation:</p>
                  <ul className="space-y-1">
                    <li>✓ WPS for welding (you have this if CWB certified)</li>
                    <li>✓ Cutting procedures for critical dimensions</li>
                    <li>✓ Forming/bending setup sheets</li>
                    <li>✓ Assembly sequences for complex weldments</li>
                    <li>✓ Inspection procedures (what to check, pass/fail criteria)</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-3 italic">
                    Pro tip: Use photos! A picture of correct setup is worth 500 words. Print and laminate at workstations.
                  </p>
                </div>
              </div>
            </div>

            {/* Requirement 3 */}
            <div className="bg-gradient-to-r from-green-50 to-white rounded-xl p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Equipment Calibration (ISO 7.1.5)</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <p><strong>What ISO wants:</strong> Measuring equipment calibrated with traceable records.</p>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">What needs calibration:</p>
                  <ul className="space-y-1">
                    <li>• Calipers, micrometers, dial indicators</li>
                    <li>• Tape measures over 6 feet (if used for critical dimensions)</li>
                    <li>• Squares, levels, protractors</li>
                    <li>• CMM machines, laser trackers</li>
                    <li>• Welding equipment (voltage/amperage meters)</li>
                    <li>• Torque wrenches</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-3 italic">
                    Frequency: Annually minimum, or per manufacturer recommendation. Use external calibration lab with NIST traceability.
                  </p>
                </div>
              </div>
            </div>

            {/* Requirement 4 */}
            <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">4. Supplier Control (ISO 8.4)</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <p><strong>What ISO wants:</strong> Control quality of steel suppliers, consumables (welding wire/gas), and subcontractors.</p>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Fab shop translation:</p>
                  <ul className="space-y-1">
                    <li>✓ Approved supplier list (which steel suppliers, welding consumable vendors, powder coaters)</li>
                    <li>✓ Verify MTRs on incoming steel (check heat numbers match purchase order)</li>
                    <li>✓ Inspect incoming material (rust, damage, dimensional accuracy)</li>
                    <li>✓ Track supplier performance (late deliveries, wrong material, quality issues)</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-3 italic">
                    Example: "Steel supplier shipped A36 instead of A572 Gr50 on Job #1234 → Non-conformance report → Corrective action: Enhanced PO review process"
                  </p>
                </div>
              </div>
            </div>

            {/* Requirement 5 */}
            <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">5. Nonconforming Product (ISO 8.7)</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <p><strong>What ISO wants:</strong> Document how defective parts are handled (segregate, repair, scrap, or get customer approval).</p>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Fab shop translation:</p>
                  <ul className="space-y-1">
                    <li>✓ Red tag system for rejected parts</li>
                    <li>✓ Segregated area for nonconforming material</li>
                    <li>✓ Rework procedures documented (grind weld, re-weld, repair)</li>
                    <li>✓ Scrap authorization (who can approve scrapping $5k weldment?)</li>
                    <li>✓ Customer approval for deviations ("bolt hole 1/16\" off-location, use-as-is?")</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Requirement 6 */}
            <div className="bg-gradient-to-r from-indigo-50 to-white rounded-xl p-6 border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">6. Job Travelers & Records (ISO 8.1 & 8.6)</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <p><strong>What ISO wants:</strong> Records proving you followed procedures and inspected per requirements.</p>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">What to record:</p>
                  <ul className="space-y-1">
                    <li>✓ Job traveler with all operations signed off (cut, weld, grind, paint)</li>
                    <li>✓ Inspection reports (dimensional checks, visual weld inspection, NDT results)</li>
                    <li>✓ Welder stamps on drawings or travelers</li>
                    <li>✓ Material certifications (MTRs) attached to job packet</li>
                    <li>✓ Final inspection sign-off before shipping</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-3 italic">
                    Retention: Keep job records 7+ years (customer contracts may specify longer). Use digital scanning to save space.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Costs */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What ISO 9001 Costs for a Metal Fab Shop</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Fab shops typically range from small (10-30 employees) to medium (50-100). Here's realistic cost breakdown:
          </p>

          <div className="bg-gradient-to-r from-gray-900 to-slate-900 rounded-xl p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-6">Medium Fab Shop (40 employees, $8M-$15M revenue)</h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-white/20">
                <span className="text-gray-200">Gap analysis:</span>
                <span className="font-semibold text-lg">$12,000 - $25,000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/20">
                <span className="text-gray-200">Documentation (procedures, work instructions):</span>
                <span className="font-semibold text-lg">$15,000 - $35,000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/20">
                <span className="text-gray-200">Training (shop floor + management):</span>
                <span className="font-semibold text-lg">$5,000 - $12,000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/20">
                <span className="text-gray-200">Certification audit:</span>
                <span className="font-semibold text-lg">$8,000 - $18,000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/20">
                <span className="text-gray-200">Equipment calibration (initial):</span>
                <span className="font-semibold text-lg">$3,000 - $8,000</span>
              </div>
              <div className="flex justify-between items-center pt-4">
                <span className="font-bold text-xl">TOTAL FIRST YEAR:</span>
                <span className="font-bold text-2xl text-green-300">$55,000 - $120,000</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/10 backdrop-blur rounded-lg">
              <p className="text-sm text-gray-200">
                <strong>Annual maintenance:</strong> $12k-$22k/year (surveillance audits, calibration, internal audits, system updates)
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500 mb-8">
            <h4 className="font-bold text-blue-900 mb-3">💰 ROI Reality Check:</h4>
            <p className="text-blue-800 text-sm mb-4">
              Yes, $55k-$120k is significant. But consider: One $500k structural steel contract you couldn't bid on without ISO 9001 pays for certification 5x over.
            </p>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold text-gray-900 mb-2">Real Case Study: Alberta Fabrication Shop</p>
              <p className="text-sm text-gray-700">
                <strong>Size:</strong> 35 employees, $10M revenue<br/>
                <strong>Investment:</strong> $72,000 for ISO 9001 certification<br/>
                <strong>Result:</strong> Won 3 new OEM contracts in first year totaling $2.1M. ROI: 29x in Year 1.
              </p>
            </div>
          </div>

          {/* Section 5: Common Failures */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Top 7 ISO 9001 Audit Failures for Fab Shops</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Based on hundreds of fab shop audits, here are the most common reasons shops fail their first certification audit:
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                failure: "Material Traceability Breakdown",
                why: "Heat numbers not recorded on travelers, or MTRs filed but can't match them to specific jobs. Auditor picks random finished part, asks to see MTR—you can't find it.",
                fix: "Implement strict MTR tracking: File by job number, copy attached to each job packet, heat numbers stamped on parts or recorded on traveler."
              },
              {
                failure: "No Calibration Records",
                why: "Shop uses calipers, mics, tape measures for inspection but no calibration records. Auditor asks when tape measure was last calibrated—nobody knows.",
                fix: "Send all measuring tools for external calibration annually. Keep calibration certificates. Label tools with 'Calibrated Until: [date]' stickers."
              },
              {
                failure: "Work Instructions Missing",
                why: "Experienced welders 'just know' how to set up jobs, but nothing documented. New welder wouldn't know critical setup steps.",
                fix: "Document 10-15 key processes: complex weldments, critical bends, special finishes. Use photos + short text. Laminate at workstations."
              },
              {
                failure: "Customer Drawing Revisions Not Controlled",
                why: "Customer sends Rev C drawing via email, welder still using Rev A from last year. Parts built wrong.",
                fix: "Implement document control: Drawings stored centrally (digital), old revisions destroyed/archived, welder acknowledges receiving latest revision."
              },
              {
                failure: "No Internal Audit Before Certification",
                why: "ISO 9001 REQUIRES internal audit before certification audit. Shop skips it, auditor asks to see internal audit report—it doesn't exist. Automatic major nonconformance.",
                fix: "Conduct internal audit 6-8 weeks before certification audit. Use external consultant if nobody internal is trained. Close findings before cert audit."
              },
              {
                failure: "Welder Qualifications Expired",
                why: "Shop has WPS (CWB), but welder's qualification expired 3 months ago. Auditor checks welder certs—discovers expired cert, all welds suspect.",
                fix: "Track welder cert expiration dates. Renewal 30 days before expiry. Don't let welders work on jobs when cert expired."
              },
              {
                failure: "No Corrective Action for Recurring Defects",
                why: "Same weld defect (porosity) found on 5 different jobs over 6 months. Each time, shop grinds out and re-welds. No investigation of WHY it keeps happening.",
                fix: "When defect repeats, investigate root cause. Bad wire batch? Wrong gas flow? Welder technique? Fix the cause, don't just fix the symptom."
              }
            ].map((item, index) => (
              <div key={index} className="bg-red-50 rounded-lg p-6 border-l-4 border-red-400">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="font-bold text-red-900 flex-1">{item.failure}</p>
                </div>
                <p className="text-sm text-red-800 mb-3 ml-11"><strong>Why it fails:</strong> {item.why}</p>
                <p className="text-sm text-red-900 ml-11"><strong>Fix:</strong> {item.fix}</p>
              </div>
            ))}
          </div>

          {/* Section 6: Timeline */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Timeline: How Long to Get Certified?</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border-2 border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-2 text-center">7-10 months</div>
              <p className="text-sm font-semibold text-gray-900 mb-2 text-center">CWB Certified Shops</p>
              <p className="text-xs text-gray-600 text-center">
                You have WPS, welder quals, some documentation. Use AI gap analysis. Dedicated project lead.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2 text-center">10-14 months</div>
              <p className="text-sm font-semibold text-gray-900 mb-2 text-center">Typical Job Shop</p>
              <p className="text-xs text-gray-600 text-center">
                Some procedures, traditional consultant, part-time effort
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-red-200">
              <div className="text-3xl font-bold text-red-600 mb-2 text-center">14-20 months</div>
              <p className="text-sm font-semibold text-gray-900 mb-2 text-center">Starting from Zero</p>
              <p className="text-xs text-gray-600 text-center">
                No documentation, no systems, DIY approach
              </p>
            </div>
          </div>

          {/* Section 7: Is It Worth It? */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Is ISO 9001 Worth It for Your Fab Shop?</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Not every small job shop needs ISO 9001 immediately. Here's the honest breakdown:
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
              <h4 className="font-bold text-green-900 mb-3">✅ You NEED ISO 9001 if:</h4>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• OEM customers are asking for it (or you lost bids because you don't have it)</li>
                <li>• You want to bid on government/infrastructure projects</li>
                <li>• You're doing $5M+ revenue and targeting larger contracts</li>
                <li>• You supply automotive, aerospace, or oil & gas industries</li>
                <li>• You have quality consistency problems (rework, scrap, customer complaints)</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-500">
              <h4 className="font-bold text-yellow-900 mb-3">⏸️ You can WAIT if:</h4>
              <ul className="space-y-2 text-yellow-800 text-sm">
                <li>• You're under $2M revenue doing mostly small local work</li>
                <li>• No customers have asked for ISO 9001 yet</li>
                <li>• You're still building fundamental systems (job tracking, basic inspection)</li>
                <li>• Cash flow doesn't support $60k-$100k investment right now</li>
              </ul>
              <p className="text-sm text-yellow-900 mt-4">
                <strong>Alternative:</strong> Start with CWB certification first (if doing structural steel). Build basic procedures. Add ISO 9001 when business justifies it.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-gray-600 to-slate-600 rounded-2xl p-8 md:p-12 text-center text-white mt-12">
            <h2 className="text-3xl font-bold mb-4">Free CWB + ISO 9001 Integration Analysis</h2>
            <p className="text-xl mb-8">
              CWB certified? You already have 60% of ISO 9001 done. Upload your WPS, PQRs, and job travelers. We'll map them to ISO 9001 and show what's missing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="mailto:info@auditsready.com?subject=Fab%20Shop%20CWB%20Integration%20Analysis"
                className="inline-block bg-white text-gray-700 px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                🔩 Analyze My Fab Shop's CWB Docs
              </a>
              <Link
                href="/blog/iso-9001-certification-cost"
                className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-700 transition-all duration-300"
              >
                📊 See Total Certification Costs
              </Link>
            </div>
            <p className="text-sm text-gray-200">
              CWB integration roadmap • Shows what's missing • WPS mapping to ISO clauses • Free analysis
            </p>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-12 pt-8 border-t-2 border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Related Resources:</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/blog/iso-9001-certification-cost" className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <h4 className="font-bold text-gray-900 mb-2">Complete Cost Breakdown</h4>
                <p className="text-sm text-gray-700 mb-3">Total certification investment: $50k-$150k+ with real company examples.</p>
                <span className="text-blue-600 font-semibold text-sm">Read Guide →</span>
              </Link>
              <Link href="/blog/iso-9001-internal-audit-guide" className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-colors">
                <h4 className="font-bold text-gray-900 mb-2">Internal Audit Guide</h4>
                <p className="text-sm text-gray-700 mb-3">How to conduct effective internal audits before certification.</p>
                <span className="text-purple-600 font-semibold text-sm">Read Article →</span>
              </Link>
            </div>

            <div className="flex justify-between items-center">
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 transition-colors"
              >
                Home
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm">
            &copy; 2025 AuditsReady. All rights reserved. | <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
