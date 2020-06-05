import React, { Component } from 'react';
import { Link, Route } from '../react-router-dom';
import HomeList from './HomeList';
import HomeAdd from './HomeAdd';
// import Mine from './Mine';

class Home extends Component {
  render() {
    return (
      <>
        <div>
          <Link to='/home/add'>home/add</Link>
        </div>
        <div>
          <Route path='/home/add' component={HomeAdd} />
        </div>
      </>
    );
  }
}
export default Home;
