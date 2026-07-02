import './NotFound.css'

export default function NotFound() {
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
