/**
 * 链表和数组的区别
 * 1. 数组是有序并且连续的存储单元
 * 2. 链表是有序但并不是连续的存储单元
 * 3. 数组从中间插入元素需要移动其他元素，开销比较高
 */

import { Node, defaultEquelFn } from './Node';

type IEquelFn = <T>(ele1: T, ele2: T) => boolean;

export class LinkedList<T> {
  /** 头指针 */
  head: Node<T> | null = null;
  /** 总数 */
  count: number = 0;
  /** 比较方法 */
  equelFn: IEquelFn = defaultEquelFn;
  constructor(equelFn: IEquelFn = defaultEquelFn) {
    this.equelFn = equelFn;
  }

  /** 添加到尾部 */
  push(element: T) {

  }

  /** 插入元素到指定位置 */
  insert(element: T) {

  }

  /** 获取指定位置的元素 */
  getElementAt(index: number) {
    if(this.isEmpty()) {
      return null;
    }
  }

  /** 大小 */
  size() {
    return this.count;
  }

  /** 是否为空 */
  isEmpty() {
    return this.size() === 0;
  }

  /** 获取元素的位置 */
  indexOf(element: T) {
    if(this.isEmpty()) {
      return -1;
    }
  }

  /** 移除元素 */
  remove(element: T) {

  }

  /** 从指定位置移除元素 */
  removeAt(position: number) {

  }

  /** toString */
  toString() {
    
  }
} 