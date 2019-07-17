import hasGroupsSizeX from '../../code/basic-array/card'

test('hasGroupsSizeX:[1,2,3,4,4,3,2,1]', () => {
  expect(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])).toBe(true)
})

test('hasGroupsSizeX:[1,1,1,2,2,2,3,3]', () => {
  expect(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])).toBe(false)
})

test('hasGroupsSizeX:[1]', () => {
  expect(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])).toBe(true)
})

test('hasGroupsSizeX:[1,1]', () => {
  expect(hasGroupsSizeX([1, 1])).toBe(true)
})

test('hasGroupsSizeX:[1,1,2,2,2,2]', () => {
  expect(hasGroupsSizeX([1, 1, 2, 2, 2, 2])).toBe(true)
})

test('hasGroupsSizeX:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,8,8,8,9,9,9,10,10,10]', () => {
  expect(hasGroupsSizeX([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10])).toBe(true)
})
