import { Component } from 'react';
import Context from './Context';

class Redirect extends Component {
  static contextType = Context;
  componentDidMount() {
    const { from, to } = this.props;
    const { pathname } = this.context.location;
    // 没有传入from 或者 传入的from 和上下文的 pathname 一样才进行跳转
    (!from || from === pathname) && this.context.history.push(to);
  }
  render() {
    return null;
  }
}
export default Redirect;
