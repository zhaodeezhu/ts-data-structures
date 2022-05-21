/** 节点 */
export class Node<T> {
  constructor(element: T) {
    this.element = element;
  }
  element: T | null = null;
  next: Node<T> | null = null;
}

/** 比较元素相等的方法 */
export function defaultEquelFn<T>(ele1: T, ele2: T) {
  return ele1 === ele2;
}