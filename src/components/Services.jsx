import './Services.css'

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

export default function Services() {
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
