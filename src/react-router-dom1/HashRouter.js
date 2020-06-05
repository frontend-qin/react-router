import React, { Component } from 'react';
import Context from './Context';

export default class HashRouter extends Component {
  locationState = null;
  state = {
    location: {
      pathname: window.location.hash.slice(1),
      state: null,
    },
  };
  componentWillMount() {
    this.listener = () => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1),
          state: this.locationState,
        },
      });
    };
    window.addEventListener('hashchange', this.listener);
    window.location.hash = window.location.hash || '/';
  }
  componentWillUnmount() {
    window.removeEventListener('hashchange', this.listener);
  }
  render() {
    // let that = this;
    let value = {
      location: this.state.location,
      history: {
        location: this.state.location,
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
