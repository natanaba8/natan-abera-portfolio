import { aboutFacts, aboutParagraphs } from '../data'
import '../css/About.css'

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-label">About me</span>
          <h2 className="section-title">
            A bit about <span className="accent-text">who I am</span>
          </h2>
          <p className="section-subtitle">
            The short version I like building things and I do not like giving up on a bug
          </p>
        </div>

        <div className="about-grid">
          {/* the paragraphs on the left */}
          <div className="about-text">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* the list of facts on the right */}
          <div className="about-card card">
            <h3>Quick facts</h3>
            <ul>
              {aboutFacts.map((fact) => (
                <li key={fact.label}>
                  <span className="fact-label">{fact.label}</span>
                  <span className="fact-value">{fact.value}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-primary about-btn">
              Let&apos;s work together
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
