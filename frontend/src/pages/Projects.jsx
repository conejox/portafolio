import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Seven Wonders Search',
    description: 'This project is a card search website made with React and Flask.',
    image: '/images/SWpage.jpg',
    link: 'https://github.com/conejox/sevenwonders',
    tags: ['React', 'Flask', 'CSS'],
  },
  {
    title: 'Lina Burman Website',
    description: 'This is a personal website for Lina Burman, a professional painter, made to lear the basics of Flask,HTML,CSS and Javascript.',
    image: '/images/LBpage.jpg',
    link: 'https://github.com/conejox/lina-burman',
    tags: ['Flask', 'HTML', 'CSS', 'JavaScript'],
  },
  // Add more projects here!
];

function Projects() {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;