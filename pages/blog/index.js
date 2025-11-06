import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogIndex() {
  const posts = [
    {
      slug: 'how-to-prepare-for-iso-9001-audit',
      title: 'How to Prepare for ISO 9001 Audit: Complete Checklist for Manufacturers (2025)',
      excerpt: 'Your audit is in 8 weeks. Here\'s your complete preparation timeline, comprehensive checklist, and what auditors actually look for. Learn the top 10 reasons manufacturers fail and how to avoid them.',
      date: '2025-01-06',
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>

      {/* Header */}
      <header className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Link href="/" className="inline-flex items-center gap-3 mb-8 text-white hover:text-blue-200 transition-colors">
            <Image
              src="/auditsready-logo.png"
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
