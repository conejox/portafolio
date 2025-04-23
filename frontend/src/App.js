import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Mi Portafolio hola</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            {project.name} - {project.tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
