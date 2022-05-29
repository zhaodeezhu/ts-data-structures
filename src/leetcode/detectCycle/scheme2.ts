import { ListNode } from '../reverseList/node';

/**
 * 返回一个有环链表入环的节点
 * 使用龟兔指针的形式，涉及到一些数据思维在里面
 * 假设头到入环点是p的长度是a, p到连个指针相遇的点p1的长度是b, p1回到入环点的长度是c
 * 假设快指针走了在中走了n圈在p1点相遇得到 慢指针走的距离 a + b, 快指针走的距离是a + n(b + c) + b;
 * 因为快指针的速度是慢指针的两倍 2(a + b) = a + n(b + c) + b
 * 整理 a + b = n(b + c); a = n(b + c) - b; a = (n - 1)b + nc; a = (n - 1)b + nc - c + c; a = (n - 1)b + (n - 1)c + c;
 * 最终 a = (n - 1)(b + c) + c;
 * b + c 实际上就是环的周长，a 的距离实际上就是 n - 1 周长在加上c的距离
 * 简化一下理解就是 从头走到相遇点p，就是在环中走 几圈，再走c的长度
 * 所以在相遇点p1, 可以让满指针从头走，快指针步幅改成1，最终一定会在p点相遇
 * 由此可以找到入环节点p
 * 
 * 这种方法比较难理解，就是不需要再用一个map去尺寸出数据了，所以空间占用会小一点
 * 时间复杂度是O(n)
 * 空间复杂度是O(1)
 */
export function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return null;
  }
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next as ListNode;
    fast = fast.next.next as ListNode;
    // 说明存在环
    if (slow === fast) {
      // 从头走
      slow = head;
      while(slow !== fast) {
        slow = slow.next as ListNode;
        fast = fast.next as ListNode;
      }
      return slow;
    }
  }

  return null;
}