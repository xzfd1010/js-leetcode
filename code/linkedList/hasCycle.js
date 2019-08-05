// 给定一个链表，判断链表中是否有环。
//
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
//
// 示例 1：
//
// 输入：head = [3,2,0,-4], pos = 1
// 输出：true
// 解释：链表中有一个环，其尾部连接到第二个节点。
//
// 示例 2：
//
// 输入：head = [1,2], pos = 0
// 输出：true
// 解释：链表中有一个环，其尾部连接到第一个节点。
//
// 示例 3：
//
// 输入：head = [1], pos = -1
// 输出：false
// 解释：链表中没有环。
//
// 进阶：
//
// 你能用 O(1)（即，常量）内存解决此问题吗？
//

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
class Node {
  constructor (value) {
    this.value = value
    this.next = null // 指向下一个链表节点
  }
}

class NodeList {
  constructor (arr) {
    let head = new Node(arr.shift()) // 头部节点
    let next = head // 下一个节点
    arr.map(item => {
      next.next = new Node(item)
      next = next.next
    })
    return head // constructor返回head，此时new NodeList返回的就是head
  }
}

/**
 * @param {NodeList} head
 * @return {boolean}
 */
export default function hasCycle (head) {
  if (!head || !head.next) {
    return false
  }
  let slow = head
  let fast = head.next
  while (1) {
    if (!fast || !fast.next) {
      return false
    } else if (slow === fast || slow === fast.next) {
      return true
    } else {
      slow = slow.next
      fast = fast.next.next
    }
  }
}

export { Node, NodeList }
