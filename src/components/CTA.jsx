import './CTA.css'

export default function CTA() {
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
