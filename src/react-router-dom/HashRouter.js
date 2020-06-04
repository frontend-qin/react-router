import React, { Component } from 'react';
import Context from './Context';
class HashRouter extends Component {
  state = {
    location: {
      pathname: '#/', // 默认hash 值路径
    },
    history: {
      push(path) {
        // 路径跳转方法
        window.location.hash = '#' + path;
      },
    },
  };
  UNSAFE_componentWillMount() {
    // 监听hash 值的变化
    window.addEventListener('hashchange', () => {
      console.log(window.location.hash);

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
