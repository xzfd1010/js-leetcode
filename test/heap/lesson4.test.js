import { nthSuperUglyNumber } from '../../code/heap/lesson4'

test('ugly:3', () => {
  expect(nthSuperUglyNumber(12, [2, 7, 13, 19])).toBe(32)
})
