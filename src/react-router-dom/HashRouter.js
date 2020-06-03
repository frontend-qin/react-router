import React, { Component } from 'react';
import Context from './Context';

let hash = () => window.location.hash.slice(1);

class HashRouter extends Component {
  state = {
    location: {
      pathname: hash(),
      state: null,
    },
  };
  UNSAFE_componentWillMount() {
    // // 如果有值，就使用你的， 没有就默认是 #/
    // hash = window.location.hash || '/';
    // console.log(this.props);
    // 如果hash 值改变了，就改变状态
    window.addEventListener('hashchange', () => {
      this.setState({
        location: {
          // ...this.state.location,
          pathname: hash() || '/',
        },
      });
    });
  }
  render = () => (
    <Context.Provider value={this.state}>
      {this.props.children}
    </Context.Provider>
  );
}
export default HashRouter;
