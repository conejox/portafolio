import React from 'react';
import './Diplomas.css'; // crea este CSS para darle estilo

const diplomas = [
  {
    id: 1,
    title: 'Diploma en Desarrollo Web',
    description: 'Curso completo de desarrollo web moderno usando React, Node.js y bases de datos.',
    image: '/images/diplomas/PythonDataStructures.png', // Ruta relativa desde public/
  },
  {
    id: 2,
    title: 'Diploma en Python para Ciencia de Datos',
    description: 'Programa intensivo de análisis de datos, visualización y machine learning con Python.',
    image: '/images/diplomas/PythonIntermediate.png',
  },
  {
    id: 3,
    title: 'Diploma en Inteligencia Artificial',
    description: 'Certificación en fundamentos de IA aplicada y redes neuronales profundas.',
    image: '/images/diplomas/SQLintermediate.png',
  },
  // Puedes agregar más diplomas aquí
];

function Diplomas() {
  return (
    <div className="diplomas-page">
      <h1>Mis Diplomas</h1>
      <p>Aquí puedes ver los diplomas obtenidos a lo largo de mi carrera de aprendizaje.</p>

      <div className="diploma-list">
        {diplomas.map((diploma) => (
          <div key={diploma.id} className="diploma-item">
            <img src={diploma.image} alt={diploma.title} className="diploma-image" />
            <div className="diploma-description">
              <h2>{diploma.title}</h2>
              <p>{diploma.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Diplomas;
