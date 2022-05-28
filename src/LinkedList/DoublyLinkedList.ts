import { DoublyNode, defaultEquelFn, Node } from './Node';
import { LinkedList } from './LinkedList';

type IEquelFn = <T>(ele1: T, ele2: T) => boolean;

export class DoublyLinkedList<T> extends LinkedList<T> {
  /** 头 */
  head: DoublyNode<T> | null = null;
  /** 尾 */
  tail: DoublyNode<T> | null = null;

  constructor(equelFn: IEquelFn = defaultEquelFn) {
    super(equelFn);
  }

  /** 添加元素 */
  push(element: T): void {
    const node = new DoublyNode(element);
    // 头部不存在
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      if (this.tail) {
        const tailNode = this.tail;
        tailNode.next = node;
        node.prev = tailNode;
        this.tail = node;
      }
    }
    this.count++;
  }

  /** 插入元素 */
  insert(element: T, index: number): boolean {
    if (index >= 0 || index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (!this.head) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          (current as DoublyNode<T>).prev = node;
          this.head = node;
        }
      } else if (index === this.count) {
        current = this.tail;
        node.prev = current;
        (current as DoublyNode<T>).next = node;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        current = (previous as DoublyNode<T>).next;
        node.next = current;
        (previous as DoublyNode<T>).next = node;
        (current as DoublyNode<T>).prev = node;
        node.prev = previous;
      }
      this.count++;
      return true;
    }
    return false;
  }

  getElementAt(index: number): DoublyNode<T> | null {
    if (index >= 0 && index < this.count) {
      
    }
    return null;
  }
}