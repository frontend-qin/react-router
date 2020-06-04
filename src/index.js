import React from 'react';

import ReactDOM from 'react-dom';

import { HashRouter as Router, Route, Link } from './react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Mine from './pages/Mine';

let App = () => {
  return (
    <Router>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/mine'>Mine</Link>
      <div>
        <Route component={Home} path='/' exact></Route>
        <Route component={About} path='/about'></Route>
        <Route component={Mine} path='/mine'></Route>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
