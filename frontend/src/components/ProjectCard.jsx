import React from 'react';


function ProjectCard({ project, index }) {
  return (
    <div className={`project-card ${index % 2 !== 0 ? 'reverse' : ''}`}>
      <img src={project.image} alt={project.title} onClick={() => window.open(project.link, "_blank")} />
      <div className="project-text">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
