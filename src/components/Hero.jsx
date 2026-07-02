import './Hero.css'

export default function Hero({ onNav }) {
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
