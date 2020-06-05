import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from './react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Mine from './components/Mine';

let App = () => (
  <HashRouter>
    <Route component={Home} path='/' />
    <Route component={About} path='/about' />
    <Route component={Mine} path='/mine' />
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
