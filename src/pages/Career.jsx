import './Career.css'

const JOB_OPENING = {
  title: 'Marketing Intern',
  type: 'Full-time Remote',
  location: 'India',
  desc: 'Support our marketing and client acquisition efforts through lead generation, content creation, and campaign execution.',
  company: 'Thirst Trap Studios is an AI-powered marketing agency that helps e-commerce and DTC brands grow through creative advertising, content production, lead generation, and performance marketing. We combine AI tools with modern marketing strategies to deliver high-quality creative assets and measurable business results.\n\nWe\'re a growing startup focused on innovation, collaboration, and continuous learning. Team members work on real client projects, experiment with new AI tools, and contribute directly to the company\'s growth.',
  role: 'We are looking for a Digital Marketing Intern to support our marketing and client acquisition efforts. In this role, you\'ll assist with lead generation, market research, social media marketing, AI-powered content creation, and campaign execution. You\'ll work closely with the team to identify potential clients, create engaging marketing content, monitor campaign performance, and explore new growth opportunities.',
  qualifications: [
    'Strong written and verbal communication skills.',
    'Interest in digital marketing, AI, and startup environments.',
    'Familiarity with AI tools such as ChatGPT, Claude, or Gemini.',
    'Basic understanding of social media marketing and lead generation.',
    'Ability to conduct market research and identify business opportunities.',
    'Organized, proactive, and able to manage multiple tasks independently.',
    'Currently pursuing or recently completed a degree in Marketing, Business, Communications, or a related field.',
    'Experience with Canva, Google Workspace, Notion, or similar productivity tools is a plus.',
  ],
}

export default function Career() {
  return (
    <div className="careers-page">
      <section className="careers-header">
        <div className="careers-header-content">
          <div className="eyebrow">Careers / Join Us</div>
          <h1 className="headline">We're Hiring</h1>
          <p className="careers-intro">
            Join a team of innovators building the future of AI-powered marketing. We're looking for
            talented individuals who are passionate about creative excellence and strategic growth.
          </p>
        </div>
      </section>

      <section className="job-listing">
        <div className="job-header">
          <div>
            <h2 className="headline headline-lg">{JOB_OPENING.title}</h2>
            <div className="job-meta">
              <span className="job-type">{JOB_OPENING.type}</span>
              <span className="job-location">{JOB_OPENING.location}</span>
            </div>
          </div>
        </div>

        <div className="job-content">
          <div className="job-section">
            <h3 className="headline headline-md">About The Job</h3>
            <p>{JOB_OPENING.desc}</p>
          </div>

          <div className="job-section">
            <h3 className="headline headline-md">Company Description</h3>
            <p className="job-paragraph">{JOB_OPENING.company}</p>
          </div>

          <div className="job-section">
            <h3 className="headline headline-md">Role Description</h3>
            <p className="job-paragraph">{JOB_OPENING.role}</p>
          </div>

          <div className="job-section">
            <h3 className="headline headline-md">Qualifications</h3>
            <ul className="qualifications-list">
              {JOB_OPENING.qualifications.map((qual, idx) => (
                <li key={idx}>{qual}</li>
              ))}
            </ul>
          </div>

          <div className="job-section job-cta">
            <p>Ready to join the team?</p>
            <a href="mailto:careers@thirsttrapstudios.com?subject=Marketing%20Intern%20Application" className="btn">
              <span>Apply Now</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
