import './Process.css'

const PHASES = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We immerse ourselves in your world. Market analysis, competitive landscape, strategic imperatives.',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'Provocative hypotheses. We challenge assumptions and architect the narrative foundation.',
  },
  {
    num: '03',
    title: 'Ideation',
    desc: 'Conceptual exploration. High-risk, high-reward ideas that break category conventions.',
  },
  {
    num: '04',
    title: 'Execution',
    desc: 'Meticulous production. Every detail serves the strategy. Pixel-perfect, code-clean.',
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'Strategic deployment. Timed, orchestrated, and calibrated for maximum impact.',
  },
]

export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="process-header">
        <div className="eyebrow">03 / THE WORKFLOW</div>
        <h2 className="headline headline-lg">Our Process</h2>
      </div>

      <div className="phases">
        {PHASES.map((phase, idx) => (
          <div key={phase.num} className="phase">
            <div className="phase-marker">
              <span className="phase-num">{phase.num}</span>
              {idx < PHASES.length - 1 && <div className="phase-connector" />}
            </div>

            <div className="phase-content">
              <h3 className="headline headline-md">{phase.title}</h3>
              <p className="phase-desc">{phase.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
