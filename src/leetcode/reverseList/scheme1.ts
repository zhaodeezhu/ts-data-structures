
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

  let prev = null;
  let current = head;

  while (current) {
    // 将后一个节点备份
    const temp = current.next;
    // 然后断开担当前节点对后一个节点的指向，指向前一个节点
    current.next = prev;
    // 前后指针分别移动，准备开始下一次循环
    prev = current;
    current = temp as ListNode;
  }
  // 最终遍历完成最后一个节点就是当前翻转后的节点的指针
  return prev;
}
