import firstMissingPositive from '../../code/sort/firstMissingPositive'

test('firstMissingPositive', () => {
  expect(firstMissingPositive([1, 2, 0])).toBe(3)
  expect(firstMissingPositive([3, 4, -1, 1])).toBe(2)
  expect(firstMissingPositive([-7, 0, -1, 7, 8, 9, 11, 12])).toBe(1)
  expect(firstMissingPositive([0, 0, 1, 1, 2, 2])).toBe(3)
})
