import { ListNode } from '../reverseList/node';

/**
 * 判断一个链表是否有环
 * 使用快慢指针的形似（龟兔指针）
 * 类似于龟兔赛跑，如果有环总有一天会相遇
 * 这种方式，执行速度快，占用空间小
 */
export function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return false;
  }
  // 使用快慢指针的方式，可能会慢一点，内容占用较小
  let fast = head;
  let slow = head;
  while (fast && slow && fast.next && slow.next) {
    fast = fast.next.next as ListNode;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
}