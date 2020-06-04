import React, { Component } from 'react';
import Context from './Context';
class HashRouter extends Component {
  state = {
    location: {
      pathname: window.location.hash || '#/',
    },
    history: {
      push(path) {
        window.location.hash = '#' + path;
      },
    },
  };
  UNSAFE_componentWillMount() {
    window.addEventListener('hashchange', () => {
      this.setState((state) => ({
        ...state,
        location: {
          pathname: window.location.hash || '#/',
        },
      }));
    });
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export default HashRouter;
