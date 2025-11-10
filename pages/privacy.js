import Head from 'next/head'

export default function Privacy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Privacy Policy - AuditsReady</title>
        <meta name="description" content="AuditsReady Privacy Policy - How we protect and handle your personal information." />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-6">Last updated: January 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. INTRODUCTION</h2>
            <p className="text-gray-700 mb-4">
              AuditsReady ("we," "us," or "our") respects your privacy and is committed to protecting your personal data.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
              website and services (collectively, the "Services").
            </p>
            <p className="text-gray-700 mb-4 font-semibold">Key Points:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>We collect personal and business information to provide our Services</li>
              <li>We use third-party services (analytics, email) that may process your data</li>
              <li>We comply with GDPR for European Union users</li>
              <li>We do not sell your personal data</li>
              <li>You have rights to access, correct, and delete your data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. WHO WE ARE</h2>
            <p className="text-gray-700 mb-4"><strong>Data Controller:</strong></p>
            <p className="text-gray-700 mb-2">AuditsReady</p>
            <p className="text-gray-700 mb-2">Email: info@auditsready.com</p>
            <p className="text-gray-700 mb-2">Phone: +1-403-404-4643</p>
            <p className="text-gray-700 mb-4">Website: https://auditsready.com</p>
            <p className="text-gray-700 mb-4">
              For GDPR purposes, AuditsReady is the data controller responsible for your personal data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. INFORMATION WE COLLECT</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Information You Provide Directly</h3>
            <p className="text-gray-700 mb-4"><strong>Contact and Business Information:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Name, email address, phone number</li>
              <li>Company name, industry, job title</li>
              <li>Billing address and payment information</li>
            </ul>
            <p className="text-gray-700 mb-4"><strong>Customer Data (Submitted for Analysis):</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Documents submitted via email or file transfer</li>
              <li>Standard Operating Procedures (SOPs)</li>
              <li>Quality management system documentation</li>
              <li>Email communications regarding your project</li>
            </ul>
            <p className="text-gray-700 mb-4"><strong>Contact Forms:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Name, email, phone, company, message content</li>
              <li>Service requests and inquiries</li>
              <li>Newsletter subscriptions (if offered)</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>Note:</strong> We do not currently require account creation or passwords. All services are provided via email communication.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Information Collected Automatically</h3>
            <p className="text-gray-700 mb-4"><strong>Usage Data:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>IP address, browser type, device information</li>
              <li>Pages visited, features used, time spent</li>
              <li>Referral source, search queries</li>
              <li>Click behavior and interaction patterns</li>
            </ul>
            <p className="text-gray-700 mb-4"><strong>Cookies and Tracking Technologies:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Analytics cookies (Google Analytics for website traffic)</li>
              <li>No session or authentication cookies (no user accounts currently)</li>
            </ul>
            <p className="text-gray-700 mb-4">See Section 9 for detailed cookie information.</p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Information from Third Parties</h3>
            <p className="text-gray-700 mb-4"><strong>Payment Processors:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Transaction data from payment providers (Stripe, etc.)</li>
              <li>Does NOT include full credit card numbers (we receive only last 4 digits)</li>
            </ul>
            <p className="text-gray-700 mb-4"><strong>Analytics Providers:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Google Analytics (website traffic, demographics, behavior)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. HOW WE USE YOUR INFORMATION</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Providing Services (Legal Basis: Contract Performance)</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Communicating with you about your project</li>
              <li>Processing AI analysis of your documents</li>
              <li>Generating gap analysis reports and recommendations</li>
              <li>Providing consulting and customer support</li>
              <li>Processing payments and billing</li>
              <li>Storing documents securely during and after project completion</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Improving Services (Legal Basis: Legitimate Interest)</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Analyzing usage patterns to improve AI accuracy</li>
              <li>Developing new features and functionality</li>
              <li>Conducting research and analytics</li>
              <li>Monitoring platform performance</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Communications (Legal Basis: Consent or Legitimate Interest)</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Sending service-related emails (receipts, account updates)</li>
              <li>Marketing communications (newsletters, product updates) - WITH YOUR CONSENT</li>
              <li>Responding to inquiries and support requests</li>
              <li>Conducting surveys and requesting feedback</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.4 Legal and Security (Legal Basis: Legal Obligation / Legitimate Interest)</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Preventing fraud and abuse</li>
              <li>Complying with legal obligations</li>
              <li>Enforcing our Terms of Service</li>
              <li>Protecting rights and safety of users</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.5 Aggregate Data (Legal Basis: Legitimate Interest)</h3>
            <p className="text-gray-700 mb-4">Creating anonymized, aggregate statistics about:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Industry trends in ISO 9001 compliance</li>
              <li>Common gaps found across manufacturers</li>
              <li>Platform usage patterns</li>
            </ul>
            <p className="text-gray-700 mb-4">This data cannot identify individual users.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. LEGAL BASIS FOR PROCESSING (GDPR)</h2>
            <p className="text-gray-700 mb-4">For users in the European Union, we process personal data based on:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li><strong>Contract:</strong> Providing Services you've requested</li>
              <li><strong>Consent:</strong> Marketing emails, optional cookies (you can withdraw anytime)</li>
              <li><strong>Legitimate Interest:</strong> Service improvement, security, analytics</li>
              <li><strong>Legal Obligation:</strong> Tax compliance, fraud prevention</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. HOW WE SHARE YOUR INFORMATION</h2>
            <p className="text-gray-700 mb-4">
              We do NOT sell your personal data. We share data only in these situations:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Service Providers (Data Processors)</h3>
            <p className="text-gray-700 mb-4">We use third-party companies to support our Services:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li><strong>Cloud Hosting:</strong> Secure data storage and processing</li>
              <li><strong>Analytics:</strong> Google Analytics (website behavior tracking)</li>
              <li><strong>Email Services:</strong> Resend (transactional emails)</li>
              <li><strong>Payment Processing:</strong> Stripe (secure payment processing)</li>
            </ul>
            <p className="text-gray-700 mb-4">
              These providers process data only as instructed and must maintain confidentiality.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Business Transfers</h3>
            <p className="text-gray-700 mb-4">
              If AuditsReady is involved in a merger, acquisition, or asset sale, your information may be transferred.
              We will notify you before your data is transferred and becomes subject to different privacy practices.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Legal Requirements</h3>
            <p className="text-gray-700 mb-4">
              We may disclose information if required by law, court order, or regulatory authority, or to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Protect our legal rights</li>
              <li>Prevent fraud or security threats</li>
              <li>Comply with legal processes</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.4 With Your Consent</h3>
            <p className="text-gray-700 mb-4">
              We will share your information with third parties when you explicitly consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. DATA RETENTION</h2>
            <p className="text-gray-700 mb-4">
              We retain your information for as long as necessary to provide Services and comply with legal obligations:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li><strong>Contact Information:</strong> Retained for ongoing business relationship</li>
              <li><strong>Customer Data (Documents):</strong> Deleted 90 days after project completion (unless you request earlier deletion)</li>
              <li><strong>Email Communications:</strong> Retained for 90 days after project completion</li>
              <li><strong>Payment Records:</strong> Retained 7 years for tax/accounting purposes</li>
              <li><strong>Marketing Data:</strong> Until you unsubscribe or request deletion</li>
              <li><strong>Legal Retention:</strong> Some data retained longer if required by law</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>You may request immediate deletion</strong> by emailing info@auditsready.com with "Data Deletion Request" in the subject line.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. YOUR PRIVACY RIGHTS</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1 Rights Under GDPR (EU Users)</h3>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Erasure ("Right to be Forgotten"):</strong> Request deletion of your data</li>
              <li><strong>Restrict Processing:</strong> Limit how we use your data</li>
              <li><strong>Data Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Object:</strong> Object to processing based on legitimate interest</li>
              <li><strong>Withdraw Consent:</strong> Stop marketing emails or optional tracking at any time</li>
              <li><strong>Lodge a Complaint:</strong> File a complaint with your local data protection authority</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>How to Exercise Rights:</strong> Email info@auditsready.com with "GDPR Request" in the subject line.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Response Time:</strong> We will respond within 30 days.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.2 Rights Under CCPA (California Users)</h3>
            <p className="text-gray-700 mb-4">California residents have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Know what personal information is collected</li>
              <li>Know if personal information is sold or disclosed (we don't sell data)</li>
              <li>Request deletion of personal information</li>
              <li>Opt-out of data sales (not applicable - we don't sell)</li>
              <li>Non-discrimination for exercising rights</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.3 Rights for All Users</h3>
            <p className="text-gray-700 mb-4">Regardless of location, you can:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Update your contact information anytime</li>
              <li>Unsubscribe from marketing emails (link in every email)</li>
              <li>Request data deletion by contacting us</li>
              <li>Disable cookies in your browser (may affect functionality)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. COOKIES AND TRACKING</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">9.1 What Are Cookies?</h3>
            <p className="text-gray-700 mb-4">
              Cookies are small text files stored on your device that help us provide and improve our Services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">9.2 Cookies We Use</h3>
            <p className="text-gray-700 mb-4"><strong>Essential Cookies (Always Active):</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Security and fraud prevention</li>
              <li>Load balancing</li>
            </ul>
            <p className="text-gray-700 mb-4"><strong>Analytics Cookies (Can Be Disabled):</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Google Analytics: Traffic analysis, user behavior, demographics</li>
              <li>Tracks: Page views, session duration, referral sources</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">9.3 Third-Party Cookies</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li><strong>Google Analytics:</strong> Analytics and advertising (privacy policy: https://policies.google.com/privacy)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">9.4 Managing Cookies</h3>
            <p className="text-gray-700 mb-4">You can control cookies through:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Browser settings (Chrome, Safari, Firefox, etc.)</li>
              <li>Opt-out tools: https://tools.google.com/dlpage/gaoptout</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>Note:</strong> Disabling essential cookies may prevent you from using some features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. DATA SECURITY</h2>
            <p className="text-gray-700 mb-4">We implement reasonable security measures to protect your information:</p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">10.1 Technical Safeguards</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li><strong>Encryption in transit:</strong> HTTPS/TLS for website and email transmission</li>
              <li><strong>Encryption at rest:</strong> Secure file storage with encryption</li>
              <li><strong>Access controls:</strong> Limited access to customer documents</li>
              <li><strong>Secure email storage:</strong> Encrypted email storage systems</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">10.2 Organizational Safeguards</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Employee training on data protection</li>
              <li>Confidentiality agreements with staff and contractors</li>
              <li>Incident response procedures</li>
              <li>Document deletion procedures after retention period</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">10.3 Document Transfer</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li><strong>Primary method:</strong> Email with HTTPS/TLS encryption</li>
              <li><strong>Alternative:</strong> Secure Cloud Storage (available upon request)</li>
              <li><strong>Your responsibility:</strong> Choose the method that meets your security needs</li>
              <li><strong>Recommendations:</strong> Password-protect files with sensitive information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">10.4 Email Security</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li><strong>Email limitations:</strong> Email is not a fully secure method of communication</li>
              <li><strong>Our practices:</strong> We use encrypted email storage and secure file handling procedures</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">10.5 Limitations</h3>
            <p className="text-gray-700 mb-4">
              No method of transmission or storage is 100% secure. While we strive to protect your data, we cannot guarantee
              absolute security. Email communication carries inherent risks.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. DATA TRANSFERS</h2>
            <p className="text-gray-700 mb-4">
              AuditsReady is based in Canada. If you access Services from outside Canada, your data may be transferred to,
              stored, and processed in Canada.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">11.1 EU Data Transfers</h3>
            <p className="text-gray-700 mb-4">
              For users in the European Union, we ensure adequate protection through:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Standard Contractual Clauses (SCCs) with third-party processors</li>
              <li>Adequacy decisions where applicable</li>
              <li>Your explicit consent for transfers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. CHILDREN'S PRIVACY</h2>
            <p className="text-gray-700 mb-4">
              Our Services are not directed to individuals under 18 years old. We do not knowingly collect personal data from
              children. If we learn we have collected information from a child, we will delete it immediately.
            </p>
            <p className="text-gray-700 mb-4">
              If you are a parent/guardian and believe your child provided us with data, contact us at info@auditsready.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. CHANGES TO THIS PRIVACY POLICY</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with a new "Last Updated" date.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Material changes</strong> (affecting how we use your data) will be notified via:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Email to your registered address</li>
              <li>Prominent notice on our website</li>
            </ul>
            <p className="text-gray-700 mb-4">Continued use of Services after changes constitutes acceptance.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. CONTACT US</h2>
            <p className="text-gray-700 mb-4">
              For questions, concerns, or to exercise your privacy rights:
            </p>
            <p className="text-gray-700 mb-2"><strong>AuditsReady</strong></p>
            <p className="text-gray-700 mb-2">Email: info@auditsready.com</p>
            <p className="text-gray-700 mb-2">Phone: +1-403-404-4643</p>
            <p className="text-gray-700 mb-4">Website: https://auditsready.com</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. REGULATORY AUTHORITIES</h2>
            <p className="text-gray-700 mb-4">
              If you believe we have not addressed your privacy concerns, you may contact:
            </p>
            <p className="text-gray-700 mb-4"><strong>EU Users:</strong></p>
            <p className="text-gray-700 mb-4">
              Your local data protection authority (find yours: https://edpb.europa.eu/about-edpb/board/members_en)
            </p>
            <p className="text-gray-700 mb-4"><strong>California Users:</strong></p>
            <p className="text-gray-700 mb-4">
              California Attorney General's Office (https://oag.ca.gov/privacy)
            </p>
            <p className="text-gray-700 mb-4"><strong>Canada Users:</strong></p>
            <p className="text-gray-700 mb-4">
              Office of the Privacy Commissioner of Canada (https://www.priv.gc.ca/)
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
