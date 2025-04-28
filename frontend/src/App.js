import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"; 
import SocialLinks from './components/SocialLinks';
import ProjectCard from './components/ProjectCard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ReadingsArchive from './pages/ReadingsArchive';
import AboutMe from './pages/AboutMe';
import Diplomas from './pages/Diplomas';


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

function App() {
  

  


  return (
    <div className="app-container">
      <div className="profile-section">
      <img
          src="/images/perfilfoto.jpg"
          alt="Profilefoto"
          className="profile-image"
        />
        <h1>Alberto Conejeros</h1>
        <p>junior developer</p>
        <SocialLinks />
      </div> {/*profile-section */}

      <Router>
      <div className="app-container">

        {/* Barra de Navegación */}
        <nav className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/readings">Readings Archive</Link>
          <Link to="/about">About Me</Link>
          <Link to="/diplomas">Diplomas</Link>
        </nav>

        {/* Definición de Rutas */}
        <Routes>
          
          <Route path="/readings" element={<ReadingsArchive />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/diplomas" element={<Diplomas />} />
        </Routes>

      </div>
    </Router>

      
      <h1>Mi Portafolio hola</h1>
     <div className="projects-container">
      {projects.map((project, index) => (
       <ProjectCard key={index} project={project} index={index} />
      ))}
      </div> {/*projects-container */}

      
    </div>
  );
}

export default App;
