import { ListNode } from '../reverseList/node';

/**
 * 返回一个有环链表入环的节点
 * 使用hashmap存储的方式找到相同的第一个节点就是有环的
 * 这种实现方式易于理解
 * 时间复杂度是O(n)
 * 空间复杂度是O(n)
 */
export function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return null;
  }
  // 使用map存储的形式
  let current = head;
  const map = new WeakMap();
  while (current.next) {
    const node = map.get(current);
    if (node) {
      return current;
    } else {
      map.set(current, true);
      current = current.next;
    }
  }
  return null;
}