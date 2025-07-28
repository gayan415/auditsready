
import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>AuditsReady – Factory Compliance Made Simple</title>
        <meta name="description" content="Get your manufacturing SOPs audit-ready with minimal effort. Flexible ISO-aligned documentation, AI-supported, and custom pricing." />
      </Head>

      <header className="bg-blue-900 text-white text-center py-12 px-4">
        <h1 className="text-4xl font-bold">AuditsReady</h1>
        <p className="text-lg mt-2">Factory SOP Compliance Made Easy</p>
      </header>

      <main className="max-w-5xl mx-auto py-12 px-6">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">What We Do</h2>
          <p className="text-gray-700 text-lg">We help manufacturing operations streamline SOP creation and compliance. From handwritten documentation to ISO audit-ready procedures, AuditsReady helps your team digitize, organize, and align with key standards like ISO 9001 and ISO 22000.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Who It's For</h2>
          <p className="text-gray-700 text-lg">AuditsReady is built for food, packaging, building material, and general product manufacturers who want to improve SOP compliance — without the complexity of traditional QMS tools.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Flexible Pricing That Fits</h2>
          <p className="text-gray-700 text-lg mb-4">No two factories are the same — and neither are their SOPs.</p>
          <ul className="list-disc list-inside text-gray-700 text-lg mb-4">
            <li>SOPs in Word, PDF, or even handwritten formats</li>
            <li>Support for ISO standards (9001, 22000, etc.)</li>
            <li>Document formatting, mapping, and version tracking</li>
          </ul>
          <p className="text-gray-700 text-lg"><strong>Contact us for a custom quote and early adopter pricing.</strong></p>
          <a href="mailto:info@auditsready.com" className="inline-block bg-blue-900 text-white px-6 py-3 rounded-md text-lg font-semibold mt-4 hover:bg-blue-800 transition">Request a Quote</a>
        </section>
      </main>

      <footer className="text-center bg-gray-200 py-4 text-gray-600 text-sm">
        &copy; 2025 AuditsReady. All rights reserved.
      </footer>
    </div>
  )
}
