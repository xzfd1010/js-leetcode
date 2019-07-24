import selectionSort from '../../code/sort/selectionSort'

test('选择排序', () => {
  expect(selectionSort([1, 8, 2, 5, 9])).toEqual([1, 2, 5, 8, 9])
})
