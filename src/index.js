import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from './react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Mine from './components/Mine';

let App = () => (
  <HashRouter>
    <Link to='/'>home</Link>
    <Link to='/about'>about</Link>
    <Link to='/mine'>mine</Link>
    <div>
      <Route component={Home} path='/' exact></Route>
      <Route component={About} path='/about'></Route>
      <Route component={Mine} path='/mine'></Route>
    </div>
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
