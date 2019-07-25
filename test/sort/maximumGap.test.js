import maximumGap from '../../code/sort/maximumGap'

test('maximumGap', () => {
  expect(maximumGap([3, 6, 9, 1])).toBe(3)
  expect(maximumGap([10])).toBe(0)
  expect(maximumGap([13, 16, 19, 1])).toBe(12)

})
