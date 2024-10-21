import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ItemList from './components/ItemList';
import AddItemForm from './components/AddItemForm';
import EditItemForm from './components/EditItemForm';
import NotFound from './components/NotFound';
import styled from 'styled-components';
import './App.css';

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const App = () => {
  return (
    <Router>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/items">Items</NavLink>
      </Nav>
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact/:country?" element={<Contact />} />
          <Route path="/items" element={<ItemList />} />
          <Route path="/add-item" element={<AddItemForm />} />
          <Route path="/edit-item/:id" element={<EditItemForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;





