/**
 * 遵循后进先出原则（LIFO）
 * 使用对象不使用数组的原因是，
 *  1. 数组是有序的，为了保证顺序会占用更多的内存空间
 *  2. 数组的方法时间复杂度大部分都是O(n)，而对象的时间复杂度是O(1)
 */
export class Stack<T> {
  /** 数量 */
  private count: number = 0;
  /** 栈存储空间 */
  private items: {[index: number]: T} = {};
  
  /** 入栈 */
  push(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  /** 判断栈是否为空 */
  isEmpty() {
    return this.count === 0;
  }

  /** 出栈 */
  pop() {
    // 判断栈是否为null
    if(this.isEmpty()) {
      return undefined;
    }
    const result = this.items[--this.count];
    delete this.items[this.count];
    return result;
  }

  /** 获取栈顶元素 */
  peek() {
    return this.items[this.count - 1];
  }

  /** 获取栈的大小 */
  size() {
    return this.count;
  }

  /** 清空栈 */
  clear() {
    this.items = {};
    this.count = 0;
  }

  /** 实现toString方法 */
  toString() {
    if(this.isEmpty()) {
      return '';
    }
    let str: string = `${this.items[0]}`;
    for(let i = 1; i < this.count; i++) {
      str += `,${this.items[i]}`
    }
    return str;
  }
}