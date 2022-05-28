/** 
 * 实现一个进阶版 防止循环引用
 * 使用WeakMap的原因是用完后地址会释放
 * 用map的备份一份带地址的对象
 * 如果这个里面已经存在本身的数据了，那么就直接返回克隆过得值
 */
 export function deepClone(vals: any, map = new WeakMap()) {
  // 先判断不是对象的情况
  if (['number', 'string', 'function'].includes(typeof vals)) {
    return vals;
  }

  const isArray = Array.isArray(vals);
  const result: any = isArray ? [] : {};
  if(map.get(vals)) {
    return map.get(vals);
  }
  // 这里用了地址的引用，result最终得到的将是克隆过值
  map.set(vals, result);
  for(const key in vals) {
    result[key] = deepClone(vals[key], map)
  }

  return result;
}
