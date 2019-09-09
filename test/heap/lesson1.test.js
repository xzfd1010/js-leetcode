import Heap from '../../code/heap/lesson1'

/**
 *     1
 *  10   9
 * 5 3
 */
test('Heap:1', () => {
  let heap = new Heap([1, 10, 9, 5, 3])
  expect(heap.sort()).toEqual([1, 3, 5, 9, 10])
})

/**
 *       1
 *    10   9
 *  2   4  3 5
 * 7 12 8 15
 */

test('Heap:2', () => {
  let heap = new Heap([1, 10, 9, 2, 4, 3, 6, 7, 12, 8, 15])
  expect(heap.sort()).toEqual([1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 15])
})
