export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, company, email, phone, message } = req.body;

  // Basic validation
  if (!name || !company || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Using Resend API for email sending
    // Note: You'll need to set RESEND_API_KEY environment variable in Vercel
    const emailContent = `
New AI Demo Request from AuditsReady Website

Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}

---
Note: Customer expects a call within 24 hours.
Submitted: ${new Date().toLocaleString()}
    `;

    // Send email using fetch to Resend API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'AuditsReady Contact Form <onboarding@resend.dev>',
        to: 'info@auditsready.com',
        subject: `AI Demo Request from ${name} - ${company}`,
        text: emailContent,
        reply_to: email
      })
    });

    if (!resendResponse.ok) {
      throw new Error('Failed to send email');
    }

    return res.status(200).json({
      success: true,
      message: 'Request submitted successfully!'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send request. Please try again or email us directly at info@auditsready.com'
    });
  }
}
