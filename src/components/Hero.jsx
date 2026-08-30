import { personalInfo, socialLinks, stats } from '../data'
import SocialIcon from './Icons'
import '../css/Hero.css'

// The first thing people see when the page loads.
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        {/* ---------- left side: the text ---------- */}
        <div className="hero-text">
          <p className="hero-hello">Hello, my name is</p>

          <h1 className="hero-name">{personalInfo.name}</h1>

          <h2 className="hero-role">
            I am a <span className="accent-text">{personalInfo.role}</span>
          </h2>

          <p className="hero-tagline">{personalInfo.tagline}</p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
          </div>

          <ul className="hero-socials">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a href={link.url} target="_blank" rel="noreferrer" title={link.name}>
                  <SocialIcon name={link.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- right side: a simple profile card ---------- */}
        <div className="hero-card card">
          <div className="hero-avatar">{personalInfo.initials}</div>
          <h3>{personalInfo.name}</h3>
          <p className="hero-card-role">{personalInfo.role}</p>
          <p className="hero-card-place">{personalInfo.location}</p>

          <ul className="hero-stats">
            {stats.map((item) => (
              <li key={item.label}>
                <strong>{item.number}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
