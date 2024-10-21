import React, { useState } from 'react';
import ElementListy from './ElementListy';
import WalidacjaPolaTekstowego from './WalidacjaPolaTekstowego';
import './Lista.css';

function Lista() {
  const [elements, setElements] = useState([]);
  const [newElement, setNewElement] = useState('');
  const [error, setError] = useState('');

  const handleAdd = () => {
    if (newElement.length >= 3) {
      setElements([...elements, newElement]);
      setNewElement('');
      setError('');
    } else {
      setError('Element musi mieć co najmniej 3 znaki');
    }
  };

  const handleDelete = (index) => {
    const newElements = [...elements];
    newElements.splice(index, 1);
    setElements(newElements);
  };

  return (
    <div className="lista-container">
      <div className="input-container">
        <input 
          type="text" 
          value={newElement} 
          onChange={(e) => setNewElement(e.target.value)} 
          placeholder="Dodaj nowy element"
        />
        <button onClick={handleAdd}>Dodaj</button>
      </div>
      <WalidacjaPolaTekstowego message={error} />
      <div className="elements-container">
        {elements.map((element, index) => (
          <ElementListy 
            key={index} 
            element={element} 
            onDelete={() => handleDelete(index)} 
          />
        ))}
      </div>
    </div>
  );
}

export default Lista;

