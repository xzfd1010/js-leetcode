import sort, { NodeList } from '../../code/linkedList/sortList'

test('sort:1', () => {
  let head = new NodeList([4, 1, 3, 2, 7, 9, 10, 12, 6])
  sort(head)
  let res = []
  let next = head
  // next代表下一个节点
  while (next) {
    res.push(next.value)
    next = next.next
  }
  // 最后需要把链表转为数组
  expect(res).toEqual([1, 2, 3, 4, 6, 7, 9, 10, 12])
})

test('sort:2', () => {
  let head = new NodeList([4, 2, 1, 3])
  sort(head)
  console.log(head)
  let res = []
  let next = head
  // next代表下一个节点
  while (next) {
    res.push(next.value)
    next = next.next
  }
  // 最后需要把链表转为数组
  expect(res).toEqual([1, 2, 3, 4])
})
