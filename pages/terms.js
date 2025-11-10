import Head from 'next/head'

export default function Terms() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Terms of Service - AuditsReady</title>
        <meta name="description" content="Terms of Service for AuditsReady ISO 9001 compliance consulting services." />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-6">Last updated: January 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. ACCEPTANCE OF TERMS</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using AuditsReady's website, software, services, or platform (collectively, the "Services"),
              you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Services.
            </p>
            <p className="text-gray-700 mb-4">
              These Terms constitute a legally binding agreement between you (either an individual or an entity, "You" or "Customer")
              and AuditsReady ("we," "us," or "Company").
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. DESCRIPTION OF SERVICES</h2>
            <p className="text-gray-700 mb-4">
              AuditsReady provides AI-powered ISO 9001 gap analysis and compliance consulting services for manufacturers, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Document analysis and gap detection</li>
              <li>ISO 9001:2015 compliance assessment</li>
              <li>Standard Operating Procedure (SOP) review and recommendations</li>
              <li>Compliance guidance and action plans</li>
              <li>Implementation support and consulting</li>
            </ul>
            <p className="text-gray-700 mb-4 font-semibold">SERVICE DELIVERY METHOD:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Services are provided via email communication</li>
              <li>Customers submit documents via email or secure file transfer</li>
              <li>Analysis reports delivered as PDF documents via email</li>
              <li>Consultation provided via email, phone, or video call</li>
              <li>No online platform or user accounts required at this time</li>
            </ul>
            <p className="text-gray-700 mb-4 font-semibold">CRITICAL DISCLAIMER:</p>
            <p className="text-gray-700 mb-4">AuditsReady is a consulting and guidance service. It is NOT:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>An ISO 9001 certification body or auditor</li>
              <li>A substitute for professional auditing services</li>
              <li>A guarantee of ISO 9001 certification success</li>
              <li>Legal, regulatory, or professional compliance advice</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. NO GUARANTEE OF CERTIFICATION</h2>
            <p className="text-gray-700 mb-4 font-semibold">YOU EXPRESSLY ACKNOWLEDGE AND AGREE:</p>
            <p className="text-gray-700 mb-4">
              <strong>a) No Certification Guarantee:</strong> Use of AuditsReady does NOT guarantee ISO 9001 certification,
              audit success, or compliance with any ISO standard.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>b) User Responsibility:</strong> You are solely responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-8">
              <li>Verifying all compliance requirements with your certification body</li>
              <li>Ensuring accuracy and completeness of all documentation</li>
              <li>Meeting all ISO 9001:2015 requirements</li>
              <li>Hiring qualified auditors and consultants as needed</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>c) AI Limitations:</strong> Our AI-powered tools may produce errors, omissions, or inaccurate recommendations.
              You must independently verify all outputs before relying on them for compliance purposes.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>d) Not Professional Certification Services:</strong> AuditsReady provides consulting and gap analysis services,
              but is NOT an ISO certification body, accredited auditor, or professional certification service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. CUSTOMER RESPONSIBILITIES</h2>
            <p className="text-gray-700 mb-4">You agree to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Provide accurate and complete documentation and information for analysis</li>
              <li>Maintain secure email access and protect confidential information</li>
              <li>Use the Services only for lawful purposes and in accordance with these Terms</li>
              <li>Not share or distribute proprietary analysis methods or AI outputs to competitors</li>
              <li>Not use the Services to provide competing ISO consulting services to third parties</li>
              <li>Independently verify all AI-generated recommendations before implementing them</li>
              <li>Comply with all applicable ISO standards and certification body requirements</li>
              <li>Ensure you have rights to share all documents submitted for analysis</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. INTELLECTUAL PROPERTY</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Our IP</h3>
            <p className="text-gray-700 mb-4">
              All content, features, functionality, software, code, designs, logos, and trademarks in the Services are owned by
              AuditsReady and protected by intellectual property laws. You may not copy, modify, distribute, or create derivative
              works without our written permission.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Your Data</h3>
            <p className="text-gray-700 mb-4">
              You retain ownership of all documents and content you submit for analysis ("Customer Data"). By submitting Customer Data,
              you grant us a limited license to process, analyze, and store Customer Data solely to provide the Services. We will delete
              Customer Data within 90 days after service completion unless you request earlier deletion.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 AI-Generated Content</h3>
            <p className="text-gray-700 mb-4">
              Content generated by our AI tools ("AI Output") is provided to you for your internal use. We do not claim ownership of
              AI Output, but we make no warranties regarding accuracy, completeness, or fitness for any purpose.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. PAYMENT TERMS</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Service Fees</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Services are provided on a project basis with fees quoted per engagement</li>
              <li>Fees are typically based on document volume and complexity</li>
              <li><strong>Payment is due 100% upfront before work begins</strong> (required to start analysis)</li>
              <li>Payment methods: Credit card (Stripe), bank transfer, or e-transfer</li>
              <li>All fees are non-refundable once work has commenced, except as required by law or stated in our Refund Policy</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Statement of Work</h3>
            <p className="text-gray-700 mb-4">Each engagement will be documented in a Statement of Work (SOW) detailing:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Specific documents to be analyzed</li>
              <li>Deliverables and timeline</li>
              <li>Total fees</li>
              <li>Payment terms</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Payment Processing</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Payment must be received and cleared before work commences</li>
              <li>Credit card payments process immediately</li>
              <li>Bank transfers/e-transfers: Work begins once funds are received and confirmed</li>
              <li>No work will begin until payment is confirmed</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.4 Taxes</h3>
            <p className="text-gray-700 mb-4">
              Fees do not include applicable taxes. You are responsible for all sales, use, GST, VAT, and other taxes except those based on our income.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. DATA PRIVACY AND SECURITY</h2>
            <p className="text-gray-700 mb-4">
              Your use of the Services is also governed by our Privacy Policy, which is incorporated by reference into these Terms.
              By using the Services, you consent to our collection, use, and disclosure of your information as described in the Privacy Policy.
            </p>
            <p className="text-gray-700 mb-4 font-semibold">Key Privacy Points:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>We collect personal and business information you provide</li>
              <li>Documents submitted via email are stored securely and encrypted</li>
              <li>We delete Customer Data within 90 days after service completion</li>
              <li>We comply with GDPR for EU customers</li>
              <li>We do not sell your data to third parties</li>
            </ul>
            <p className="text-gray-700 mb-4 font-semibold">Email Security Notice:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Email is not a fully secure method of communication</li>
              <li>You are responsible for secure transmission of sensitive documents</li>
              <li>We recommend using password-protected files for highly sensitive documents</li>
              <li>We use encrypted email storage and secure file handling practices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. LIMITATION OF LIABILITY</h2>
            <p className="text-gray-700 mb-4 font-semibold">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
            <p className="text-gray-700 mb-4">
              <strong>a) No Consequential Damages:</strong> AuditsReady shall NOT be liable for any indirect, incidental, special,
              consequential, or punitive damages, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-8">
              <li>Lost profits or revenue</li>
              <li>Failed ISO certifications or audits</li>
              <li>Costs of re-certification or corrective actions</li>
              <li>Lost business opportunities or contracts</li>
              <li>Damage to reputation</li>
              <li>Loss of data</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>b) Cap on Liability:</strong> Our total liability to you for all claims arising from or related to the Services
              shall not exceed the amounts paid by you to AuditsReady in the 12 months preceding the claim.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>c) Basis of Bargain:</strong> You acknowledge that these limitations are a fundamental basis of our agreement
              and that we would not provide the Services without these limitations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. DISCLAIMER OF WARRANTIES</h2>
            <p className="text-gray-700 mb-4">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
              <li>Accuracy, reliability, or completeness of AI-generated content</li>
              <li>Uninterrupted or error-free operation</li>
              <li>Compliance with ISO 9001 or any other standards</li>
              <li>Suitability for certification purposes</li>
            </ul>
            <p className="text-gray-700 mb-4 font-semibold">You use the Services at your own risk.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. INDEMNIFICATION</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify, defend, and hold harmless AuditsReady, its officers, directors, employees, and agents from any claims,
              liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Your use or misuse of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Any claim that your use of the Services caused you to fail an ISO audit or certification</li>
              <li>Inaccurate or incomplete information you provided</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. PROFESSIONAL SERVICES DISCLAIMER</h2>
            <p className="text-gray-700 mb-4">
              The Services are NOT professional consulting, engineering, auditing, or certification services. Use of the Services does NOT
              create any professional relationship or duty of care beyond the software services provided.
            </p>
            <p className="text-gray-700 mb-4">
              For matters requiring professional judgment or expertise, you must retain qualified professionals directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. PROJECT COMPLETION AND CANCELLATION</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">12.1 Project-Based Services</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Each engagement is a discrete project with defined deliverables</li>
              <li>Services are complete when final deliverables are provided</li>
              <li>No ongoing subscription or recurring fees (unless separately agreed)</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">12.2 Cancellation Before Completion</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>You may cancel a project before work begins for a full refund</li>
              <li>Once analysis has commenced, fees are non-refundable</li>
              <li>If we cannot complete the project, we will provide a pro-rated refund</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">12.3 Termination by Us</h3>
            <p className="text-gray-700 mb-4">We may terminate an engagement and refund fees if:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>You breach these Terms</li>
              <li>You provide fraudulent or stolen documents</li>
              <li>Completion is impossible due to circumstances beyond our control</li>
              <li>Required by law</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">12.4 Effect of Completion/Termination</h3>
            <p className="text-gray-700 mb-4">Upon project completion or termination:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>All deliverables are provided to you (if project completed)</li>
              <li>We delete your Customer Data within 90 days</li>
              <li>You remain liable for all fees incurred for work performed</li>
              <li>Sections 5, 8, 9, 10, and 13 survive termination</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. GOVERNING LAW AND DISPUTES</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">13.1 Governing Law</h3>
            <p className="text-gray-700 mb-4">
              These Terms are governed by the laws of the Province of Alberta, Canada, without regard to conflict of law principles.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">13.2 Dispute Resolution</h3>
            <p className="text-gray-700 mb-4">
              Any disputes arising from these Terms or the Services shall be resolved through:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Good faith negotiation (30 days)</li>
              <li>Mediation (if negotiation fails)</li>
              <li>Binding arbitration or jurisdiction in Alberta courts</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. MODIFICATIONS TO TERMS</h2>
            <p className="text-gray-700 mb-4">
              We may modify these Terms at any time by posting revised Terms on our website. Continued use of the Services after changes
              constitutes acceptance. Material changes will be notified via email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. GENERAL PROVISIONS</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">15.1 Entire Agreement</h3>
            <p className="text-gray-700 mb-4">
              These Terms, together with our Privacy Policy and Refund Policy, constitute the entire agreement between you and AuditsReady.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">15.2 Severability</h3>
            <p className="text-gray-700 mb-4">
              If any provision is found unenforceable, the remaining provisions remain in effect.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">15.3 Waiver</h3>
            <p className="text-gray-700 mb-4">
              Our failure to enforce any right does not waive that right.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">15.4 Assignment</h3>
            <p className="text-gray-700 mb-4">
              You may not assign these Terms without our consent. We may assign to any affiliate or successor.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">15.5 Force Majeure</h3>
            <p className="text-gray-700 mb-4">
              We are not liable for delays or failures due to causes beyond our reasonable control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. CONTACT INFORMATION</h2>
            <p className="text-gray-700 mb-4">For questions about these Terms:</p>
            <p className="text-gray-700 mb-2"><strong>AuditsReady</strong></p>
            <p className="text-gray-700 mb-2">Email: info@auditsready.com</p>
            <p className="text-gray-700 mb-2">Phone: +1-403-404-4643</p>
            <p className="text-gray-700 mb-4">Website: https://auditsready.com</p>
          </section>
        </div>
      </div>
    </div>
  )
}
