import React, { PureComponent } from 'react';
import Context from './Context';

class Route extends PureComponent {
  static contextType = Context;
  render() {
    // 获取到用户传入的path 和 组件
    const { component: RouteComponent, path } = this.props;
    // 获取到监听到的变化后的hash值
    const { pathname } = this.context.location;
    // 比较， 如果相等，就渲染对应的组件，否则，渲染null
    return pathname === path ? <RouteComponent /> : null;
  }
}

export default Route;
