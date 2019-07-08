import countBinarySubstrings from '../../code/basic-string/count'

test('countBinarySubstrings:00110', () => {
  expect(countBinarySubstrings('00110')).toEqual(['0011', '01', '10'].length)
})
test('countBinarySubstrings:00110011', () => {
  expect(countBinarySubstrings('00110011')).toEqual(['0011', '01', '1100', '10', '0011', '01'].length)
})
