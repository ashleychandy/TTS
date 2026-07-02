import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#process">Process</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
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
                  <a href="/careers">Careers</a>
                </li>
              </ul>
            </nav>

            <nav className="footer-nav">
              <h4 className="footer-section-title">Legal</h4>
              <ul>
                <li>
                  <a href="/privacy">Privacy</a>
                </li>
                <li>
                  <a href="/terms">Terms</a>
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
