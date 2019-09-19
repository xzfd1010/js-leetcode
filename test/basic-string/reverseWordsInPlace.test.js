import { reverseWords } from '../../code/basic-string/reverseWords'

test('reverseWords:the sky is blue', () => {
  expect(reverseWords('the sky is blue')).toBe('blue is sky the')
})
