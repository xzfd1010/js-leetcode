import { uniquePathsWithObstacles, getPaths } from '../../code/dp/uniquePathsWithObstacles'

test('uniquePathsWithObstacles', () => {
  let arr = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ]
  expect(uniquePathsWithObstacles(arr)).toBe(2)
})

test('getPaths', () => {
  let arr = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ]
  expect(getPaths(arr)).toBe(2)
})
