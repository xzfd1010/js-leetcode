import quickSort from '../../code/sort/quickSort'

test('快速排序', () => {
  expect(quickSort([1, 8, 2, 5, 9])).toEqual([1, 2, 5, 8, 9])
  expect(quickSort([1, 2, 0])).toEqual([0, 1, 2])
  expect(quickSort([3, 5, 8, 1, 2, 0, -2, -4])).toEqual([-4, -2, 0, 1, 2, 3, 5, 8])
})
