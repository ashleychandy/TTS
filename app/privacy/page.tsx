import type { Metadata } from "next";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import StarIcon from "@/components/ui/StarIcon";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms | TTS",
  description:
    "Privacy Policy, Terms and Conditions, and Copyright Policy for TTS Creative Agency.",
};

export default function Privacy() {
  return (
    <>
      <main>
        <section
          className="relative w-full bg-bg font-sans px-[3vw] py-[4vw] min-h-screen isolate md:px-5 md:py-12 sm:px-4 sm:py-10"
          aria-labelledby="privacy-heading"
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-[6vw] relative md:mb-12 sm:mb-10">
              <p className="text-[0.7vw] font-medium text-primary-red-medium uppercase tracking-widest mb-[2vw] md:text-xs md:mb-4 sm:text-[10px] sm:mb-3">
                LEGAL
              </p>
              <h1
                id="privacy-heading"
                className="text-[4.5vw] font-semibold text-primary-red-dark uppercase leading-[1.05] -tracking-[0.03em] mb-[2vw] md:text-5xl md:mb-5 sm:text-4xl sm:mb-4"
              >
                PRIVACY & TERMS
              </h1>
              <p className="text-[0.9vw] font-normal text-text-dark uppercase leading-[1.4] tracking-widest max-w-[40vw] mb-[3vw] md:text-base md:max-w-full md:mb-8 sm:text-sm sm:mb-7">
                YOUR PRIVACY AND RIGHTS MATTER TO US. PLEASE REVIEW OUR POLICIES BELOW.
              </p>
              <StarIcon
                className="w-[3vw] h-[3vw] md:w-11 md:h-11 sm:w-10 sm:h-10"
                fill="#6e0505"
              />
            </div>

            <div className="mb-[5vw] pb-[4vw] border-b border-black/10 last:border-b-0 md:mb-12 md:pb-10 sm:mb-10 sm:pb-8">
              <h2 className="text-[2.5vw] font-semibold text-primary-red-dark uppercase -tracking-[0.02em] mb-[2.5vw] md:text-3xl md:mb-6 sm:text-2xl sm:mb-5">
                Privacy Policy
              </h2>
              <div className="max-w-[60vw] md:max-w-full">
                <p className="text-[0.95vw] font-normal text-text-grey-privacy leading-[1.7] mb-[1.5vw] md:text-base md:mb-4 sm:text-sm sm:mb-3">
                  <strong className="text-text-dark font-semibold">Last Updated:</strong>{" "}
                  {new Date().toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>

                <h3 className="text-[1.2vw] font-semibold text-text-dark mt-[2vw] mb-[1vw] uppercase tracking-wide md:text-lg md:mt-6 md:mb-3 sm:text-base sm:mt-5 sm:mb-2">
                  1. Information We Collect
                </h3>
                <p className="text-[0.95vw] font-normal text-text-grey-privacy leading-[1.7] mb-[1.5vw] md:text-base md:mb-4 sm:text-sm sm:mb-3">
                  We collect information you provide directly to us when you contact us through our
                  website, request services, or communicate with us. This may include your name,
                  email address, phone number, company name, and any other information you choose to
                  provide.
                </p>

                <h3 className="text-[1.2vw] font-semibold text-text-dark mt-[2vw] mb-[1vw] uppercase tracking-wide md:text-lg md:mt-6 md:mb-3 sm:text-base sm:mt-5 sm:mb-2">
                  2. How We Use Your Information
                </h3>
                <p className="text-[0.95vw] font-normal text-text-grey-privacy leading-[1.7] mb-[1.5vw] md:text-base md:mb-4 sm:text-sm sm:mb-3">
                  We use the information we collect to respond to your inquiries, provide our
                  services, communicate with you about projects, send you updates and marketing
                  communications (with your consent), and improve our website and services.
                </p>

                <h3 className="text-[1.2vw] font-semibold text-text-dark mt-[2vw] mb-[1vw] uppercase tracking-wide md:text-lg md:mt-6 md:mb-3 sm:text-base sm:mt-5 sm:mb-2">
                  3. Information Sharing
                </h3>
                <p className="text-[0.95vw] font-normal text-text-grey-privacy leading-[1.7] mb-[1.5vw] md:text-base md:mb-4 sm:text-sm sm:mb-3">
                  We do not sell, trade, or rent your personal information to third parties. We may
                  share your information with service providers who assist us in operating our
                  website and conducting our business, subject to confidentiality obligations.
                </p>

                <h3 className="text-[1.2vw] font-semibold text-text-dark mt-[2vw] mb-[1vw] uppercase tracking-wide md:text-lg md:mt-6 md:mb-3 sm:text-base sm:mt-5 sm:mb-2">
                  4. Data Security
                </h3>
                <p className="text-[0.95vw] font-normal text-text-grey-privacy leading-[1.7] mb-[1.5vw] md:text-base md:mb-4 sm:text-sm sm:mb-3">
                  We implement appropriate technical and organizational measures to protect your
                  personal information against unauthorized access, alteration, disclosure, or
                  destruction.
                </p>

                <h3 className="text-[1.2vw] font-semibold text-text-dark mt-[2vw] mb-[1vw] uppercase tracking-wide md:text-lg md:mt-6 md:mb-3 sm:text-base sm:mt-5 sm:mb-2">
                  5. Your Rights
                </h3>
                <p className="text-[0.95vw] font-normal text-text-grey-privacy leading-[1.7] mb-[1.5vw] md:text-base md:mb-4 sm:text-sm sm:mb-3">
                  You have the right to access, correct, or delete your personal information. You
                  may also object to or restrict certain processing of your data. To exercise these
                  rights, please contact us using the information provided below.
                </p>

                <h3 className="text-[1.2vw] font-semibold text-text-dark mt-[2vw] mb-[1vw] uppercase tracking-wide md:text-lg md:mt-6 md:mb-3 sm:text-base sm:mt-5 sm:mb-2">
                  6. Cookies
                </h3>
                <p className="text-[0.95vw] font-normal text-text-grey-privacy leading-[1.7] mb-[1.5vw] md:text-base md:mb-4 sm:text-sm sm:mb-3">
                  Our website may use cookies to enhance user experience. You can choose to disable
                  cookies through your browser settings, though this may affect the functionality of
                  our website.
                </p>
              </div>
            </div>

            <div className="mb-[5vw] pb-[4vw] border-b border-black/10 last:border-b-0 md:mb-12 md:pb-10 sm:mb-10 sm:pb-8">
              <h2 className="text-[2.5vw] font-semibold text-primary-red-dark uppercase -tracking-[0.02em] mb-[2.5vw] md:text-3xl md:mb-6 sm:text-2xl sm:mb-5">
                Terms and Conditions
              </h2>
              <div className="max-w-[60vw] md:max-w-full">
                <h3 className="text-[1.2vw] font-semibold text-text-dark mt-[2vw] mb-[1vw] uppercase tracking-wide md:text-lg md:mt-6 md:mb-3 sm:text-base sm:mt-5 sm:mb-2">
                  1. Acceptance of Terms
                </h3>
                <p className="text-[0.95vw] font-normal text-text-grey-privacy leading-[1.7] mb-[1.5vw] md:text-base md:mb-4 sm:text-sm sm:mb-3">
                  By accessing and using this website, you accept and agree to be bound by these
                  Terms and Conditions. If you do not agree to these terms, please do not use our
                  website or services.
                </p>

                <h3 className="text-[1.2vw] font-semibold text-text-dark mt-[2vw] mb-[1vw] uppercase tracking-wide md:text-lg md:mt-6 md:mb-3 sm:text-base sm:mt-5 sm:mb-2">
                  2. Services
                </h3>
                <p className="text-[0.95vw] font-normal text-text-grey-privacy leading-[1.7] mb-[1.5vw] md:text-base md:mb-4 sm:text-sm sm:mb-3">
                  We provide branding, design, and digital services as described on our website. All
                  service agreements are subject to separate written contracts that will specify the
                  scope, deliverables, timeline, and fees.
                </p>

                <h3 className="text-[1.2vw] font-semibold text-text-dark mt-[2vw] mb-[1vw] uppercase tracking-wide md:text-lg md:mt-6 md:mb-3 sm:text-base sm:mt-5 sm:mb-2">
                  3. Use of Website
                </h3>
                <p className="text-[0.95vw] font-normal text-text-grey-privacy leading-[1.7] mb-[1.5vw] md:text-base md:mb-4 sm:text-sm sm:mb-3">
                  You agree to use our website only for lawful purposes and in a way that does not
                  infringe upon the rights of others or restrict their use and enjoyment of the
                  website.
                </p>

                <h3 className="text-[1.2vw] font-semibold text-text-dark mt-[2vw] mb-[1vw] uppercase tracking-wide md:text-lg md:mt-6 md:mb-3 sm:text-base sm:mt-5 sm:mb-2">
                  4. Limitation of Liability
                </h3>
                <p className="text-[0.95vw] font-normal text-text-grey-privacy leading-[1.7] mb-[1.5vw] md:text-base md:mb-4 sm:text-sm sm:mb-3">
                  We shall not be liable for any indirect, incidental, special, consequential, or
                  punitive damages resulting from your use of or inability to use our website or
                  services.
                </p>

                <h3 className="text-[1.2vw] font-semibold text-text-dark mt-[2vw] mb-[1vw] uppercase tracking-wide md:text-lg md:mt-6 md:mb-3 sm:text-base sm:mt-5 sm:mb-2">
                  5. Modifications
                </h3>
                <p className="text-[0.95vw] font-normal text-text-grey-privacy leading-[1.7] mb-[1.5vw] md:text-base md:mb-4 sm:text-sm sm:mb-3">
                  We reserve the right to modify these Terms and Conditions at any time. Changes
                  will be effective immediately upon posting to the website. Your continued use of
                  the website following any changes constitutes acceptance of those changes.
                </p>

                <h3 className="text-[1.2vw] font-semibold text-text-dark mt-[2vw] mb-[1vw] uppercase tracking-wide md:text-lg md:mt-6 md:mb-3 sm:text-base sm:mt-5 sm:mb-2">
                  6. Governing Law
                </h3>
                <p className="text-[0.95vw] font-normal text-text-grey-privacy leading-[1.7] mb-[1.5vw] md:text-base md:mb-4 sm:text-sm sm:mb-3">
                  These Terms and Conditions shall be governed by and construed in accordance with
                  applicable laws, without regard to conflict of law principles.
                </p>
              </div>
            </div>

            <div className="mb-[5vw] pb-[4vw] border-b border-black/10 last:border-b-0 md:mb-12 md:pb-10 sm:mb-10 sm:pb-8">
              <h2 className="text-[2.5vw] font-semibold text-primary-red-dark uppercase -tracking-[0.02em] mb-[2.5vw] md:text-3xl md:mb-6 sm:text-2xl sm:mb-5">
                Copyright & Intellectual Property Policy
              </h2>
              <div className="max-w-[60vw] md:max-w-full">
                <h3 className="text-[1.2vw] font-semibold text-text-dark mt-[2vw] mb-[1vw] uppercase tracking-wide md:text-lg md:mt-6 md:mb-3 sm:text-base sm:mt-5 sm:mb-2">
                  1. Ownership
                </h3>
                <p className="text-[0.95vw] font-normal text-text-grey-privacy leading-[1.7] mb-[1.5vw] md:text-base md:mb-4 sm:text-sm sm:mb-3">
                  All content on this website, including but not limited to text, graphics, logos,
                  images, design work, and software, is the property of our company or our content
                  suppliers and is protected by international copyright laws.
                </p>

                <h3 className="text-[1.2vw] font-semibold text-text-dark mt-[2vw] mb-[1vw] uppercase tracking-wide md:text-lg md:mt-6 md:mb-3 sm:text-base sm:mt-5 sm:mb-2">
                  2. Portfolio Work
                </h3>
                <p className="text-[0.95vw] font-normal text-text-grey-privacy leading-[1.7] mb-[1.5vw] md:text-base md:mb-4 sm:text-sm sm:mb-3">
                  Work displayed in our portfolio remains the intellectual property of our clients,
                  unless otherwise specified. We display this work with permission to showcase our
                  capabilities and experience.
                </p>

                <h3 className="text-[1.2vw] font-semibold text-text-dark mt-[2vw] mb-[1vw] uppercase tracking-wide md:text-lg md:mt-6 md:mb-3 sm:text-base sm:mt-5 sm:mb-2">
                  3. Client Work
                </h3>
                <p className="text-[0.95vw] font-normal text-text-grey-privacy leading-[1.7] mb-[1.5vw] md:text-base md:mb-4 sm:text-sm sm:mb-3">
                  Upon full payment and completion of services, clients receive ownership rights to
                  final deliverables as specified in the service agreement. We retain the right to
                  display completed work in our portfolio unless otherwise agreed in writing.
                </p>

                <h3 className="text-[1.2vw] font-semibold text-text-dark mt-[2vw] mb-[1vw] uppercase tracking-wide md:text-lg md:mt-6 md:mb-3 sm:text-base sm:mt-5 sm:mb-2">
                  4. Trademarks
                </h3>
                <p className="text-[0.95vw] font-normal text-text-grey-privacy leading-[1.7] mb-[1.5vw] md:text-base md:mb-4 sm:text-sm sm:mb-3">
                  All trademarks, service marks, trade names, and logos displayed on this website
                  are proprietary to their respective owners. Use of any trademarks without express
                  written permission is strictly prohibited.
                </p>

                <h3 className="text-[1.2vw] font-semibold text-text-dark mt-[2vw] mb-[1vw] uppercase tracking-wide md:text-lg md:mt-6 md:mb-3 sm:text-base sm:mt-5 sm:mb-2">
                  5. Copyright Infringement
                </h3>
                <p className="text-[0.95vw] font-normal text-text-grey-privacy leading-[1.7] mb-[1.5vw] md:text-base md:mb-4 sm:text-sm sm:mb-3">
                  If you believe that any content on our website infringes your copyright, please
                  contact us immediately with detailed information about the alleged infringement.
                  We will investigate and take appropriate action.
                </p>

                <h3 className="text-[1.2vw] font-semibold text-text-dark mt-[2vw] mb-[1vw] uppercase tracking-wide md:text-lg md:mt-6 md:mb-3 sm:text-base sm:mt-5 sm:mb-2">
                  6. License to Use Website
                </h3>
                <p className="text-[0.95vw] font-normal text-text-grey-privacy leading-[1.7] mb-[1.5vw] md:text-base md:mb-4 sm:text-sm sm:mb-3">
                  We grant you a limited, non-exclusive, non-transferable license to access and use
                  our website for personal, non-commercial purposes. You may not reproduce,
                  distribute, modify, or create derivative works from our website content without
                  express written permission.
                </p>
              </div>
            </div>

            <div className="bg-[#f8f8f8] px-[3vw] py-[3vw] rounded-[1vw] mt-[4vw] md:px-5 md:py-6 md:rounded-xl md:mt-8 sm:px-5 sm:py-6 sm:rounded-2.5xl sm:mt-7">
              <h3 className="text-[1.5vw] font-semibold text-primary-red-dark uppercase -tracking-[0.01em] mb-[1vw] md:text-xl md:mb-3 sm:text-lg sm:mb-2">
                Questions or Concerns?
              </h3>
              <p className="text-[0.95vw] font-normal text-text-grey-privacy leading-[1.6] md:text-base sm:text-sm">
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
