import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: #f4f4f4;
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>{item.title}</ListItem>
      ))}
    </List>
  );
};

export default ItemList;



