import React, { Component } from 'react';
import Context from './Context';
import { pathToRegexp } from 'path-to-regexp';

class Route extends Component {
  static contextType = Context;
  render() {
    // 拿到  <Route component={Home} path='/' exact></Route> 这上边的属性
    let { component: Component, exact = false, path } = this.props;
    // 拿到上下文中的 hash 值
    let { pathname } = this.context.location;
    // 截取掉 # 号
    pathname = pathname.slice(1);
    // 转成正则
    let regexp = pathToRegexp(path, [], { end: exact });
    // 如果匹配
    if (pathname.match(regexp)) {
      return <Component />;
    }
    return null;
  }
}

export default Route;
