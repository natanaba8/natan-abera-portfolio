import { useState } from 'react'
import { projectFilters, projects } from '../data'
import ProjectCard from './ProjectCard'
import '../css/Projects.css'

function Projects() {
  // the filter button that is turned on right now
  const [activeFilter, setActiveFilter] = useState('All')

  // Decide which projects to show.
  // "All" means show every project, anything else means only show
  // the projects whose category matches the button that was clicked.
  let shownProjects = projects

  if (activeFilter !== 'All') {
    shownProjects = projects.filter((project) => project.category === activeFilter)
  }

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-label">Projects</span>
          <h2 className="section-title">
            Stuff I have <span className="accent-text">built</span>
          </h2>
          <p className="section-subtitle">
            A few things I made while learning. Click a filter to see one type of project.
          </p>
        </div>

        {/* the filter buttons */}
        <div className="filters">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {shownProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
