import React from 'react';
import { useParams } from 'react-router-dom';

const Contact = () => {
  const { country } = useParams();
  return <h2>Contact {country ? `from ${country}` : ''}</h2>;
};

export default Contact;

