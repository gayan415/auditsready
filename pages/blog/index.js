import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogIndex() {
  const posts = [
    {
      slug: 'iso-9001-for-metal-fabrication',
      title: 'ISO 9001 for Metal Fabrication Shops: Complete Guide (2025)',
      excerpt: 'ISO 9001 certification guide for metal fabrication and job shops: welding specs (WPS/PQR), material traceability, CWB integration, customer requirements, and costs ($55k-$120k). Real fab shop case studies.',
      date: '2025-10-07',
      readTime: '14 min read',
      category: 'ISO 9001 Compliance'
    },
    {
      slug: 'iso-9001-for-craft-breweries',
      title: 'ISO 9001 for Craft Breweries: Complete Certification Guide (2025)',
      excerpt: 'Everything craft breweries need to know about ISO 9001: HACCP integration, TTB compliance, export requirements, distributor demands, and costs ($45k-$95k). Real brewery case studies.',
      date: '2025-09-22',
      readTime: '12 min read',
      category: 'ISO 9001 Compliance'
    },
    {
      slug: 'iso-9001-internal-audit-guide',
      title: 'ISO 9001 Internal Audit Guide: How to Conduct Effective Internal Audits (2025)',
      excerpt: 'Complete ISO 9001 internal audit guide: who can audit, frequency requirements, audit checklist, how to document findings, and best practices for manufacturers. Required for certification.',
      date: '2025-08-09',
      readTime: '13 min read',
      category: 'ISO 9001 Compliance'
    },
    {
      slug: 'how-long-does-iso-9001-take',
      title: 'How Long Does ISO 9001 Certification Take? Timeline & Fast-Track Options (2025)',
      excerpt: 'ISO 9001 certification takes 6-18 months depending on company size, documentation state, and approach. Complete timeline breakdown with fast-track options and what slows it down.',
      date: '2025-07-18',
      readTime: '10 min read',
      category: 'ISO 9001 Compliance'
    },
    {
      slug: 'iso-9001-requirements',
      title: 'ISO 9001 Requirements: Complete Guide to All 10 Clauses (2025)',
      excerpt: 'Complete guide to ISO 9001:2015 requirements. Detailed breakdown of all 10 clauses with real examples, implementation steps, and what auditors actually check. The ultimate ISO 9001 reference.',
      date: '2025-06-24',
      readTime: '18 min read',
      category: 'ISO 9001 Compliance'
    },
    {
      slug: 'iso-9001-vs-iso-14001',
      title: 'ISO 9001 vs ISO 14001: Which Certification Do You Actually Need? (2025)',
      excerpt: 'ISO 9001 (quality) vs ISO 14001 (environment): Complete comparison of requirements, costs, benefits, and which one manufacturers should pursue first. Can you do both simultaneously?',
      date: '2025-05-03',
      readTime: '11 min read',
      category: 'ISO 9001 Compliance'
    },
    {
      slug: 'iso-9001-checklist',
      title: 'Free ISO 9001 Checklist: Complete Implementation Guide (2025)',
      excerpt: 'Download our free ISO 9001 checklist covering all 10 clauses. Step-by-step implementation guide for manufacturers. Includes gap analysis templates and audit preparation checklists.',
      date: '2025-04-15',
      readTime: '15 min read',
      category: 'ISO 9001 Compliance'
    },
    {
      slug: 'iso-9001-certification-cost',
      title: 'ISO 9001 Certification Cost: Complete Breakdown for Manufacturers (2025)',
      excerpt: 'Complete ISO 9001 certification cost breakdown: $50k-$150k+ total investment. Learn certification body fees, consultant costs, hidden expenses, and how to reduce costs by 40-60% with AI.',
      date: '2025-03-12',
      readTime: '14 min read',
      category: 'ISO 9001 Compliance'
    },
    {
      slug: 'how-to-prepare-for-iso-9001-audit',
      title: 'How to Prepare for ISO 9001 Audit: Complete Checklist for Manufacturers (2025)',
      excerpt: 'Your audit is in 8 weeks. Here\'s your complete preparation timeline, comprehensive checklist, and what auditors actually look for. Learn the top 10 reasons manufacturers fail and how to avoid them.',
      date: '2025-02-04',
      readTime: '12 min read',
      category: 'ISO 9001 Compliance'
    },
    {
      slug: 'iso-9001-gap-analysis-cost',
      title: 'ISO 9001 Gap Analysis: Complete Cost Breakdown for Manufacturers (2025)',
      excerpt: 'Discover the real cost of ISO 9001 gap analysis - from traditional consultants ($15k-$50k) to DIY approaches and the new AI-powered alternative. Compare all options with hidden costs revealed.',
      date: '2025-01-05',
      readTime: '8 min read',
      category: 'ISO 9001 Compliance'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <Head>
        <title>ISO 9001 Compliance Blog | AuditsReady</title>
        <meta name="description" content="Expert insights on ISO 9001 compliance, gap analysis, SOP management, and audit preparation for manufacturers. Practical tips and cost-saving strategies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://auditsready.com/blog" />

        {/* Favicon and Icons */}
        <link rel="icon" href="/iso-9001-auditsready-favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/iso-9001-auditsready-favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/iso-9001-auditsready-app-icon.png" />
      </Head>

      {/* Header */}
      <header className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 py-12">
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ISO 9001 Compliance Blog
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Expert insights on gap analysis, audit preparation, and SOP management for manufacturers
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-16 px-6">
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                  {post.category}
                </span>
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors cursor-pointer">
                  {post.title}
                </h2>
              </Link>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                Read Full Article
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="mb-4">
            <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
              ← Back to Home
            </Link>
          </p>
          <p className="text-sm">
            &copy; 2025 AuditsReady. All rights reserved. | <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
