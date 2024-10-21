import React from 'react';
import './ElementListy.css';

function ElementListy({ element, onDelete }) {
    return (
        <div className="element-listy">
            <span>{element}</span>
            <button onClick={onDelete}>Usuń</button>
        </div>
    );
}

export default ElementListy;
