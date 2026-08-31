
function ProjectCard({ project }) {
  return (
    <div className="project-card card">
      {/* this for an <img> tag when you have real screenshots. */}
      <div className="project-top">
        <h3>{project.title}</h3>
      </div>

      <div className="project-body">
        <span className="project-category">{project.category}</span>
        <p className="project-desc">{project.description}</p>

        <ul className="project-tech">
          {project.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="project-links">
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live demo
          </a>
          <a href={project.codeUrl} target="_blank" rel="noreferrer">
            Source code
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
