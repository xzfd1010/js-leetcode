import bubbleSort from '../../code/sort/bubbleSort'

test('冒泡排序', () => {
  expect(bubbleSort([1, 8, 2, 5, 9])).toEqual([1, 2, 5, 8, 9])
})
