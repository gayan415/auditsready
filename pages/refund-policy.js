import Head from 'next/head'

export default function RefundPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Refund and Cancellation Policy - AuditsReady</title>
        <meta name="description" content="AuditsReady refund and cancellation policy for ISO 9001 consulting services." />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund and Cancellation Policy</h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-6">Last updated: January 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. OVERVIEW</h2>
            <p className="text-gray-700 mb-4">
              This Refund and Cancellation Policy explains our refund policy for AuditsReady consulting services and under
              what circumstances refunds are available.
            </p>
            <p className="text-gray-700 mb-4">
              This Policy applies to all paid services. It should be read together with our Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. SERVICE TYPES</h2>
            <p className="text-gray-700 mb-4"><strong>Project-Based Gap Analysis:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>One-time fee for document analysis and gap assessment</li>
              <li>Payment due 100% upfront before work begins</li>
              <li>Typical timeline: 48-72 hours for report delivery</li>
              <li>No subscription or recurring fees</li>
            </ul>
            <p className="text-gray-700 mb-4"><strong>Consulting Packages:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Custom pricing based on scope of work</li>
              <li>Defined in Statement of Work (SOW)</li>
              <li>Payment terms specified per project</li>
              <li>May include ongoing support (separately agreed)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. PROJECT CANCELLATION</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Cancellation Before Payment</h3>
            <p className="text-gray-700 mb-4">You may cancel a project before making payment:</p>
            <p className="text-gray-700 mb-4"><strong>How to Cancel:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Email info@auditsready.com or simply do not submit payment</li>
              <li>Subject: "Project Cancellation" (if already signed SOW)</li>
              <li>Include: Your name, company name, project details</li>
            </ul>
            <p className="text-gray-700 mb-4"><strong>No Charge:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>No payment required if you decline before paying</li>
              <li>Free to walk away at any time before payment</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Cancellation After Payment, Before Work Begins</h3>
            <p className="text-gray-700 mb-4">If you've paid but we haven't started analysis yet:</p>
            <p className="text-gray-700 mb-4"><strong>How to Cancel:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Email info@auditsready.com immediately</li>
              <li>Subject: "Refund Request - Before Work Begins"</li>
              <li>Include: Your name, company name, payment details</li>
            </ul>
            <p className="text-gray-700 mb-4"><strong>Refund:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Full refund minus payment processing fees (typically 3-5% for credit card, $0 for e-transfer)</li>
              <li>Refund processed within 5-10 business days</li>
              <li>Example: $500 paid by credit card → $485 refunded ($15 processing fee)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Cancellation After Work Begins</h3>
            <p className="text-gray-700 mb-4">Once document analysis has commenced:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li><strong>No refunds</strong> for work already performed</li>
              <li>Payment is non-refundable once work begins</li>
              <li>You will receive deliverables for work completed to date</li>
              <li>Pro-rated refund may be available if project cannot be completed (our fault)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.4 Project Completion</h3>
            <p className="text-gray-700 mb-4"><strong>Timeline:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Most gap analysis projects completed within 48-72 hours</li>
              <li>Larger projects: Timeline specified in Statement of Work (SOW)</li>
            </ul>
            <p className="text-gray-700 mb-4"><strong>When is a project "complete"?</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Final gap analysis report delivered via email</li>
              <li>Optional: 30-minute consultation call conducted</li>
              <li>All agreed-upon deliverables provided</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.5 Confirmation</h3>
            <p className="text-gray-700 mb-4">
              You will receive an email confirmation of any cancellation or completion within 24 hours.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. REFUND POLICY</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 General Rule: No Refunds After Work Begins</h3>
            <p className="text-gray-700 mb-4">
              <strong>All fees are non-refundable once work has commenced</strong> except as stated in this Policy or required by law.
            </p>
            <p className="text-gray-700 mb-4">This includes:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Change of mind after work begins</li>
              <li>Dissatisfaction with AI-generated recommendations</li>
              <li>Failed ISO audits or certifications (Services are guidance tools, not guarantees)</li>
              <li>Disagreement with gap analysis findings</li>
              <li>Decision to use a different consultant</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Exceptions: When Refunds ARE Available</h3>

            <p className="text-gray-700 mb-4"><strong>4.2.1 Cancellation After Payment, Before Work Begins</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Full refund minus payment processing fees if you cancel after paying but before we start work</li>
              <li>Processing fees: 3-5% for credit card, $0 for e-transfer/bank transfer</li>
              <li>Must notify us via email to info@auditsready.com immediately</li>
              <li>Refund processed within 5-10 business days</li>
              <li>See Section 3.2 for cancellation process</li>
              <li><strong>Note:</strong> Most customers pay and we start work same day, so this window is typically 0-24 hours</li>
            </ul>

            <p className="text-gray-700 mb-4"><strong>4.2.2 Service Failure (Our Fault)</strong></p>
            <p className="text-gray-700 mb-4">
              If we fail to deliver agreed-upon services and do not cure within 15 days of written notice:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Full refund if no work delivered</li>
              <li>Pro-rated refund if partial work delivered</li>
              <li>Example: Paid for 10 SOPs analysis, only received 6 = 40% refund</li>
            </ul>
            <p className="text-gray-700 mb-4"><strong>Excludes:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Delays caused by incomplete or unclear documents you provided</li>
              <li>Force majeure events (natural disasters, cyberattacks, etc.)</li>
              <li>Changes you requested mid-project (may incur additional fees)</li>
            </ul>

            <p className="text-gray-700 mb-4"><strong>4.2.3 Billing Errors</strong></p>
            <p className="text-gray-700 mb-4">If we accidentally overcharge you:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Full refund of the overcharged amount</li>
              <li>Processing within 5 business days</li>
              <li>Notification via email</li>
            </ul>

            <p className="text-gray-700 mb-4"><strong>4.2.4 Unauthorized Charges</strong></p>
            <p className="text-gray-700 mb-4">If you were charged without authorization:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Full refund upon verification</li>
              <li>Investigation may take 5-10 business days</li>
              <li>You may need to provide supporting documentation</li>
            </ul>

            <p className="text-gray-700 mb-4"><strong>4.2.5 Legal Requirements</strong></p>
            <p className="text-gray-700 mb-4">Refunds required by consumer protection laws in your jurisdiction:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>EU consumers: 14-day withdrawal right (see Section 5)</li>
              <li>Other jurisdictions: As required by applicable law</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Refunds NOT Available</h3>
            <p className="text-gray-700 mb-4">No refunds will be issued for:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Failed ISO certifications or audits (Services are guidance, not guarantees)</li>
              <li>Change of mind after deliverables received</li>
              <li>Dissatisfaction with AI accuracy (AI has inherent limitations, disclosed upfront)</li>
              <li>Disagreement with our recommendations (professional opinion may vary)</li>
              <li>Certification body rejection (we are not the certification body)</li>
              <li>Time already spent on analysis (cannot refund completed work)</li>
              <li>Switching to a competitor after receiving report</li>
              <li>Economic hardship or budget changes</li>
              <li>You didn't implement our recommendations</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.4 How Refunds Are Processed</h3>
            <p className="text-gray-700 mb-4"><strong>Refund Method:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Refunds issued to the original payment method</li>
              <li>Credit card refunds: 5-10 business days</li>
              <li>Bank transfers: 7-14 business days (depending on bank)</li>
              <li>No cash refunds</li>
            </ul>
            <p className="text-gray-700 mb-4"><strong>Refund Amount:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Fees paid less any applicable processing fees (if stated at purchase)</li>
              <li>Currency: Same currency as original purchase</li>
            </ul>
            <p className="text-gray-700 mb-4"><strong>After Refund:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>All deliverables must be deleted and not used (we will request confirmation)</li>
              <li>All Customer Data will be available for download for 30 days</li>
              <li>After 30 days, data may be permanently deleted</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. EU CONSUMER RIGHT OF WITHDRAWAL (GDPR)</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 14-Day Withdrawal Right</h3>
            <p className="text-gray-700 mb-4">
              If you are a consumer in the European Union, you have the right to withdraw from your purchase within
              <strong> 14 days</strong> without giving any reason, subject to Section 5.2.
            </p>
            <p className="text-gray-700 mb-4"><strong>How to Exercise:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Send an email to info@auditsready.com</li>
              <li>Subject: "EU Right of Withdrawal"</li>
              <li>Include: Purchase date, project details, account email</li>
              <li>Within 14 days of purchase (payment date)</li>
            </ul>
            <p className="text-gray-700 mb-4"><strong>Refund Processing:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>We will process your refund within 14 days of receiving your withdrawal notice</li>
              <li>Refund issued to original payment method</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Loss of Withdrawal Right</h3>
            <p className="text-gray-700 mb-4">You <strong>lose</strong> your 14-day withdrawal right if:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>You expressly requested Services begin immediately upon purchase</li>
              <li>The Services have been fully performed during the 14-day period (deliverables provided)</li>
            </ul>
            <p className="text-gray-700 mb-4"><strong>Consent Language at Purchase:</strong></p>
            <p className="text-gray-700 mb-4 italic">
              "By submitting this request, you agree that Services begin immediately and you waive your 14-day EU withdrawal
              right once we provide the complete gap analysis report."
            </p>
            <p className="text-gray-700 mb-4"><strong>Note:</strong></p>
            <p className="text-gray-700 mb-4">
              Most projects complete within 48-72 hours, often before the 14-day period expires. If you receive deliverables
              and then request withdrawal, you may only receive a partial refund (pro-rated for work not yet performed).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. CHARGEBACKS AND DISPUTES</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Contact Us First</h3>
            <p className="text-gray-700 mb-4">
              <strong>Before disputing charges with your bank or credit card company, please contact us:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Email: info@auditsready.com</li>
              <li>Phone: +1-403-404-4643</li>
              <li>We will work with you to resolve any billing issues</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Chargeback Consequences</h3>
            <p className="text-gray-700 mb-4">If you dispute a charge without contacting us first:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Your account may be immediately suspended or terminated</li>
              <li>We will provide evidence to the bank/credit card company</li>
              <li>If the chargeback is found invalid, you remain liable for the charges plus any chargeback fees</li>
              <li>We may pursue collection for valid charges</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Fraudulent Chargebacks</h3>
            <p className="text-gray-700 mb-4">
              Initiating fraudulent chargebacks (disputing valid charges) may result in:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Permanent account termination</li>
              <li>Legal action to recover amounts owed</li>
              <li>Reporting to fraud prevention databases</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. ALTERNATIVE OPTIONS</h2>
            <p className="text-gray-700 mb-4">Instead of requesting a refund, you may:</p>

            <p className="text-gray-700 mb-4"><strong>Request Project Modifications:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>If you're unsatisfied with deliverables, request revisions (within reason)</li>
              <li>We will clarify any unclear recommendations at no extra charge</li>
              <li>Limited to 1 revision round per project (additional revisions may incur fees)</li>
            </ul>

            <p className="text-gray-700 mb-4"><strong>Schedule Follow-Up Consultation:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>30-minute call to discuss implementation questions</li>
              <li>Clarification on gap analysis findings</li>
              <li>May be included with project or charged separately</li>
            </ul>

            <p className="text-gray-700 mb-4"><strong>Request Partial Deliverables:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>If project scope was too large, we can deliver partial results</li>
              <li>Pro-rated refund for undelivered portions</li>
              <li>Useful if budget constraints arise mid-project</li>
            </ul>

            <p className="text-gray-700 mb-4"><strong>Postpone Project Completion:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>If you need more time to gather documents, we can pause</li>
              <li>Pause for up to 30 days with no additional charges</li>
              <li>After 30 days, may require restarting project (new fees apply)</li>
            </ul>

            <p className="text-gray-700 mb-4">Contact us at info@auditsready.com to discuss alternatives.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. DATA AFTER PROJECT COMPLETION</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1 Data Retention</h3>
            <p className="text-gray-700 mb-4">After project completion or cancellation:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li><strong>90 days:</strong> Customer Data (documents submitted) retained for reference</li>
              <li><strong>After 90 days:</strong> Data permanently deleted from our systems</li>
              <li><strong>Payment records:</strong> Retained for 7 years (tax/accounting requirements)</li>
            </ul>
            <p className="text-gray-700 mb-4"><strong>Why 90 days?</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Allows time for follow-up questions about your gap analysis</li>
              <li>Gives you time to implement recommendations and ask for clarification</li>
              <li>Meets regulatory data retention requirements</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.2 Early Deletion Request</h3>
            <p className="text-gray-700 mb-4">
              You may request immediate deletion of Customer Data by emailing info@auditsready.com with "Data Deletion Request" in the subject line.
            </p>
            <p className="text-gray-700 mb-4"><strong>Note:</strong> We may retain some data longer if required by law:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Payment records for tax purposes (7 years)</li>
              <li>Billing information for accounting compliance</li>
              <li>Correspondence related to disputes or legal matters</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. CONTACT</h2>
            <p className="text-gray-700 mb-4">For cancellation or refund requests:</p>
            <p className="text-gray-700 mb-2"><strong>AuditsReady</strong></p>
            <p className="text-gray-700 mb-2">Email: info@auditsready.com</p>
            <p className="text-gray-700 mb-2">Phone: +1-403-404-4643</p>
            <p className="text-gray-700 mb-4">Website: https://auditsready.com</p>
            <p className="text-gray-700 mb-4">
              <strong>Response Time:</strong> We aim to respond to all cancellation and refund requests within 1-2 business days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. CHANGES TO THIS POLICY</h2>
            <p className="text-gray-700 mb-4">
              We may update this Policy at any time by posting revised terms on our website. Changes do not affect existing
              projects or agreements unless required by law.
            </p>
            <p className="text-gray-700 mb-4">
              Material changes will be communicated via email to all active customers.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
