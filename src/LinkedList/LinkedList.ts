/**
 * 链表和数组的区别
 * 1. 数组是有序并且连续的存储单元
 * 2. 链表是有序但并不是连续的存储单元
 * 3. 数组从中间插入元素需要移动其他元素，开销比较高
 */

 import { Node, defaultEquelFn } from './Node';

 type IEquelFn = <T>(ele1: T, ele2: T) => boolean;
 
 type IElementNode<T> = Node<T> | null;
 
 export class LinkedList<T> {
   /** 头指针 */
   head: Node<T> | null = null;
   /** 总数 */
   count = 0;
   /** 比较方法 */
   equelFn: IEquelFn = defaultEquelFn;
   constructor(equelFn: IEquelFn = defaultEquelFn) {
     this.equelFn = equelFn;
   }
 
   /** 添加到尾部 */
   push(element: T) {
     const node = new Node(element);
     let current: IElementNode<T> = null;
     if (!this.head) {
       this.head = node;
     } else {
       current = this.head as Node<T>;
       while (current && current.next) {
         current = current.next;
       }
       current.next = node;
     }
     this.count++;
   }
 
   /** 插入元素到指定位置 */
   insert(element: T, index: number) {
     if (index < 0 || index > this.count) {
       return false;
     }
 
     const node = new Node(<T>element)
 
     if (index === 0) {
       const current: IElementNode<T> = this.head;
       node.next = current;
       this.head = node;
     }
     // 获取到前一个元素
     const prevNode = this.getElementAt(index - 1) as Node<T>;
     node.next = prevNode.next;
     prevNode.next = node;
     return true;
   }
 
   /** 获取指定位置的元素 */
   getElementAt(index: number) {
     // 找寻边界
     if (this.isEmpty() || index < 0 || index > this.count) {
       return null;
     }
     let current: IElementNode<T> = this.head as Node<T>;
     for (let i = 0; i < index && current; i++) {
       current = current.next
     }
     return current;
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
     if (this.isEmpty()) {
       return -1;
     }
     let current = this.head;
     let index = 0;
     while (current) {
       if (this.equelFn<T>(element, current.element as T)) {
         return index;
       }
       index++;
       current = current.next;
     }
     return -1;
   }
 
   /** 移除元素 */
   remove(element: T) {
     const index = this.indexOf(element);
     if (index === -1) {
       return null;
     }
     return this.removeAt(index);
   }
 
   /** 从指定位置移除元素 */
   removeAt(index: number) {
     if (index < 0 || index > this.count) {
       return null;
     }
     let current = this.head as Node<T>;
     if (index === 0) {
       this.head = current?.next as IElementNode<T>;
       return current.element;
     }
     let prev = current;
     for (let i = 0; i < index && current; i++) {
       prev = current;
       current = current.next as Node<T>;
     }
     prev.next = current.next;
     return current.element;
   }
 
   /** toString */
   toString() {
     if (!this.head) {
       return '';
     }
     let current: IElementNode<T> = this.head;
     let str = `${current.element}`;
     for (let i = 1; i < this.count && current; i++) {
       str += `,${current.element}`;
       current = current.next;
     }
     return str;
   }
 }
