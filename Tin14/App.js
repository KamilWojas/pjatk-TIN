import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ItemList from './ItemList';
import AddItem from './AddItem';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add">Add Item</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={ItemList} />
        <Route path="/add" component={AddItem} />
        <Route path="*" component={() => <h2>404 Not Found</h2>} />
      </Switch>
    </div>
  </Router>
);

export default App;
