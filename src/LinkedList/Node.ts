/** 节点 */
export class Node<T> {
  constructor(element: T) {
    this.element = element;
  }
  element: T | null = null;
  next: Node<T> | null = null;
}

/** 双向链表节点 */
export class DoublyNode<T> extends Node<T> {
  prev: DoublyNode<T> | null = null;
  next: DoublyNode<T> | null = null;
  constructor(element: T) {
    super(element)
    this.element = element;
  }
}

/** 比较元素相等的方法 */
export function defaultEquelFn<T>(ele1: T, ele2: T) {
  return ele1 === ele2;
}