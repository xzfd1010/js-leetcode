import canPlaceFlowers from '../../code/basic-array/flower'

test('canPlaceFlowers:[1, 0, 0, 0, 1]', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true)
})

test('canPlaceFlowers:[1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1]', () => {
  expect(canPlaceFlowers([1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1], 3)).toBe(true)
})

test('canPlaceFlowers:[0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1]', () => {
  expect(canPlaceFlowers([0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1], 5)).toBe(false)
})
test('canPlaceFlowers:[1,0,0,0,1,0,0]', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)).toBe(true)
})
test('canPlaceFlowers:[1,0,0,0,0]', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 0], 2)).toBe(true)
})
