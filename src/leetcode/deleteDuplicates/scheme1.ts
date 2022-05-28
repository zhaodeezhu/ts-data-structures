import { ListNode } from '../reverseList/node';

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  let current = head;
  while (current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}