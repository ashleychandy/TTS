import './Legal.css'

export default function Privacy() {
  return (
    <div className="legal-page">
      <section className="legal-header">
        <div className="legal-header-content">
          <h1 className="headline">Privacy Policy</h1>
          <p className="legal-updated">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-body">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly, such as when you contact us, subscribe to our
            services, or apply for a position. This may include your name, email address, phone number,
            and other relevant business information.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide our services, respond to your inquiries, send
            promotional communications (if you opt-in), and improve our offerings. We do not sell your
            personal information to third parties.
          </p>

          <h2>3. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. However, no
            method of transmission over the internet is completely secure. We cannot guarantee absolute
            security.
          </p>

          <h2>4. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy
            practices of these external sites. We encourage you to review their privacy policies before
            providing any personal information.
          </p>

          <h2>5. Cookies</h2>
          <p>
            We may use cookies and similar tracking technologies to enhance your experience on our
            website. You can control cookie preferences through your browser settings.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information. To exercise these
            rights, please contact us at privacy@thirsttrapstudios.com.
          </p>

          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any significant
            changes by posting the updated policy on our website with a new "Last updated" date.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about our privacy practices, please contact us at
            privacy@thirsttrapstudios.com.
          </p>
        </div>
      </section>
    </div>
  )
}
