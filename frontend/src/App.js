import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"; 
import SocialLinks from './components/SocialLinks';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Error:", error));
  }, []);

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
      </div>

      <div className="link-icons">
        <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
        </a>
        <a href="YOUR_GITHUB_URL" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> {/* GitHub Icon */}
        </a>
        <a href="YOUR_TWITTER_URL" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i> {/* Twitter Icon */}
        </a>
        <a href="YOUR_PERSONAL_URL" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-home"></i> {/* Personal Website Icon */}
        </a>
        <a href="YOUR_EMAIL_URL">
          <i className="fas fa-envelope"></i> {/* Email Icon */}
        </a>
      </div>
      <h1>Mi Portafolio hola</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.name} - {project.tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
