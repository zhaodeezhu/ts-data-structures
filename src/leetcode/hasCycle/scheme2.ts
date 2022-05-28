import { ListNode } from '../reverseList/node';

/**
 * 判断一个链表是否有环
 * 使用map的形式存储起来，判断原本是否已经存在
 * 这种方式，执行速度快，占用空间大
 */
export function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return false;
  }
  let current = head;
  const map = new WeakMap();
  while (current) {
    if(map.get(current)) {
      return true;
    }
    map.set(current, true);
    current = current.next as ListNode;
  }
  return false;
}