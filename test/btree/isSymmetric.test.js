import isSymmetric, { Tree } from '../../code/btree/isSymmetric'

test('isSymmetric:1', () => {
  let root = new Tree([1, 2, 2, 3, 4, 4, 3])
  expect(isSymmetric(root)).toBe(true)
})

test('isSymmetric:2', () => {
  let root = new Tree([1, 2, 2, null, 3, null, 3])
  console.log(root)
  expect(isSymmetric(root)).toBe(false)
})
