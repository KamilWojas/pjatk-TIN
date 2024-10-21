import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, description };
    axios.post('http://localhost:3008/items', newItem)
      .then(response => {
        console.log('Item added:', response.data);
        setName('');
        setDescription('');
      })
      .catch(error => console.error('Error adding item:', error));
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;

