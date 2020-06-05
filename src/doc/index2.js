import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch } from './react-router-dom';
// Redirect
import Home from './components/Home';
import About from './components/About';
import Mine from './components/Mine';

let App = () => (
  <HashRouter>
    <Link to='/'>home</Link>
    <Link to='/about'>about</Link>
    <Link to='/mine'>mine</Link>
    <div>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Mine} path='/mine' />
        {/* <Redirect/> */}
      </Switch>
    </div>
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
