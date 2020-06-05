import React, { Component } from 'react';
import Context from './Context';
import { isMatch } from './utils';

class Route extends Component {
  static contextType = Context;
  render() {
    // // 拿到  <Route component={Home} path='/' exact></Route> 这上边的属性
    let { component: Component } = this.props;

    if (isMatch(this.context, this.props)) {
      return <Component />;
    }
    return null;
  }
}

export default Route;
