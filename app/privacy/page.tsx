import type { Metadata } from "next";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import styles from "./privacy.module.css";
import StarIcon from "@/components/ui/StarIcon";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms | TTS",
  description: "Privacy Policy, Terms and Conditions, and Copyright Policy for TTS Creative Agency.",
};

export default function Privacy() {
  return (
    <>
      <main>
        <section className={styles.privacySection} aria-labelledby="privacy-heading">
          <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
              <p className={styles.topLabel}>LEGAL</p>
              <h1 id="privacy-heading" className={styles.headline}>
                PRIVACY & TERMS
              </h1>
              <p className={styles.subtext}>
                YOUR PRIVACY AND RIGHTS MATTER TO US. PLEASE REVIEW OUR POLICIES
                BELOW.
              </p>
              <StarIcon 
                className={`${styles.starIcon} ${styles.redStar}`}
                fill="var(--red)"
              />
            </div>

            {/* Privacy Policy */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Privacy Policy</h2>
              <div className={styles.content}>
                <p className={styles.paragraph}>
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>

                <h3 className={styles.subheading}>1. Information We Collect</h3>
                <p className={styles.paragraph}>
                  We collect information you provide directly to us when you contact us through our website, 
                  request services, or communicate with us. This may include your name, email address, 
                  phone number, company name, and any other information you choose to provide.
                </p>

                <h3 className={styles.subheading}>2. How We Use Your Information</h3>
                <p className={styles.paragraph}>
                  We use the information we collect to respond to your inquiries, provide our services, 
                  communicate with you about projects, send you updates and marketing communications 
                  (with your consent), and improve our website and services.
                </p>

                <h3 className={styles.subheading}>3. Information Sharing</h3>
                <p className={styles.paragraph}>
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your information with service providers who assist us in operating our website and 
                  conducting our business, subject to confidentiality obligations.
                </p>

                <h3 className={styles.subheading}>4. Data Security</h3>
                <p className={styles.paragraph}>
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h3 className={styles.subheading}>5. Your Rights</h3>
                <p className={styles.paragraph}>
                  You have the right to access, correct, or delete your personal information. You may also 
                  object to or restrict certain processing of your data. To exercise these rights, please 
                  contact us using the information provided below.
                </p>

                <h3 className={styles.subheading}>6. Cookies</h3>
                <p className={styles.paragraph}>
                  Our website may use cookies to enhance user experience. You can choose to disable cookies 
                  through your browser settings, though this may affect the functionality of our website.
                </p>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Terms and Conditions</h2>
              <div className={styles.content}>
                <h3 className={styles.subheading}>1. Acceptance of Terms</h3>
                <p className={styles.paragraph}>
                  By accessing and using this website, you accept and agree to be bound by these Terms and 
                  Conditions. If you do not agree to these terms, please do not use our website or services.
                </p>

                <h3 className={styles.subheading}>2. Services</h3>
                <p className={styles.paragraph}>
                  We provide branding, design, and digital services as described on our website. All 
                  service agreements are subject to separate written contracts that will specify the scope, 
                  deliverables, timeline, and fees.
                </p>

                <h3 className={styles.subheading}>3. Use of Website</h3>
                <p className={styles.paragraph}>
                  You agree to use our website only for lawful purposes and in a way that does not infringe 
                  upon the rights of others or restrict their use and enjoyment of the website.
                </p>

                <h3 className={styles.subheading}>4. Limitation of Liability</h3>
                <p className={styles.paragraph}>
                  We shall not be liable for any indirect, incidental, special, consequential, or punitive 
                  damages resulting from your use of or inability to use our website or services.
                </p>

                <h3 className={styles.subheading}>5. Modifications</h3>
                <p className={styles.paragraph}>
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be 
                  effective immediately upon posting to the website. Your continued use of the website 
                  following any changes constitutes acceptance of those changes.
                </p>

                <h3 className={styles.subheading}>6. Governing Law</h3>
                <p className={styles.paragraph}>
                  These Terms and Conditions shall be governed by and construed in accordance with applicable 
                  laws, without regard to conflict of law principles.
                </p>
              </div>
            </div>

            {/* Copyright/IP Policy */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Copyright & Intellectual Property Policy</h2>
              <div className={styles.content}>
                <h3 className={styles.subheading}>1. Ownership</h3>
                <p className={styles.paragraph}>
                  All content on this website, including but not limited to text, graphics, logos, images, 
                  design work, and software, is the property of our company or our content suppliers and is 
                  protected by international copyright laws.
                </p>

                <h3 className={styles.subheading}>2. Portfolio Work</h3>
                <p className={styles.paragraph}>
                  Work displayed in our portfolio remains the intellectual property of our clients, unless 
                  otherwise specified. We display this work with permission to showcase our capabilities and 
                  experience.
                </p>

                <h3 className={styles.subheading}>3. Client Work</h3>
                <p className={styles.paragraph}>
                  Upon full payment and completion of services, clients receive ownership rights to final 
                  deliverables as specified in the service agreement. We retain the right to display 
                  completed work in our portfolio unless otherwise agreed in writing.
                </p>

                <h3 className={styles.subheading}>4. Trademarks</h3>
                <p className={styles.paragraph}>
                  All trademarks, service marks, trade names, and logos displayed on this website are 
                  proprietary to their respective owners. Use of any trademarks without express written 
                  permission is strictly prohibited.
                </p>

                <h3 className={styles.subheading}>5. Copyright Infringement</h3>
                <p className={styles.paragraph}>
                  If you believe that any content on our website infringes your copyright, please contact 
                  us immediately with detailed information about the alleged infringement. We will 
                  investigate and take appropriate action.
                </p>

                <h3 className={styles.subheading}>6. License to Use Website</h3>
                <p className={styles.paragraph}>
                  We grant you a limited, non-exclusive, non-transferable license to access and use our 
                  website for personal, non-commercial purposes. You may not reproduce, distribute, modify, 
                  or create derivative works from our website content without express written permission.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className={styles.contactSection}>
              <h3 className={styles.contactTitle}>Questions or Concerns?</h3>
              <p className={styles.contactText}>
                If you have any questions about these policies or need to exercise your rights, 
                please contact us and we&apos;ll be happy to assist you.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}
