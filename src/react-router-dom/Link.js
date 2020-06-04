import React, { Component } from 'react';
import Context from './Context';

class Link extends Component {
  static contextType = Context;
  // 阻止默认行为，进行事件跳转
  hashPush = (e, to) => {
    e.preventDefault();
    this.context.history.push(to);
  };
  render() {
    const { to, children } = this.props;
    return (
      <a href={`#` + to} onClick={(e) => this.hashPush(e, to)}>
        {children}
      </a>
    );
  }
}

export default Link;
