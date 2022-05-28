/** 
 * 实现一个乞丐版
 * 没有考虑一些特殊情况
 * 1. 代码存在冗余
 * 2. 没有考虑循环引用的情况
 */
export function deepClone(vals: any) {
  // 先判断不是对象的情况
  if (['number', 'string', 'function'].includes(typeof vals)) {
    return vals;
  }
  const isArray = Array.isArray(vals);
  const result: any = isArray ? [] : {};

  for(const key in vals) {
    result[key] = deepClone(vals[key])
  }

  return result;
}