import calPoint from '../../code/stack/calPoints'

test('calPoint', () => {
  expect(calPoint(['5', '2', 'C', 'D', '+'])).toBe(30)
  expect(calPoint(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toBe(27)
})
