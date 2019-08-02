import leastInterval from '../../code/queue/leastInerval'

test('leastInterval', () => {
  expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)).toBe(8)
  expect(leastInterval(['A', 'A', 'A', 'A', 'B', 'B', 'B', 'C', 'C'], 2)).toBe(10)
  expect(leastInterval(['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'], 2)).toBe(8)
})
