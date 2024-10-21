import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddItemForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts', { title, body })
      .then(response => {
        navigate('/items');
      })
      .catch(error => {
        console.error('There was an error adding the item!', error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Add Item</h2>
      <Label>
        Title:
        <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </Label>
      <Label>
        Body:
        <TextArea value={body} onChange={(e) => setBody(e.target.value)} required />
      </Label>
      <Button type="submit">Add Item</Button>
    </Form>
  );
};

export default AddItemForm;

