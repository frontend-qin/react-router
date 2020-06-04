import React, { Component } from 'react';
import Context from './Context';
import { pathToRegexp } from 'path-to-regexp';

class Route extends Component {
  static contextType = Context;
  render() {
    let { component: Component, exact = false, path } = this.props;
    let { pathname } = this.context.location;
    // 截取掉 # 号
    pathname = pathname.slice(1);
    let regexp = pathToRegexp(path, [], { end: exact });
    if (pathname.match(regexp)) {
      return <Component />;
    }
    return null;
  }
}

export default Route;
