import { ListNode } from '../reverseList/node';

/** 
 * 链表两两交换
 * 只交换值的实现
 * 这个比较简单和容易理解
 * 类似于开始学编程的时候两个数交换
 */
export function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  let current = head;

  while (current && current.next) {
    const temp = current.val;
    current.val = current.next.val;
    current.next.val = temp;
    current = current.next.next as ListNode;
  }

  return head;
}