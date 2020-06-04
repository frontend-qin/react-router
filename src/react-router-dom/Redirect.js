import { Component } from 'react';
import Context from './Context';

// 一旦匹配成功，就不再向后匹配了
class Redirect extends Component {
  static contextType = Context;
  render() {
    // console.log(10);
    this.context.history.push(this.props.to);
    return null;
  }
}
export default Redirect;
