import React, { Component } from 'react';
import Context from './Context';

class Link extends Component {
  static contextType = Context;
  render() {
    const { to, children } = this.props;
    const { history } = this.context;
    return (
      <a href={`#` + to} onClick={() => history.push(to)}>
        {children}
      </a>
    );
  }
}

export default Link;
