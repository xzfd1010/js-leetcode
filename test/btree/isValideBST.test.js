import isValidBST, { Tree } from '../../code/btree/isValidBST'

test('isValidBST:1', () => {
  let root = new Tree([2, 1, 3])
  expect(isValidBST(root)).toBe(true)
})

test('isValidBST:2', () => {
  let root = new Tree([5, 1, 4, null, null, 3, 6])
  expect(isValidBST(root)).toBe(false)
})

test('isValidBST:3', () => {
  let root = new Tree([10, 5, 15, 1, 6, 7, 20])
  expect(isValidBST(root)).toBe(false)
})

test('isValidBST:4', () => {
  let root = new Tree([10, 5, 15, 1, 6, 12, 20, 0, 2, 4, 8, 11, 14, 16, 21])
  expect(isValidBST(root)).toBe(false)
})
