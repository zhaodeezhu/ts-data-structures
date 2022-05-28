/** 
 * 实现一个性能优化版
 * 事实证明while遍历性能最好
 */

function forEach(arr: any[], callback: (value: any, index: number) => void) {
  let index = -1;
  const len = arr.length;
  while (++index < len) {
    callback(arr[index], index);
  }
}

export function deepClone(vals: any, map = new WeakMap()) {
  // 先判断不是对象的情况
  if (['number', 'string', 'function'].includes(typeof vals)) {
    return vals;
  }
  const isArray = Array.isArray(vals);
  const result: any = isArray ? [] : {};
  if (map.get(vals)) {
    return map.get(vals);
  }
  // 这里用了地址的引用，result最终得到的将是克隆过值
  map.set(vals, result);
  const keys = isArray ? vals : Object.keys(vals);
  forEach(keys, (value, key) => {
    if (!isArray) {
      key = value;
      value = vals[value];
    }
    result[key] = deepClone(vals[key], map)
  })
  return result;
}

const a: any = {
  a: 'b',
  c: 'd'
}

a.b = a;

console.log(deepClone(a));
