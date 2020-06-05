import React, { Component } from 'react';
import Context from './Context';
import { pathToRegexp } from 'path-to-regexp';

class Route extends Component {
  static contextType = Context;
  render() {
    let { path = '/', component: Component, exact = false } = this.props;
    let { pathname } = this.context.location;

    let params = [];
    let regexp = pathToRegexp(path, params, { end: exact });
    const result = pathname.match(regexp);

    if (result) {
      return <Component />;
    }
    return null;
  }
}
export default Route;
