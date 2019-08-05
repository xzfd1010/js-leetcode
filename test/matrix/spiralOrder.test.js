import spiralOrder from '../../code/matrix/spiralOrder'

test('spiralOrder', () => {
  let input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  expect(spiralOrder(input)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
})

test('spiralOrder:2', () => {
  expect(spiralOrder([[7], [9], [6]])).toEqual([7, 9, 6])
})

test('spiralOrder:3', () => {
  expect(spiralOrder([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
