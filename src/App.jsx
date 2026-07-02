import { useState, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

export default function App() {
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
      <Analytics />
      <div className="noise" />
      <Nav scrolled={scrolled} activeSection={activeSection} onNav={scrollToSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero onNav={scrollToSection} />
        <Services />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
