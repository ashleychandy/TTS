import { Analytics } from '@vercel/analytics/react'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import CTA from './components/CTA'
import './App.css'

export default function App() {
  const scrollToSection = (id) => {
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
