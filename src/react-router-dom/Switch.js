import { Component } from 'react';
import Context from './Context';
import { isMatch } from './utils';

// 一旦匹配成功，就不再向后匹配了
class Switch extends Component {
  static contextType = Context;
  render() {
    let { children } = this.props;
    // 由于children 的值只有一个时，就是对象， 1个以上才是数组，所以先转化成
    children = Array.isArray(children) ? children : [children];
    for (let i = 0; i < children.length; i++) {
      if (isMatch(this.context, children[i].props)) {
        return children[i];
      }
    }
    return null;
  }
}
export default Switch;
