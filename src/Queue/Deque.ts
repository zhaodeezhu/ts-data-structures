import { Queue } from './Queue';

export class Deque<T> extends Queue<T> {
  /** 队头添加元素 */
  addFront(element: T) {
    if(this.isEmpty()) {
      this.addBack(element);
    } else {
      this.items[--this.lowestCount] = element;
    }
  }
  /** 队尾添加元素 */
  addBack(element: T) {
    this.items[this.count++] = element;
  }
  /** 队头删除元素 */
  removeFront() {
    if(this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount++];
    return result;
  }
  /** 队尾删除元素 */
  removeBack() {
    if(this.isEmpty()) {
      return undefined;
    }
    const result = this.items[--this.count];
    delete this.items[this.count];
    return result;
  }
  /** 队头取元素 */
  peekFront() {
    if(this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  /** 队尾取元素 */
  peekBack() {
    if(this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
}