import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

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
            <h2 className="text-3xl font-bold text-gray-900">Schedule Your Free Call</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
            >
              ×
            </button>
          </div>

          <p className="text-gray-600 mb-6">
            Fill out the form below and we'll contact you within 24 hours to schedule your free 15-minute consultation.
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
                ✓ We'll contact you within 24 hours to schedule your free 15-minute consultation
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-semibold">✓ Thank you! Your request has been submitted successfully.</p>
                <p className="text-green-700 text-sm mt-1">We'll contact you within 24 hours to schedule your free 15-minute consultation.</p>
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

export default function FAQ() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const faqs = [
    // Section 1: Getting Started
    {
      section: "Getting Started",
      questions: [
        {
          q: "How much does ISO 9001 certification cost for a small manufacturer?",
          a: "For small manufacturers (10-50 employees), total ISO 9001 certification costs typically range from $15,000-$50,000 with traditional consultants:\n\n• Consultant fees: $10k-$30k\n• Certification body fees: $3k-$8k\n• Internal costs: $2k-$12k\n\nWith AuditsReady's AI-powered approach, you can reduce consultant costs to $1,500-$5,000 while maintaining P.Eng validation. The exact cost depends on your current documentation quality, number of processes, and timeline urgency."
        },
        {
          q: "How long does ISO 9001 certification take?",
          a: "Most manufacturers complete ISO 9001 certification in 6-12 months. The timeline includes:\n\n• Gap analysis: 1-2 weeks\n• Documentation development: 2-4 months\n• Implementation: 2-4 months\n• Internal audits: 1 month\n• Certification audit: 1-2 months\n\nWith AuditsReady's AI-powered gap analysis (48-72 hours) and streamlined approach, you can compress this to 3-6 months if you have some existing documentation and dedicated internal resources."
        },
        {
          q: "Can I get ISO 9001 in 3 months?",
          a: "Yes, but only under specific conditions:\n\n• You already have documented processes\n• You have a dedicated quality manager or team\n• Your documentation is mostly compliant with minor gaps\n• You can schedule a certification audit quickly\n\nAuditsReady's AI can identify gaps in 48-72 hours, helping you focus immediately on critical issues. However, rushing certification often leads to failures or major non-conformances. We recommend 6 months as a realistic fast-track timeline for most manufacturers."
        },
        {
          q: "What's the fastest way to get ISO 9001 certified?",
          a: "The fastest path combines:\n\n• AI-powered gap analysis to identify issues immediately (AuditsReady provides this in 48-72 hours)\n• Focus on mandatory documentation only (skip nice-to-have procedures initially)\n• Parallel workflows (develop docs while implementing processes)\n• Dedicated internal champion (quality manager or owner commitment)\n• Pre-audit with consultant before official certification audit\n\nAvoid shortcuts like generic templates or skipping implementation—these lead to audit failures and delays."
        },
        {
          q: "What are the 10 clauses of ISO 9001:2015?",
          a: "ISO 9001:2015 has 10 clauses, but only Clauses 4-10 have requirements:\n\n• Clause 4: Context of the Organization\n• Clause 5: Leadership\n• Clause 6: Planning\n• Clause 7: Support\n• Clause 8: Operation\n• Clause 9: Performance Evaluation\n• Clause 10: Improvement\n\nClauses 1-3 are introductory (Scope, References, Terms). Each clause has sub-requirements—for example, Clause 7 (Support) includes training, infrastructure, and document control.",
          link: { text: "Read our comprehensive guide on ISO 9001 requirements", url: "https://auditsready.com/blog/iso-9001-requirements" }
        },
        {
          q: "What documents are required for ISO 9001?",
          a: "ISO 9001:2015 requires 6 mandatory documented procedures:\n\n• Control of documents\n• Control of records\n• Internal audits\n• Control of nonconforming outputs\n• Corrective action\n• Management review\n\nYou also need: Quality Policy, Quality Objectives, Scope of QMS, and supporting evidence (training records, audit reports, etc.). Most manufacturers need 20-40 additional procedures (SOPs) to cover operational processes. AuditsReady's gap analysis identifies exactly which documents you're missing."
        },
        {
          q: "Do I need an internal auditor for ISO 9001?",
          a: "Yes, ISO 9001 Clause 9.2 requires internal audits at planned intervals. You need someone trained in auditing (doesn't have to be full-time or certified), and they must be independent of the process they're auditing.\n\nSmall manufacturers often:\n• Train an existing employee (quality manager, production supervisor)\n• Hire external auditor on contract\n• Cross-train multiple people to audit each other's areas\n\nInternal auditor training courses cost $500-$2,000 and take 2-3 days. Download our ISO 9001 Internal Audit Guide for a step-by-step approach."
        },
        {
          q: "Is ISO 9001 too complicated for a small business?",
          a: "No, ISO 9001 is scalable to any company size. The standard doesn't dictate how much documentation you need—a 5-person job shop can have simpler procedures than a 500-person factory. The key is documenting what you actually do, not creating bureaucracy. Many small manufacturers think ISO 9001 means endless paperwork, but modern approaches (like AuditsReady's AI-powered gap analysis) simplify compliance. Focus on the 20% of processes that drive 80% of your quality, and scale documentation to your actual complexity."
        },
        {
          q: "What happens if I fail my ISO 9001 audit?",
          a: "You rarely \"fail\" outright. Audits result in:\n\n• Minor non-conformances (common, 30-day fix, no re-audit fee)\n• Major non-conformances (significant gap, 3-6 month fix, requires follow-up audit with fees)\n• Recommendation to delay (rare, means you're not ready)\n\nMost first-time audits have 5-15 minor findings. If you get majors, you fix them and schedule a follow-up audit ($1,000-$3,000 fee). Complete failures are rare and usually mean you didn't implement your documented processes. AuditsReady's gap analysis helps prevent surprises by identifying issues before the audit."
        }
      ]
    },

    // Section 2: Cost & Pricing
    {
      section: "Cost & Pricing",
      questions: [
        {
          q: "Can I get ISO 9001 certified without a consultant?",
          a: "Yes, but it's challenging and time-consuming. DIY certification works if:\n\n• You have strong internal expertise (quality manager with ISO experience)\n• You can commit 200-500 hours to documentation\n• You understand audit requirements\n• You have good existing processes\n\nMost small manufacturers struggle with interpretation of requirements and audit preparation. AuditsReady offers a middle path: AI-powered gap analysis ($1,500-$5,000) gives you the roadmap, and you do the implementation work. This saves 60-80% vs. full consultant fees while avoiding DIY pitfalls."
        },
        {
          q: "Is ISO 9001 worth the cost?",
          a: "For most manufacturers, yes. ROI comes from:\n\n• Customer requirements (many contracts require ISO 9001)\n• Reduced defects (10-30% quality improvement typical)\n• Operational efficiency (streamlined processes save 5-15% in costs)\n• Competitive advantage (preferred supplier status)\n• Better employee training\n\nBreak-even is typically 12-24 months. If you're losing contracts due to lack of certification, ROI is immediate. If you're pursuing certification for internal improvement only, calculate savings from reduced rework, scrap, and customer complaints. For small manufacturers with tight margins, AI-powered consulting (like AuditsReady) reduces upfront costs from $15k-$50k to $1,500-$5,000, improving ROI significantly."
        },
        {
          q: "How much does an ISO 9001 consultant charge?",
          a: "Traditional ISO 9001 consultants charge $125-$250/hour or $10,000-$50,000 per project, depending on company size and complexity.\n\nTypical breakdown:\n• Small manufacturer (10-50 employees) = $15k-$25k\n• Mid-size (50-200 employees) = $25k-$40k\n• Large (200+ employees) = $40k-$100k+\n\nThese fees cover gap analysis, documentation, training, and audit preparation. AuditsReady uses AI to reduce costs to $1,500-$5,000 for gap analysis and recommendations, with optional ongoing support. You save 70-85% by doing implementation yourself with AI guidance."
        }
      ]
    },

    // Section 3: Process & Requirements
    {
      section: "Process & Requirements",
      questions: [
        {
          q: "Can a manufacturing company get ISO 9001 without a quality manager?",
          a: "Yes, ISO 9001 doesn't mandate a \"Quality Manager\" title. However, Clause 5.3 requires assigning responsibility and authority for quality-related roles. In small companies, the owner or operations manager often handles this (5-10 hours/week). The key responsibilities: oversee documentation, conduct internal audits, manage corrective actions, and report to management. You can outsource some tasks (like internal audits) or use AI tools (like AuditsReady) to reduce workload. For very small manufacturers (under 20 employees), the quality role is typically 10-20% of someone's time, not a full-time position."
        },
        {
          q: "Who certifies ISO 9001 compliance?",
          a: "Accredited certification bodies (also called registrars) conduct audits and issue ISO 9001 certificates. These are independent third-party organizations like BSI, TUV, SGS, Intertek, LRQA, and others. They must be accredited by national bodies (like ANAB in the USA or UKAS in the UK) to ensure credibility. Important: Consultants like AuditsReady prepare you for certification but do not certify you. We help with gap analysis, documentation, and audit preparation. Once you're ready, you hire a certification body for the official audit ($3,000-$8,000 for initial certification)."
        },
        {
          q: "How do I choose an ISO 9001 certification body?",
          a: "Consider these factors:\n\n• Accreditation (verify on IAF or ANAB website)\n• Industry expertise (some specialize in automotive, aerospace, food, etc.)\n• Geographic coverage (important for multi-site certifications)\n• Cost ($3k-$8k typical for small manufacturers)\n• Reputation (ask for references)\n• Audit scheduling (some have 6-month waitlists)\n\nMany manufacturers choose bodies their customers recognize (e.g., aerospace prefers AS9100-accredited bodies). AuditsReady helps you get audit-ready regardless of which certification body you choose. We recommend getting quotes from 3-5 bodies before deciding."
        },
        {
          q: "What's a surveillance audit for ISO 9001?",
          a: "After initial certification, certification bodies conduct annual surveillance audits (also called maintenance audits) to verify you're maintaining compliance. These are shorter (1-2 days vs. 3-5 days for initial audit) and less expensive ($1,500-$3,000). They sample different processes each year to ensure ongoing conformance. Your certificate is valid for 3 years, with surveillance audits in Years 1 and 2, then a full recertification audit in Year 3. Surveillance audits typically find 0-5 minor non-conformances. AuditsReady's ongoing compliance support (coming in Phase 2) helps you prepare year-round."
        },
        {
          q: "How often do I need to renew ISO 9001 certification?",
          a: "ISO 9001 certificates are valid for 3 years. The renewal cycle includes: Year 1 - surveillance audit, Year 2 - surveillance audit, Year 3 - recertification audit (full re-audit). After Year 3, you get a new 3-year certificate and the cycle repeats. You cannot skip surveillance audits—missing one can result in certificate suspension. Recertification audits are similar in scope to initial audits (3-5 days) and cost $3,000-$8,000. Many manufacturers find Years 2-3 easier than Year 1 because processes are established. Plan for ongoing costs: $2,000-$4,000/year in audit fees plus internal time."
        },
        {
          q: "Can I lose ISO 9001 certification?",
          a: "Yes, for several reasons:\n\n• Missing surveillance audits (certificate suspended after 6 months)\n• Major non-conformances not corrected within deadline (certificate withdrawn)\n• Failure to implement corrective actions from previous audits\n• Organizational changes not reported to certification body (mergers, new sites, scope changes)\n• Customer complaints revealing systemic quality failures\n\nLosing certification means starting over with initial certification (full audit + fees). To maintain certification: conduct internal audits quarterly, address non-conformances promptly, keep documentation current, and prepare for surveillance audits. AuditsReady's AI can help you stay compliant year-round (Phase 2 offering)."
        }
      ]
    },

    // Section 4: Industry-Specific
    {
      section: "Industry-Specific Questions",
      questions: [
        {
          q: "Is ISO 9001 required for aerospace suppliers?",
          a: "ISO 9001 alone is rarely sufficient for aerospace. Most aerospace customers (Boeing, Airbus, defense contractors) require AS9100, which is ISO 9001 plus aerospace-specific requirements. AS9100 includes additional clauses for configuration management, first article inspection, and critical items control. However, ISO 9001 is the foundation—you must understand ISO 9001 before attempting AS9100. Some lower-tier aerospace suppliers (fasteners, packaging, non-critical components) may only need ISO 9001. Check your customer contracts. AuditsReady helps with ISO 9001 gap analysis; for AS9100, you'll need specialized aerospace consultants."
        },
        {
          q: "Do craft breweries need ISO 9001?",
          a: "Not required by law, but increasingly valuable for:\n\n• Distribution contracts (some large distributors prefer ISO 9001)\n• Export opportunities (international buyers trust certified breweries)\n• Food safety integration (complements HACCP and SQF)\n• Consistency at scale (breweries growing from 5,000 to 50,000 barrels/year benefit)\n\nISO 9001 helps document brewing recipes, sanitation procedures, quality checks, and traceability—critical for consistency. For craft breweries under 10,000 barrels/year, focus on HACCP first. Above 20,000 barrels or targeting export markets, ISO 9001 becomes worthwhile. Read our comprehensive guide: ISO 9001 for Craft Breweries."
        },
        {
          q: "Can a job shop get ISO 9001 certified?",
          a: "Absolutely! Job shops (low-volume, high-mix manufacturers) are perfect candidates for ISO 9001. The standard doesn't require mass production—it focuses on consistent processes regardless of volume.\n\nKey benefits for job shops:\n\n• Documented quoting and order review (reduces errors)\n• Controlled engineering changes (critical for custom work)\n• Inspection and testing procedures (catch defects early)\n• Traceability (prove which batch of material was used)\n• Customer communication (manage expectations)\n\nMany job shops win contracts they'd otherwise lose due to lack of ISO 9001. Small job shops (5-20 employees) can certify with simplified documentation. AuditsReady specializes in small manufacturers—our AI adapts gap analysis to job shop workflows."
        },
        {
          q: "Do I need ISO 9001 if I already have IATF 16949?",
          a: "No—IATF 16949 (automotive quality standard) includes all ISO 9001 requirements plus automotive-specific additions. IATF 16949 is built on ISO 9001:2015 as the foundation. If you're certified to IATF 16949, you automatically meet ISO 9001 (though your certificate will say IATF 16949, not ISO 9001). However, some non-automotive customers may not recognize IATF 16949 and specifically ask for ISO 9001. In that case, explain that IATF exceeds ISO 9001. Most certification bodies can issue a separate ISO 9001 certificate if needed (minor additional cost). Bottom line: IATF 16949 = ISO 9001 + automotive extras."
        }
      ]
    },

    // Section 5: AI & Technology
    {
      section: "AI & Technology",
      questions: [
        {
          q: "Can AI help with ISO 9001 compliance?",
          a: "Yes! AI excels at:\n\n• Gap analysis (scanning your documents to identify missing requirements in 48-72 hours vs. 2-4 weeks manually)\n• Documentation generation (creating first-draft SOPs based on your inputs)\n• Audit preparation (predicting likely audit findings)\n• Continuous monitoring (future capability—AI tracking non-conformances and corrective actions)\n\nAuditsReady combines AI-powered gap detection with P.Eng (Professional Engineer) validation to ensure accuracy. AI alone isn't enough—you need expert review to catch nuances auditors care about. Our hybrid model gives you speed of AI plus credibility of professional validation. AI reduces consultant costs by 70-85% while maintaining quality."
        },
        {
          q: "Is AI-generated ISO 9001 documentation acceptable to auditors?",
          a: "Yes, if it accurately reflects your processes and meets ISO 9001 requirements. Auditors don't care how documentation was created—they care about:\n\n• Does it meet the standard?\n• Is it implemented (do employees follow it)?\n• Is there evidence of effectiveness?\n\nAI-generated SOPs must be reviewed by a qualified professional (like AuditsReady's P.Eng validation) and customized to your actual processes. Generic AI content that doesn't match reality will fail audits. Think of AI as a drafting assistant: it creates the structure, you add specifics, a professional validates compliance, and your team implements. Many manufacturers now use AI tools for documentation—it's becoming standard practice."
        },
        {
          q: "What's better: hiring a consultant or using software for ISO 9001?",
          a: "Neither extreme is ideal—a hybrid approach works best. Traditional consultants ($15k-$50k) provide expertise but are expensive and slow. Software-only tools ($500-$5,000) are fast and cheap but require you to interpret ISO 9001, risking gaps.\n\nAuditsReady's hybrid model combines:\n• AI for speed and cost savings (gap analysis in 48-72 hours)\n• P.Eng validation for accuracy and credibility\n• Your implementation for cost control (you do the work, AI guides you)\n\nThis gives you 70-85% cost savings vs. full consultants while avoiding DIY mistakes. Choose based on your internal expertise: strong quality team = software-only, no expertise = full consultant, some capability = hybrid (AuditsReady)."
        }
      ]
    },

    // Section 6: Additional Questions
    {
      section: "Common Concerns",
      questions: [
        {
          q: "Where can I find ISO 9001 consultants near me?",
          a: "While local consultants exist, location matters less for ISO 9001 consulting than you think. Modern consulting is remote-first (COVID proved this)—most documentation, training, and audit prep happens via email, video calls, and document sharing.\n\nLocal consultants charge premium rates ($150-$300/hour) due to travel time and limited competition. Remote consultants (like AuditsReady) offer 50-70% cost savings without sacrificing quality.\n\nThat said, if you prefer on-site visits: search \"ISO 9001 consultant [your city]\" or check ASQC, ASQ, or LinkedIn. For most small manufacturers, remote AI-powered consulting delivers faster results at lower cost. AuditsReady serves manufacturers worldwide—location doesn't limit our service quality."
        },
        {
          q: "Do I need an on-site consultant for ISO 9001?",
          a: "No, not for most manufacturers. On-site consulting was standard 10-20 years ago, but modern approaches work remotely:\n\n• Document sharing via email/cloud storage\n• Video calls for training and Q&A\n• Screen sharing for process walkthroughs\n• Online collaboration tools for SOP development\n\nOn-site visits add $2,000-$10,000 in travel costs with minimal benefit for small manufacturers.\n\nReserve on-site consulting for:\n\n• Complex multi-site operations\n• Highly visual processes (assembly lines, robotics)\n• Initial audit preparation walkthrough\n\nFor gap analysis and documentation (AuditsReady's core service), remote delivery is faster, cheaper, and equally effective. We offer optional on-site visits for premium customers if needed."
        },
        {
          q: "What's the difference between ISO 9001 and ISO 9002?",
          a: "ISO 9002 no longer exists—it was retired in 2000. The old structure had: ISO 9001 (design + production), ISO 9002 (production only, no design), and ISO 9003 (inspection only). In 2000, ISO merged these into a single ISO 9001 standard that scales to your scope. If you don't design products (you manufacture to customer specs), you simply exclude Clause 8.3 (Design) from your scope—this is allowed by ISO 9001:2015 Clause 4.3. Your certificate will note the exclusion: \"ISO 9001:2015 certified, excluding design and development.\" This is common for job shops, contract manufacturers, and distributors. If someone mentions ISO 9002 today, they're outdated—gently correct them that ISO 9001 is the current standard."
        }
      ]
    }
  ]

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(section =>
      section.questions.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Head>
        <title>ISO 9001 FAQ: 28 Questions Answered by Experts | AuditsReady</title>
        <meta name="description" content="Get answers to the 28 most common ISO 9001 questions about cost, timeline, requirements, and certification. Free advice from P.Eng validated consultants." />
        <meta name="keywords" content="iso 9001 faq, iso 9001 questions, iso 9001 cost, iso 9001 requirements, iso certification questions, iso 9001 timeline" />
        <meta name="robots" content="index, follow" />

        {/* OpenGraph */}
        <meta property="og:title" content="ISO 9001 FAQ: 28 Questions Answered by Experts" />
        <meta property="og:description" content="Get expert answers to common ISO 9001 questions about cost, timeline, and certification requirements." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://auditsready.com/faq" />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">ISO 9001 Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600 mb-8">
          Get expert answers to the most common questions about ISO 9001 certification, cost, requirements,
          and implementation. All answers validated by Professional Engineers (P.Eng) with ISO audit experience.
        </p>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Still have questions?</h3>
              <p className="text-gray-700">Book a free 15-minute consultation with our ISO experts</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Book Free Call
            </button>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quick Navigation</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {faqs.map((section, idx) => (
              <a
                key={idx}
                href={`#section-${idx}`}
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                {section.section} ({section.questions.length} questions)
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Sections */}
        {faqs.map((section, sectionIdx) => (
          <div key={sectionIdx} id={`section-${sectionIdx}`} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-500">
              {section.section}
            </h2>

            <div className="space-y-8">
              {section.questions.map((faq, qIdx) => (
                <div key={qIdx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {faq.a}
                  </p>
                  {faq.link && (
                    <p className="mt-4">
                      <Link href={faq.link.url} className="text-blue-600 hover:text-blue-800 hover:underline font-semibold">
                        {faq.link.text} →
                      </Link>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl shadow-2xl p-8 text-white text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started with ISO 9001?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Get AI-powered gap analysis in 48-72 hours. P.Eng validated. Starting at $1,500.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Book Free Call
            </button>
            <Link href="/pricing" className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              View Pricing
            </Link>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            📞 Free 15-minute call • 🚀 Same-day response • ✓ No obligation
          </p>
        </div>

        {/* Related Resources */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/iso-9001-certification-cost" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              → Complete ISO 9001 Certification Cost Breakdown
            </Link>
            <Link href="/blog/how-long-does-iso-9001-take" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              → ISO 9001 Timeline: How Long Does It Really Take?
            </Link>
            <Link href="/blog/iso-9001-requirements" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              → ISO 9001 Requirements: Complete Guide to All 10 Clauses
            </Link>
            <Link href="/blog/iso-9001-checklist" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              → Free ISO 9001 Checklist (PDF Download)
            </Link>
            <Link href="/blog/iso-9001-internal-audit-guide" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              → ISO 9001 Internal Audit Guide
            </Link>
            <Link href="/blog/iso-9001-for-craft-breweries" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              → ISO 9001 for Craft Breweries
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
