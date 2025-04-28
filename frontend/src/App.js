import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"; 
import SocialLinks from './components/SocialLinks';
import ProjectCard from './components/ProjectCard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ReadingsArchive from './pages/ReadingsArchive';
import AboutMe from './pages/AboutMe';
import Diplomas from './pages/Diplomas';
import Projects from './pages/Projects'; // Import the Projects component

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
      </div> {/* profile-section */}

      <Router>
        <div className="app-container">

          {/* Barra de Navegación */}
          <nav className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/readings">Readings Archive</Link>
            <Link to="/about">About Me</Link>
            <Link to="/diplomas">Diplomas</Link>
            <Link to="/projects">Projects</Link> {/* Add the Projects link */}
          </nav>

          {/* Definición de Rutas */}
          <Routes>
            <Route path="/readings" element={<ReadingsArchive />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/diplomas" element={<Diplomas />} />
            <Route path="/projects" element={<Projects />} /> {/* Add the Projects route */}
          </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;
