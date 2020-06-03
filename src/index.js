import React from 'react';

import ReactDOM from 'react-dom';

import { HashRouter as Router, Route } from './react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

let App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} path='/'></Route>
        <Route component={About} path='/about'></Route>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
