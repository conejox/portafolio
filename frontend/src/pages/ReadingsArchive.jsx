import React from 'react';
import './ReadingsArchive.css';

const readings = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
    review: "Un excelente libro sobre las buenas prácticas para escribir código legible, mantenible y eficiente.",
  },
  {
    id: 2,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    year: 1999,
    review: "Ofrece consejos prácticos y filosóficos sobre el oficio de la programación profesional.",
  },
  {
    id: 3,
    title: "Flask Web Development",
    author: "Miguel Grinberg",
    year: 2018,
    review: "Una guía clara y progresiva para construir aplicaciones web usando Flask y sus extensiones.",
  },
  {
    id: 4,
    title: "You Don't Know JS (Yet)",
    author: "Kyle Simpson",
    year: 2020,
    review: "Explora en profundidad el lenguaje JavaScript desde una perspectiva técnica avanzada.",
  },
];

function ReadingsArchive() {
  return (
    <div className="readings-archive">
      <h1>Readings Archive</h1>
      <p>Una colección de libros y artículos que me han nutrido como desarrollador.</p>

      <div className="reading-list">
        {readings.map((reading) => (
          <div key={reading.id} className="reading-item">
            <h2>{reading.title}</h2>
            <p className="meta">{reading.author} • {reading.year}</p>
            <p className="review">{reading.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReadingsArchive;

