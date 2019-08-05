import hasCycle, { NodeList } from '../../code/linkedList/hasCycle'

test('hasCycle:1', () => {
  let head = new NodeList([6, 1, 2, 5, 7, 9])
  head.next.next.next.next.next.next = head.next // 让9的next指向1
  expect(hasCycle(head)).toBe(true)
})

test('hasCycle:2', () => {
  let head = new NodeList([6, 1, 2, 5, 7, 9])
  expect(hasCycle(head)).toBe(false)
})
