import { useState } from 'react'
import './Nav.css'

export default function Nav({ scrolled, activeSection, onNav, menuOpen, setMenuOpen }) {
  const sections = ['hero', 'services', 'process', 'contact']

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <button className="nav-logo" onClick={() => onNav('hero')}>
          THIRST TRAP STUDIOS
        </button>

        <div className="nav-desktop">
          {sections.map((section) => (
            <button
              key={section}
              className={`nav-link ${activeSection === section ? 'nav-link--active' : ''}`}
              onClick={() => onNav(section)}
            >
              {section.toUpperCase()}
            </button>
          ))}
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
            {sections.map((section) => (
              <button
                key={section}
                className="mobile-menu-link"
                onClick={() => onNav(section)}
              >
                {section.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
