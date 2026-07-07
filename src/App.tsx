import { useState, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { useLocation, Link } from 'react-router-dom'

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Analytics />
      <Hero onNav={scrollToSection} />
      <Services />
      <Process />
      <CTA />
    </>
  )
}

// ============================================================================
// LAYOUT COMPONENT
// ============================================================================

export function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Scroll spy logic to update active section
      const sections = ['hero', 'services', 'process', 'contact']
      const scrollPosition = window.scrollY + 100 // offset for nav height

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [menuOpen])

  return (
    <div className="app">
      <style>{styles}</style>
      <div className="noise" />
      <Nav
        scrolled={scrolled}
        activeSection={activeSection}
        onNav={scrollToSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

// ============================================================================
// NAV COMPONENT
// ============================================================================

interface NavProps {
  scrolled: boolean
  activeSection: string
  onNav: (id: string) => void
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

function Nav({ scrolled, activeSection, onNav, menuOpen, setMenuOpen }: NavProps) {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const sections = ['hero', 'services', 'process', 'contact']

  const handleNavClick = (id: string) => {
    if (isHome) {
      onNav(id)
      setMenuOpen(false)
    }
  }

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <Link to="/" className="nav-logo">
          THIRST TRAP STUDIOS
        </Link>

        <div className="nav-desktop">
          {isHome ? (
            sections.map((section) => (
              <button
                key={section}
                className={`nav-link ${activeSection === section ? 'nav-link--active' : ''}`}
                onClick={() => handleNavClick(section)}
              >
                {section.toUpperCase()}
              </button>
            ))
          ) : (
            <>
              <Link to="/" className="nav-link">
                HOME
              </Link>
              <Link to="/careers" className={`nav-link ${location.pathname === '/careers' ? 'nav-link--active' : ''}`}>
                CAREERS
              </Link>
            </>
          )}
        </div>

        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen} aria-controls="mobile-menu">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true">
          <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <span className="material-symbols-outlined">close</span>
          </button>
          <div className="mobile-menu-links">
            {isHome ? (
              sections.map((section) => (
                <button
                  key={section}
                  className="mobile-menu-link"
                  onClick={() => handleNavClick(section)}
                >
                  {section.toUpperCase()}
                </button>
              ))
            ) : (
              <>
                <Link to="/" className="mobile-menu-link">
                  HOME
                </Link>
                <Link to="/careers" className="mobile-menu-link">
                  CAREERS
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

// ============================================================================
// HERO COMPONENT
// ============================================================================

function Hero({ onNav }: { onNav: (id: string) => void }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <img src="/bg_1.png" alt="Hero background" />
      </div>

      <div className="hero-content">
        <div className="eyebrow">01 / THE COLLECTIVE</div>

        <h1 className="headline hero-headline">
          AI that feels human.
          <br />
          <span className="headline-accent">Growth that defies logic.</span>
        </h1>

        <p className="lead">
          We operate at the intersection of high fashion and cutting-edge technology. Provocative
          strategy meets disciplined execution.
        </p>

        <div className="hero-cta">
          <button className="btn" onClick={() => onNav('process')}>
            <span>Explore Our Work</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <button className="btn-secondary" onClick={() => onNav('services')}>
            <span>Our Services</span>
            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
              arrow_forward
            </span>
          </button>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-track">
          <div className="scroll-fill" />
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// SERVICES COMPONENT
// ============================================================================

const SERVICES = [
  {
    num: '01',
    title: 'Brand Strategy',
    desc: 'Provocative positioning that cuts through noise. We architect narratives for brands ready to challenge conventions.',
    tags: ['Positioning', 'Narrative Design', 'Competitive Analysis'],
  },
  {
    num: '02',
    title: 'Creative Direction',
    desc: 'High-concept campaigns that blur the line between art and commerce. From concept to execution with uncompromising aesthetic standards.',
    tags: ['Art Direction', 'Campaign Design', 'Visual Storytelling'],
  },
  {
    num: '03',
    title: 'Digital Production',
    desc: 'Production-grade digital experiences. We build interactive narratives that engage, provoke, and convert.',
    tags: ['Web Development', 'Interactive Design', 'UX/UI'],
  },
  {
    num: '04',
    title: 'AI Integration',
    desc: 'Cutting-edge AI implementation. We leverage machine learning to create experiences that feel human.',
    tags: ['Machine Learning', 'Automation', 'Personalization'],
  },
]

function Services() {
  return (
    <section id="services" className="section services">
      <div className="section-header">
        <div>
          <div className="eyebrow">02 / CAPABILITIES</div>
          <h2 className="headline headline-lg">Editorial Services</h2>
        </div>
        <p className="section-intro">
          A curated suite of disciplines operating at the intersection of high fashion, brutalist
          aesthetics, and raw computational power.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map((service, idx) => (
          <div key={service.num} className={`service ${idx % 2 === 1 ? 'service--alt' : ''}`}>
            <div className="service-header">
              <div className="service-num">{service.num}</div>
              <h3 className="headline headline-md">{service.title}</h3>
            </div>

            <div className="service-divider" />

            <p className="service-desc">{service.desc}</p>

            <ul className="service-tags">
              {service.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

// ============================================================================
// PROCESS COMPONENT
// ============================================================================

const PHASES = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We immerse ourselves in your world. Market analysis, competitive landscape, strategic imperatives.',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'Provocative hypotheses. We challenge assumptions and architect the narrative foundation.',
  },
  {
    num: '03',
    title: 'Ideation',
    desc: 'Conceptual exploration. High-risk, high-reward ideas that break category conventions.',
  },
  {
    num: '04',
    title: 'Execution',
    desc: 'Meticulous production. Every detail serves the strategy. Pixel-perfect, code-clean.',
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'Strategic deployment. Timed, orchestrated, and calibrated for maximum impact.',
  },
]

function Process() {
  return (
    <section id="process" className="section process">
      <div className="process-header">
        <div className="eyebrow">03 / THE WORKFLOW</div>
        <h2 className="headline headline-lg">Our Process</h2>
      </div>

      <div className="phases">
        {PHASES.map((phase, idx) => (
          <div key={phase.num} className="phase">
            <div className="phase-marker">
              <span className="phase-num">{phase.num}</span>
              {idx < PHASES.length - 1 && <div className="phase-connector" />}
            </div>

            <div className="phase-content">
              <h3 className="headline headline-md">{phase.title}</h3>
              <p className="phase-desc">{phase.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ============================================================================
// CTA COMPONENT
// ============================================================================

function CTA() {
  return (
    <section id="contact" className="section cta">
      <div className="cta-content">
        <div className="eyebrow">04 / INVITATION</div>

        <h2 className="headline headline-lg cta-headline">The future is selective. Join the few.</h2>

        <p className="cta-description">
          We partner with visionary brands ready to discard the conventional. Applications for the
          next intake are strictly limited.
        </p>

        <a href="mailto:contact@thirsttrapstudios.com" className="btn btn-primary">
          <span>Initiate Contact</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </section>
  )
}

// ============================================================================
// FOOTER COMPONENT
// ============================================================================

function Footer() {
  const currentYear = new Date().getFullYear()
  const location = useLocation()
  const isHome = location.pathname === '/'

  const handleNavClick = (sectionId: string) => {
    if (isHome) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Navigate to home then scroll
      window.location.href = `/#${sectionId}`
    }
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <h3 className="footer-logo">THIRST TRAP</h3>
            <p className="footer-desc">
              A premium AI marketing collective shaping the digital frontier with uncompromising
              quality and strategic excellence.
            </p>
          </div>

          <div className="footer-links">
            <nav className="footer-nav">
              <h4 className="footer-section-title">Navigate</h4>
              <ul>
                <li>
                  <button onClick={() => handleNavClick('services')}>Services</button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('process')}>Process</button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('contact')}>Contact</button>
                </li>
              </ul>
            </nav>

            <nav className="footer-nav">
              <h4 className="footer-section-title">Social</h4>
              <ul>
                <li>
                  <a href="https://www.instagram.com/thirst.trap.studios/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/thirst-trap-studios/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
              </ul>
            </nav>

            <nav className="footer-nav">
              <h4 className="footer-section-title">Legal</h4>
              <ul>
                <li>
                  <Link to="/privacy">Privacy</Link>
                </li>
                <li>
                  <Link to="/terms">Terms</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} THIRST TRAP STUDIOS. ALL RIGHTS RESERVED.
          </p>
          <p className="footer-credit">DESIGNED & BUILT FOR THE FUTURE</p>
        </div>
      </div>
    </footer>
  )
}

// ============================================================================
// CAREER PAGE COMPONENT
// ============================================================================

const JOB_OPENING = {
  title: 'Marketing Intern',
  type: 'Full-time Remote',
  location: 'India',
  desc: 'Support our marketing and client acquisition efforts through lead generation, content creation, and campaign execution.',
  company: 'Thirst Trap Studios is an AI-powered marketing agency that helps e-commerce and DTC brands grow through creative advertising, content production, lead generation, and performance marketing. We combine AI tools with modern marketing strategies to deliver high-quality creative assets and measurable business results.\n\nWe\'re a growing startup focused on innovation, collaboration, and continuous learning. Team members work on real client projects, experiment with new AI tools, and contribute directly to the company\'s growth.',
  role: 'We are looking for a Digital Marketing Intern to support our marketing and client acquisition efforts. In this role, you\'ll assist with lead generation, market research, social media marketing, AI-powered content creation, and campaign execution. You\'ll work closely with the team to identify potential clients, create engaging marketing content, monitor campaign performance, and explore new growth opportunities.',
  qualifications: [
    'Strong written and verbal communication skills.',
    'Interest in digital marketing, AI, and startup environments.',
    'Familiarity with AI tools such as ChatGPT, Claude, or Gemini.',
    'Basic understanding of social media marketing and lead generation.',
    'Ability to conduct market research and identify business opportunities.',
    'Organized, proactive, and able to manage multiple tasks independently.',
    'Currently pursuing or recently completed a degree in Marketing, Business, Communications, or a related field.',
    'Experience with Canva, Google Workspace, Notion, or similar productivity tools is a plus.',
  ],
}

export function Career() {
  return (
    <div className="careers-page">
      <section className="careers-header">
        <div className="careers-header-content">
          <div className="eyebrow">Careers / Join Us</div>
          <h1 className="headline">We're Hiring</h1>
          <p className="careers-intro">
            Join a team of innovators building the future of AI-powered marketing. We're looking for
            talented individuals who are passionate about creative excellence and strategic growth.
          </p>
        </div>
      </section>

      <section className="job-listing">
        <div className="job-header">
          <div>
            <h2 className="headline headline-lg">{JOB_OPENING.title}</h2>
            <div className="job-meta">
              <span className="job-type">{JOB_OPENING.type}</span>
              <span className="job-location">{JOB_OPENING.location}</span>
            </div>
          </div>
        </div>

        <div className="job-content">
          <div className="job-section">
            <h3 className="headline headline-md">About The Job</h3>
            <p>{JOB_OPENING.desc}</p>
          </div>

          <div className="job-section">
            <h3 className="headline headline-md">Company Description</h3>
            <p className="job-paragraph">{JOB_OPENING.company}</p>
          </div>

          <div className="job-section">
            <h3 className="headline headline-md">Role Description</h3>
            <p className="job-paragraph">{JOB_OPENING.role}</p>
          </div>

          <div className="job-section">
            <h3 className="headline headline-md">Qualifications</h3>
            <ul className="qualifications-list">
              {JOB_OPENING.qualifications.map((qual, idx) => (
                <li key={idx}>{qual}</li>
              ))}
            </ul>
          </div>

          <div className="job-section job-cta">
            <p>Ready to join the team?</p>
            <a href="mailto:careers@thirsttrapstudios.com?subject=Marketing%20Intern%20Application" className="btn">
              <span>Apply Now</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

// ============================================================================
// PRIVACY PAGE COMPONENT
// ============================================================================

export function Privacy() {
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

// ============================================================================
// TERMS PAGE COMPONENT
// ============================================================================

export function Terms() {
  return (
    <div className="legal-page">
      <section className="legal-header">
        <div className="legal-header-content">
          <h1 className="headline">Terms of Service</h1>
          <p className="legal-updated">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-body">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and
            provision of this agreement. If you do not agree to abide by the above, please do not use
            this service.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or
            software) on our website for personal, non-commercial transitory viewing only. This is the
            grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="terms-list">
            <li>Modifying or copying the materials</li>
            <li>Using the materials for any commercial purpose or for any public display</li>
            <li>Attempting to decompile or reverse engineer any software contained on the website</li>
            <li>Removing any copyright or other proprietary notations from the materials</li>
            <li>Transferring the materials to another person or "mirroring" the materials on another server</li>
          </ul>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on our website are provided on an "as is" basis. Thirst Trap Studios makes no
            warranties, expressed or implied, and hereby disclaims and negates all other warranties
            including, without limitation, implied warranties or conditions of merchantability, fitness
            for a particular purpose, or non-infringement of intellectual property or other violation of
            rights.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall Thirst Trap Studios or its suppliers be liable for any damages (including,
            without limitation, damages for loss of data or profit, or due to business interruption)
            arising out of the use or inability to use the materials on the website.
          </p>

          <h2>5. Accuracy of Materials</h2>
          <p>
            The materials appearing on our website could include technical, typographical, or
            photographic errors. Thirst Trap Studios does not warrant that any of the materials on our
            website are accurate, complete, or current. We may make changes to the materials on our
            website at any time without notice.
          </p>

          <h2>6. Links</h2>
          <p>
            Thirst Trap Studios has not reviewed all of the sites linked to its website and is not
            responsible for the contents of any such linked site. The inclusion of any link does not
            imply endorsement by Thirst Trap Studios of the site. Use of any such linked website is at
            the user's own risk.
          </p>

          <h2>7. Modifications</h2>
          <p>
            Thirst Trap Studios may revise these terms of service for our website at any time without
            notice. By using this website, you are agreeing to be bound by the then current version of
            these terms of service.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India,
            and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at
            legal@thirsttrapstudios.com.
          </p>
        </div>
      </section>
    </div>
  )
}

// ============================================================================
// NOT FOUND PAGE COMPONENT
// ============================================================================

export function NotFound() {
  return (
    <div className="not-found-page">
      <section className="not-found-content">
        <div className="not-found-inner">
          <h1 className="not-found-code">404</h1>
          <h2 className="headline not-found-title">Page Not Found</h2>
          <p className="not-found-message">
            The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          <div className="not-found-actions">
            <a href="/" className="btn">
              <span>Back to Home</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <button className="btn-secondary" onClick={() => window.history.back()}>
              <span>Go Back</span>
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                arrow_back
              </span>
            </button>
          </div>

          <div className="not-found-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="/careers">Careers</a>
            <a href="mailto:contact@thirsttrapstudios.com">Contact</a>
          </div>
        </div>
      </section>
    </div>
  )
}

// ============================================================================
// EMBEDDED STYLES
// ============================================================================

const styles = `
/* ============================================================================
   GLOBAL & BASE STYLES (from index.css)
   ============================================================================ */

@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Hanken+Grotesk:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Syne:wght@400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

:root {
  --surface-tint: #b1c5ff;
  --inverse-on-surface: #313030;
  --tertiary-container: #4c4d4d;
  --surface-container-highest: #353535;
  --inverse-primary: #2559bd;
  --on-primary-fixed: #001946;
  --surface-container: #20201f;
  --on-secondary: #2f3130;
  --on-error-container: #ffdad6;
  --on-tertiary-container: #bebebe;
  --on-secondary-fixed: #1a1c1b;
  --background: #131313;
  --tertiary: #c6c6c6;
  --surface: #131313;
  --tertiary-fixed: #e3e2e2;
  --on-tertiary: #2f3131;
  --on-surface-variant: #c3c6d5;
  --surface-dim: #131313;
  --on-secondary-fixed-variant: #464746;
  --secondary: #c7c6c5;
  --on-primary: #002c70;
  --on-primary-container: #a5bdff;
  --tertiary-fixed-dim: #c6c6c6;
  --secondary-fixed: #e3e2e0;
  --primary-container: #0047ab;
  --primary: #b1c5ff;
  --inverse-surface: #e5e2e1;
  --surface-container-low: #1c1b1b;
  --surface-variant: #353535;
  --outline-variant: #434653;
  --primary-fixed: #dae2ff;
  --on-tertiary-fixed: #1a1c1c;
  --on-background: #e5e2e1;
  --surface-bright: #393939;
  --on-secondary-container: #b9b8b7;
  --on-surface: #e5e2e1;
  --surface-container-high: #2a2a2a;
  --secondary-container: #484948;
  --secondary-fixed-dim: #c7c6c5;
  --primary-fixed-dim: #b1c5ff;
  --on-primary-fixed-variant: #00419e;
  --error-container: #93000a;
  --error: #ffb4ab;
  --on-error: #690005;
  --surface-container-lowest: #0e0e0e;
  --outline: #8d909e;
  --on-tertiary-fixed-variant: #464747;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body,
#root {
  width: 100%;
  height: 100%;
}

body {
  font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--background);
  color: var(--on-background);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

p {
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: clamp(14px, 2.5vw, 16px);
  line-height: 1.7;
  color: var(--on-surface-variant);
}

a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
  -webkit-tap-highlight-color: transparent;
}

button {
  font-family: inherit;
  border: none;
  background: none;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-tap-highlight-color: transparent;
}

button:focus-visible,
a:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}

.noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.03;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

/* ============================================================================
   APP LAYOUT (from App.css)
   ============================================================================ */

.app {
  position: relative;
  min-height: 100vh;
  background: var(--background);
  overflow-x: hidden;
}

main {
  position: relative;
  z-index: 1;
}

section {
  position: relative;
  scroll-margin-top: 80px;
}

.section {
  padding: 120px clamp(16px, 5vw, 64px);
  border-top: 1px solid var(--outline-variant);
}

.section:first-of-type {
  border-top: none;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border: 1px solid var(--outline-variant);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--on-surface-variant);
  margin-bottom: 24px;
  font-family: 'Geist', monospace;
  font-weight: 500;
}

.headline {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.headline-lg {
  font-size: clamp(1.8rem, 5vw, 4rem);
  line-height: 1.05;
}

.headline-md {
  font-size: clamp(1.2rem, 2.4vw, 2rem);
  line-height: 1.1;
}

.headline-accent {
  color: var(--primary);
}

.lead {
  font-size: clamp(16px, 2.5vw, 18px);
  color: var(--on-surface-variant);
  max-width: 560px;
  line-height: 1.6;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 28px;
  border: 1px solid var(--on-background);
  background: var(--on-background);
  color: var(--background);
  font-family: 'Geist', monospace;
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  z-index: 1;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: -1;
}

.btn:hover {
  color: var(--on-primary-fixed);
}

.btn:hover::before {
  transform: scaleX(1);
}

.btn:active {
  transform: scale(0.98);
}

.btn-secondary {
  background: none;
  border: none;
  color: var(--on-background);
  padding: 4px 0;
  font-size: 11px;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ============================================================================
   NAV STYLES (from Nav.css)
   ============================================================================ */

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px clamp(16px, 5vw, 64px);
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
  background: transparent;
  height: 70px;
}

.nav--scrolled {
  background: rgba(19, 19, 19, 0.95);
  backdrop-filter: blur(12px);
  border-bottom-color: var(--outline-variant);
}

.nav-logo {
  font-family: 'Syne', sans-serif;
  font-size: clamp(14px, 4vw, 16px);
  font-weight: 700;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: var(--on-background);
  white-space: nowrap;
}

.nav-logo:hover {
  color: var(--primary);
}

.nav-desktop {
  display: none;
  gap: 32px;
  align-items: center;
}

@media (min-width: 769px) {
  .nav-desktop {
    display: flex;
  }
}

.nav-link {
  font-family: 'Geist', monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 0;
  color: var(--on-surface-variant);
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--primary);
  transition: width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.nav-link:hover,
.nav-link--active {
  color: var(--primary);
}

.nav-link:hover::after,
.nav-link--active::after {
  width: 100%;
}

.nav-hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--on-background);
  padding: 8px;
  min-width: 48px;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
}

@media (max-width: 768px) {
  .nav-hamburger {
    display: flex;
  }

  .nav {
    padding: 12px 16px;
    height: 64px;
  }
}

.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 40;
  background: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 20px;
  animation: slideDown 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  top: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.mobile-menu-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--on-background);
  padding: 8px;
  min-width: 48px;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-menu-links {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 40px;
}

.mobile-menu-link {
  font-family: 'Syne', sans-serif;
  font-size: clamp(20px, 6vw, 32px);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--on-background);
  text-align: left;
  padding: 20px 0;
  border-bottom: 1px solid var(--outline-variant);
  transition: color 0.3s ease;
  -webkit-tap-highlight-color: transparent;
}

.mobile-menu-link:hover,
.mobile-menu-link:active {
  color: var(--primary);
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* ============================================================================
   HERO STYLES (from Hero.css)
   ============================================================================ */

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 160px clamp(20px, 5vw, 64px) 120px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  background: var(--surface-container);
}

.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.5;
  mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
  display: block;
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 900px;
}

.hero-headline {
  margin: 24px 0 32px;
  line-height: 1.05;
}

.hero-cta {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 48px;
  flex-wrap: wrap;
}

.hero-scroll {
  position: absolute;
  bottom: 40px;
  right: clamp(20px, 5vw, 64px);
  left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  opacity: 0.5;
  pointer-events: none;
  z-index: 20;
}

.hero-scroll span:first-child {
  font-family: 'Geist', monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  transform: rotate(90deg);
  transform-origin: center;
  white-space: nowrap;
}

.scroll-track {
  width: 1px;
  height: 60px;
  background: var(--surface-variant);
  position: relative;
  overflow: hidden;
}

.scroll-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: var(--primary);
  animation: slide 2.2s cubic-bezier(0.19, 1, 0.22, 1) infinite;
}

@keyframes slide {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(300%);
  }
}

/* ============================================================================
   SERVICES STYLES (from Services.css)
   ============================================================================ */

.services {
  background: var(--background);
}

.section-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
  margin-bottom: 80px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--outline-variant);
}

.section-header h2 {
  margin-top: 16px;
}

.section-intro {
  font-size: 18px;
  color: var(--on-surface-variant);
  max-width: 420px;
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 60px;
}

.service {
  display: flex;
  flex-direction: column;
  animation: fadeInUp 0.6s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

.service-header {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: 20px;
}

.service-num {
  font-family: 'Syne', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: var(--primary);
  line-height: 1;
  min-width: 50px;
}

.service-header h3 {
  flex: 1;
}

.service-divider {
  width: 100%;
  height: 1px;
  background: var(--outline-variant);
  margin: 20px 0;
}

.service-desc {
  font-size: 16px;
  line-height: 1.7;
  color: var(--on-surface-variant);
  margin-bottom: 24px;
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  list-style: none;
}

.tag {
  padding: 6px 12px;
  border: 1px solid var(--outline-variant);
  font-family: 'Geist', monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--on-surface-variant);
  transition: all 0.3s ease;
}

.tag:hover {
  border-color: var(--primary);
  color: var(--primary);
}

/* ============================================================================
   PROCESS STYLES (from Process.css)
   ============================================================================ */

.process {
  background: var(--background);
}

.process-header {
  margin-bottom: 80px;
}

.process-header .eyebrow {
  margin-bottom: 16px;
}

.process-header h2 {
  margin-top: 16px;
}

.phases {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.phase {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 40px;
  padding: 40px 0;
  border-bottom: 1px solid var(--outline-variant);
  animation: fadeInUp 0.6s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

.phase:last-child {
  border-bottom: none;
}

.phase-marker {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.phase-num {
  font-family: 'Syne', sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: var(--primary);
  line-height: 1;
}

.phase-connector {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 60px;
  background: linear-gradient(to bottom, var(--primary), transparent);
  opacity: 0.5;
}

.phase:last-child .phase-connector {
  display: none;
}

.phase-content h3 {
  margin-bottom: 12px;
}

.phase-desc {
  font-size: 16px;
  color: var(--on-surface-variant);
  line-height: 1.7;
  max-width: 500px;
}

/* ============================================================================
   CTA STYLES (from CTA.css)
   ============================================================================ */

.cta {
  background: var(--background);
  text-align: left;
}

.cta-content {
  max-width: 700px;
}

.cta-headline {
  margin: 16px 0 24px;
  line-height: 1.05;
}

.cta-description {
  font-size: 18px;
  color: var(--on-surface-variant);
  line-height: 1.7;
  margin-bottom: 40px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 18px 32px;
  background: var(--primary-container);
  color: var(--on-primary-container);
  font-family: 'Geist', monospace;
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 500;
  border: 1px solid var(--primary-container);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: -1;
}

.btn-primary:hover {
  color: var(--on-primary-fixed);
}

.btn-primary:hover::before {
  transform: scaleX(1);
}

/* ============================================================================
   FOOTER STYLES (from Footer.css)
   ============================================================================ */

.footer {
  background: var(--background);
  border-top: 1px solid var(--outline-variant);
  padding: 80px clamp(20px, 5vw, 64px) 40px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-main {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
  margin-bottom: 60px;
}

.footer-brand h3 {
  font-family: 'Syne', sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: var(--on-background);
}

.footer-logo {
  font-family: 'Syne', sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: var(--on-background);
}

.footer-desc {
  font-size: 14px;
  color: var(--on-surface-variant);
  line-height: 1.7;
  max-width: 280px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.footer-nav h4 {
  font-family: 'Geist', monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--on-surface-variant);
  margin-bottom: 16px;
  font-weight: 500;
}

.footer-section-title {
  font-family: 'Geist', monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--on-surface-variant);
  margin-bottom: 16px;
  font-weight: 500;
}

.footer-nav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-nav a {
  font-size: 14px;
  color: var(--on-surface-variant);
  transition: color 0.3s ease;
  text-decoration: none;
}

.footer-nav a:hover {
  color: var(--primary);
}

.footer-nav button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 14px;
  color: var(--on-surface-variant);
  transition: color 0.3s ease;
  text-align: left;
  font-family: inherit;
}

.footer-nav button:hover {
  color: var(--primary);
}

.footer-divider {
  width: 100%;
  height: 1px;
  background: var(--outline-variant);
  margin: 40px 0;
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.footer-copyright,
.footer-credit {
  font-family: 'Geist', monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--on-surface-variant);
}

/* ============================================================================
   RESPONSIVE STYLES
   ============================================================================ */

@media (max-width: 1024px) {
  .hero {
    padding: 140px 32px 100px;
  }
}

@media (max-width: 768px) {
  body {
    font-size: 16px;
  }

  .section {
    padding: 80px 16px;
  }

  .eyebrow {
    margin-bottom: 16px;
  }

  .headline-lg {
    font-size: clamp(1.4rem, 4vw, 2.2rem);
  }

  .btn {
    padding: 14px 24px;
    font-size: 11px;
  }

  .hero {
    padding: 120px 20px 80px;
    min-height: auto;
    justify-content: flex-start;
    padding-top: 140px;
  }

  .hero-bg img {
    opacity: 0.3;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-headline {
    margin: 20px 0 24px;
    font-size: 1.8rem;
  }

  .lead {
    font-size: 16px;
    max-width: 100%;
  }

  .hero-cta {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    margin-top: 32px;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .btn-secondary {
    width: 100%;
    text-align: center;
  }

  .hero-scroll {
    display: none;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .service-header {
    flex-direction: column;
  }

  .phase {
    grid-template-columns: 60px 1fr;
    gap: 20px;
    padding: 32px 0;
  }

  .phase-num {
    font-size: 32px;
  }

  .phase-connector {
    top: 45px;
    height: 45px;
  }

  .cta {
    text-align: center;
  }

  .cta-content {
    max-width: none;
  }

  .btn-primary {
    width: 100%;
    justify-content: center;
  }

  .footer {
    padding: 60px clamp(16px, 5vw, 24px) 30px;
  }

  .footer-main {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .footer-links {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 15px;
  }

  .section {
    padding: 60px 16px;
  }

  .eyebrow {
    font-size: 10px;
    padding: 5px 12px;
    margin-bottom: 12px;
  }

  .headline-lg {
    font-size: clamp(1.3rem, 3.5vw, 1.8rem);
  }

  .headline-md {
    font-size: clamp(1rem, 2.2vw, 1.4rem);
  }

  p {
    font-size: 14px;
    line-height: 1.6;
  }

  .lead {
    font-size: 14px;
    line-height: 1.6;
  }

  .btn {
    padding: 12px 20px;
    font-size: 10px;
    gap: 8px;
  }

  .btn-secondary {
    padding: 4px 0;
    font-size: 10px;
  }

  .hero {
    padding: 100px 16px 60px;
    padding-top: 130px;
    min-height: 100vh;
  }

  .hero-headline {
    font-size: 1.4rem;
    margin: 16px 0 20px;
    line-height: 1.2;
  }

  .hero-cta {
    gap: 10px;
    margin-top: 24px;
  }

  .material-symbols-outlined {
    font-size: 20px;
  }
}

/* ============================================================================
   CAREER PAGE STYLES (from Career.css)
   ============================================================================ */

.careers-page {
  min-height: 100vh;
  background: var(--background);
}

.careers-header {
  padding: 160px clamp(20px, 5vw, 64px) 80px;
  border-bottom: 1px solid var(--outline-variant);
}

.careers-header-content {
  max-width: 900px;
}

.careers-header .eyebrow {
  margin-bottom: 16px;
}

.careers-header h1 {
  margin: 16px 0 24px;
}

.careers-intro {
  font-size: 18px;
  color: var(--on-surface-variant);
  line-height: 1.7;
  max-width: 600px;
}

.job-listing {
  padding: 80px clamp(20px, 5vw, 64px);
  max-width: 900px;
  margin: 0 auto;
}

.job-header {
  margin-bottom: 60px;
}

.job-header h2 {
  margin-bottom: 16px;
}

.job-meta {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 12px;
}

.job-type,
.job-location {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border: 1px solid var(--outline-variant);
  font-family: 'Geist', monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--on-surface-variant);
}

.job-content {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.job-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.job-section h3 {
  margin-bottom: 8px;
}

.job-section p {
  font-size: 16px;
  color: var(--on-surface-variant);
  line-height: 1.8;
}

.job-paragraph {
  white-space: pre-wrap;
}

.qualifications-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-left: 0;
}

.qualifications-list li {
  display: flex;
  gap: 12px;
  font-size: 16px;
  color: var(--on-surface-variant);
  line-height: 1.7;
}

.qualifications-list li::before {
  content: '•';
  color: var(--primary);
  font-weight: bold;
  min-width: 20px;
  flex-shrink: 0;
}

.job-cta {
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid var(--outline-variant);
}

.job-cta p {
  margin-bottom: 20px;
  font-size: 18px;
}

/* ============================================================================
   LEGAL PAGES STYLES (from Legal.css)
   ============================================================================ */

.legal-page {
  min-height: 100vh;
  background: var(--background);
}

.legal-header {
  padding: 160px clamp(20px, 5vw, 64px) 80px;
  border-bottom: 1px solid var(--outline-variant);
}

.legal-header-content {
  max-width: 900px;
}

.legal-header h1 {
  margin-bottom: 16px;
}

.legal-updated {
  font-family: 'Geist', monospace;
  font-size: 12px;
  letter-spacing: 0.1em;
  color: var(--on-surface-variant);
  text-transform: uppercase;
}

.legal-content {
  padding: 80px clamp(20px, 5vw, 64px);
  max-width: 900px;
  margin: 0 auto;
}

.legal-body {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.legal-body h2 {
  font-family: 'Syne', sans-serif;
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  line-height: 1.2;
  margin-top: 20px;
}

.legal-body p {
  font-size: 16px;
  color: var(--on-surface-variant);
  line-height: 1.8;
}

.terms-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 16px 0 0 0;
  padding-left: 0;
}

.terms-list li {
  display: flex;
  gap: 12px;
  font-size: 16px;
  color: var(--on-surface-variant);
  line-height: 1.7;
}

.terms-list li::before {
  content: '•';
  color: var(--primary);
  font-weight: bold;
  min-width: 20px;
  flex-shrink: 0;
}

/* ============================================================================
   NOT FOUND PAGE STYLES (from NotFound.css)
   ============================================================================ */

.not-found-page {
  min-height: 100vh;
  background: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
}

.not-found-content {
  padding: 80px clamp(20px, 5vw, 64px);
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
}

.not-found-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.not-found-code {
  font-family: 'Syne', sans-serif;
  font-size: clamp(80px, 20vw, 200px);
  font-weight: 800;
  line-height: 1;
  color: var(--primary);
  letter-spacing: -0.04em;
  text-transform: uppercase;
  margin: 0;
  animation: fadeInDown 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}

.not-found-title {
  font-size: clamp(28px, 6vw, 48px);
  margin: 0;
  animation: fadeInUp 0.6s cubic-bezier(0.19, 1, 0.22, 1) 0.1s both;
}

.not-found-message {
  font-size: 18px;
  color: var(--on-surface-variant);
  line-height: 1.7;
  max-width: 500px;
  margin: 0 auto;
  animation: fadeInUp 0.6s cubic-bezier(0.19, 1, 0.22, 1) 0.2s both;
}

.not-found-actions {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 0.6s cubic-bezier(0.19, 1, 0.22, 1) 0.3s both;
}

.not-found-links {
  display: flex;
  gap: 32px;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 40px;
  border-top: 1px solid var(--outline-variant);
  animation: fadeInUp 0.6s cubic-bezier(0.19, 1, 0.22, 1) 0.4s both;
}

.not-found-links a {
  font-family: 'Geist', monospace;
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--on-surface-variant);
  transition: all 0.3s ease;
  text-decoration: none;
  border-bottom: 1px solid transparent;
}

.not-found-links a:hover {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ============================================================================
   PAGE-SPECIFIC RESPONSIVE STYLES
   ============================================================================ */

@media (max-width: 768px) {
  .careers-header {
    padding: 120px clamp(16px, 5vw, 24px) 60px;
  }

  .job-listing {
    padding: 60px clamp(16px, 5vw, 24px);
  }

  .job-meta {
    gap: 12px;
  }

  .job-content {
    gap: 40px;
  }

  .legal-header {
    padding: 120px clamp(16px, 5vw, 24px) 60px;
  }

  .legal-content {
    padding: 60px clamp(16px, 5vw, 24px);
  }

  .legal-body {
    gap: 30px;
  }

  .legal-body h2 {
    font-size: 18px;
  }

  .not-found-content {
    padding: 60px clamp(16px, 5vw, 24px);
  }

  .not-found-inner {
    gap: 24px;
  }

  .not-found-actions {
    flex-direction: column;
    gap: 16px;
  }

  .btn {
    width: 100%;
  }

  .not-found-links {
    gap: 16px;
    flex-direction: column;
  }
}
` // End of styles constant

