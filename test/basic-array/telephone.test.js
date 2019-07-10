import letterCombinations from '../../code/basic-array/telephone'

test('letterCombinations:23', () => {
  expect(letterCombinations('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})
test('letterCombinations:2', () => {
  expect(letterCombinations('2')).toEqual(['a', 'b', 'c'])
})
test('letterCombinations:', () => {
  expect(letterCombinations('')).toEqual([])
})
