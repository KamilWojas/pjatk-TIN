import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

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

const EditItemForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        setTitle(response.data.title);
        setBody(response.data.body);
      })
      .catch(error => {
        console.error('There was an error fetching the item!', error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, { title, body })
      .then(response => {
        navigate('/items');
      })
      .catch(error => {
        console.error('There was an error updating the item!', error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Edit Item</h2>
      <Label>
        Title:
        <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </Label>
      <Label>
        Body:
        <TextArea value={body} onChange={(e) => setBody(e.target.value)} required />
      </Label>
      <Button type="submit">Update Item</Button>
    </Form>
  );
};

export default EditItemForm;

