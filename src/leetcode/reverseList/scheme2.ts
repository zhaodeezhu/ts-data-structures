/**
 * 使用遍历的方式翻转链表
 * 链表的节点需要临时存储，存储完成之后前面的连接就可以断开操作了（这个一点非常重要）
 * 如果要操作到每一个节点，那么就要判断current，如果要获取到最后一个节点就从current.next判断
 */
import { ListNode } from './node';

export function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  // 获取到最后一个node
  const newHead = reverseList(head.next);

  // 从倒数第二个node开始转化指向，依次执行
  head.next.next = head;
  head.next = null;
  return newHead;
}
