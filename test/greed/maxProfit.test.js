import { maxProfit } from '../../code/greed/maxProfit'

test('buy:1', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7)
})

test('buy:2', () => {
  expect(maxProfit([1, 2, 3, 4, 5])).toBe(4)
})

test('buy:3', () => {
  expect(maxProfit([7, 6, 3, 2, 1])).toBe(0)
})
