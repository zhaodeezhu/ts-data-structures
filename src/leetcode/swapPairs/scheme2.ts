import { ListNode } from '../reverseList/node';

/** 
 * 链表两两交换
 * 节点之间的交换有点难以理解
 * 这个时候需要两个指针 prev:用于记录当前节点的前一个节点；current:记录当前节点
 * 因为是交换，所以current执行完以后要跨域一个节点进行另外的两个节点交换
 * 结束条件要判断当前的节点和下一个节点都存在才有必要再次执行交换
 */
 export function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  let current = head;

  // 交换完实际上第二项会作为头节点
  const newHead = head.next;
  // 用于记录前一个节点
  let prev = null;
  // 换节点
  while (current && current.next) {
    // // 下一个节点
    const nextNode = current.next;
    // 下下一个节点
    const nextNextNode = nextNode.next;
    // 下一个节点指向当前节点
    nextNode.next = current;
    // 当前接线指向下下个节点
    current.next = nextNextNode;
    if (prev) {
      // 前一个节点指向当前的节点
      prev.next = nextNode;
    }
    // 获取到前一个节点
    prev = current;
    current = nextNextNode as ListNode;
  }
  return newHead;
 }