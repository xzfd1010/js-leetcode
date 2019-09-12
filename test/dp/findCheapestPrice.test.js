import { findCheapestPrice } from '../../code/dp/findCheapestPrice'

test('findCheapestPrice:1', () => {
  expect(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0)).toBe(500)
})

test('findCheapestPrice:2', () => {
  expect(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1)).toBe(200)
})

test('findCheapestPrice:3', () => {
  expect(findCheapestPrice(
    5,
    [[4, 1, 1], [1, 2, 3], [0, 3, 2], [0, 4, 10], [3, 1, 1], [1, 4, 3]],
    2,
    1,
    1)).toBe(-1)
})

test('findCheapestPrice:4', () => {
  expect(findCheapestPrice(
    10,
    [[3, 4, 4], [2, 5, 6], [4, 7, 10], [9, 6, 5], [7, 4, 4], [6, 2, 10], [6, 8, 6], [7, 9, 4], [1, 5, 4], [1, 0, 4], [9, 7, 3], [7, 0, 5], [6, 5, 8], [1, 7, 6], [4, 0, 9], [5, 9, 1], [8, 7, 3], [1, 2, 6], [4, 1, 5], [5, 2, 4], [1, 9, 1], [7, 8, 10], [0, 4, 2], [7, 2, 8]],
    6,
    0,
    7)).toBe(14)
})
