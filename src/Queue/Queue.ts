
interface IItem<T> {
  [key:number]: T
}

export class Queue<T> {

  /** 队尾的数量 */
  count = 0;
  /** 对头的指针 */
  lowestCount = 0;
  /** 数据项 */
  items: IItem<T> = {};

  /** 入列 */
  protected enqueue(element: T) {
    this.items[this.count++] = element;
  }
  /** 出列 */
  protected dequeue() {
    if(this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount++];
    return result;
  }
  /** 查看头元素 */
  protected peek() {
    return this.items[this.lowestCount];
  }
  /** 是否为空 */
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }
  /** 大小 */
  size() {
    return this.count - this.lowestCount;
  }
  /** 清空 */
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  /** toString */
  toString() {
    if(this.isEmpty()) {
      return '';
    }
    let str = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      const item = this.items[i];
      str += `,${item}`
    }
    return str;
  }
}