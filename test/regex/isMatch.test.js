import isMatch from '../../code/regex/isMatch'

test('isMatch:(mississippi,mis*is*p*.', () => {
  expect(isMatch('mississippi', 'mis*is*p*.')).toBe(false)
})

test('isMatch:(aab,c*a*b', () => {
  expect(isMatch('aab', 'c*a*b')).toBe(true)
})
