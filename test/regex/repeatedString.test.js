import repeatedString from '../../code/regex/repeatedString'

test('repeatedString:abcabc', () => {
  expect(repeatedString('abcabc')).toBe(true)
})

test('repeatedString:aba', () => {
  expect(repeatedString('aba')).toBe(false)
})

test('repeatedString:abcabcabcabc', () => {
  expect(repeatedString('abcabcabcabc')).toBe(true)
})
