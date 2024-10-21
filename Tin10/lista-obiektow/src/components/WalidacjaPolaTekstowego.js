import React from 'react';
import './WalidacjaPolaTekstowego.css';

function WalidacjaPolaTekstowego({ message }) {
    return message ? <div className="error-message">{message}</div> : null;
}

export default WalidacjaPolaTekstowego;
