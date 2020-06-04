import React, { Component } from 'react';
import Context from './Context';

class Link extends Component {
  static contextType = Context;
  go = (e, to) => {
    e.preventDefault();
    this.context.history.push(to);
  };
  render() {
    const { to, children } = this.props;
    return (
      <a href={`#` + to} onClick={(e) => this.go(e, to)}>
        {children}
      </a>
    );
  }
}

export default Link;
