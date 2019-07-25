import sortArrayByParity from '../../code/sort/sortArrayByParity'

test('奇偶排序:[4,2,5,7]', () => {
  expect(sortArrayByParity([4, 2, 5, 7])).toEqual([2, 5, 4, 7])
})
