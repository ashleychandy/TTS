import { useLocation, Link } from 'react-router-dom'
import './Nav.css'

export default function Nav({ scrolled, activeSection, onNav, menuOpen, setMenuOpen }) {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const sections = ['hero', 'services', 'process', 'contact']

  const handleNavClick = (id) => {
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

        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <button className="mobile-menu-close" onClick={() => setMenuOpen(false)}>
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
