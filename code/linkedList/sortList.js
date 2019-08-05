// 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
//
// 示例 1:
//
// 输入: 4->2->1->3
// 输出: 1->2->3->4
//
//
// 示例 2:
//
// 输入: -1->5->3->4->0
// 输出: -1->0->3->4->5
//

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 声明一个链表
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

// 交换两个节点的值
function swap (p, q) {
  let val = q.value
  q.value = p.value
  p.value = val
}

/**
 * @param begin 起始节点，也作为基准节点
 * @param end 终止节点
 * return begin在排序后的链表中的位置，返回节点即可
 */
function partion (begin, end) {
  let value = begin.value
  let p = begin
  let q = begin.next
  // console.log('end', end)
  // console.log('q', q)
  // console.log('q!==end', q !== end)
  while (q !== end) {
    if (q.value < value) {
      p = p.next
      swap(p, q)
    }
    q = q.next // 每次循环应该让q指向下一个节点
  }
  swap(begin, p)
  return p
}

export default function sort (begin, end) {
  if (!end) end = null
  if (begin !== end) {
    let part = partion(begin, end)
    sort(begin, part)
    sort(part.next, end)
  }
}

export { Node, NodeList }
