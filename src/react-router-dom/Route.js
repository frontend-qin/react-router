import React, { Component } from 'react';
import Context from './Context';

class Route extends Component {
  static contextType = Context;
  render() {
    let { path, component: Component } = this.props;
    let { location } = this.context;
    if (path === location.pathname) {
      return <Component />;
    }
    return null;
  }
}
export default Route;
