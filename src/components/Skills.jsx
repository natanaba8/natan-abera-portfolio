import { skillGroups } from '../data'
import '../css/Skills.css'

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-label">Skills</span>
          <h2 className="section-title">
            Things I <span className="accent-text">work with</span>
          </h2>
          <p className="section-subtitle">
            These are the tools I reach for first. I am always adding to the list.
          </p>
        </div>

        {/* one card for each group in skillGroups */}
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-card card">
              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <ul className="skill-tags">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
