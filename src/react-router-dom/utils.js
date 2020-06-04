import { pathToRegexp } from 'path-to-regexp';

/**
 * @returns 匹配的结果 true | false
 * @param {*} context 上下文
 * @param {*} component props
 */

export function isMatch(context, props) {
  const { path, exact = false } = props;
  // 拿到上下文中的 hash 值
  let { pathname } = context.location;
  // 截取掉 # 号
  pathname = pathname.slice(1);
  // 转成正则
  let regexp = pathToRegexp(path, [], { end: exact });
  return pathname.match(regexp);
}
