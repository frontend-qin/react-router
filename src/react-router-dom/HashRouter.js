import React, { Component } from 'react';
import Context from './Context';

export default class HashRouter extends Component {
  state = {
    location: {
      pathname: window.location.hash.slice(1) || '/',
    },
  };
  UNSAFE_componentWillMount() {
    this.listener = () => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1),
        },
      });
    };
    window.addEventListener('hashchange', this.listener);
    window.location.hash = window.location.hash || '/';
  }
  render() {
    let value = {
      location: this.state.location,
      history: {
        push(to) {
          window.location.hash = to;
        },
      },
    };
    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }
}
