

import React from 'react';
import './ReadingsArchive.css';
import papers from '../components/lista_papers';

const readings = papers.filter(paper => paper.status === "read");

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


