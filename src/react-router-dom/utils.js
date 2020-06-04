import { pathToRegexp } from 'path-to-regexp';

/**
 * @returns 匹配的结果 true | false
 * @param {*} context 上下文
 * @param {*} component props
 */

export function isMatch(context, props) {
  const { path, exact = false, to, from } = props;
  // 拿到上下文中的 hash 值
  let { pathname } = context.location;
  // 截取掉 # 号
  pathname = pathname.slice(1);
  // 转成正则
  // path || to 如果是Route 组件上都是path， 但Redirect 上是 to 属性，这里需要处理
  let regexp = pathToRegexp(path || to || from, [], { end: exact });
  return pathname.match(regexp);
}
