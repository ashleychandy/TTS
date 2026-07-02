import { useState, useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    setMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
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
