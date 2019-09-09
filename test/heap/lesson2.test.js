import { frequencySort } from '../../code/heap/lesson2'

/**
 *     1
 *  10   9
 * 5 3
 */
test('Heap:1', () => {
  expect(frequencySort('cabab')).toMatch(/aabbc|bbaac/)
})
