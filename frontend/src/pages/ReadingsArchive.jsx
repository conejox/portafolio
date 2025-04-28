import React, { useState } from 'react';
import './ReadingsArchive.css'; // crea este css para personalizarlo

function ReadingsArchive() {
  // Lista de lecturas iniciales
  const initialReadings = [
    { id: 1, title: 'Clean Code - Robert C. Martin', completed: false },
    { id: 2, title: 'Deep Learning - Ian Goodfellow', completed: false },
    { id: 3, title: 'You Don\'t Know JS - Kyle Simpson', completed: false },
    { id: 4, title: 'The Pragmatic Programmer - Andrew Hunt', completed: false },
    { id: 5, title: 'Flask Web Development - Miguel Grinberg', completed: false },
    // Agrega más libros aquí
  ];

  const [readings, setReadings] = useState(initialReadings);

  // Función para marcar como completado
  const toggleComplete = (id) => {
    const updatedReadings = readings.map((reading) => 
      reading.id === id ? { ...reading, completed: !reading.completed } : reading
    );
    setReadings(updatedReadings);
  };

  return (
    <div className="readings-archive">
      <h1>Readings Archive</h1>
      <p>Here you will find the books and articles that fuel my learning journey.</p>

      <ul className="reading-list">
        {readings.map((reading) => (
          <li 
            key={reading.id} 
            className={reading.completed ? 'completed' : ''}
            onClick={() => toggleComplete(reading.id)}
          >
            {reading.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReadingsArchive;
