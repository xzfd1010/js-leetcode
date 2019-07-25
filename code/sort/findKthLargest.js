// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
//
// 示例 1:
//
// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
//
//
// 示例 2:
//
// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4
//
// 说明:
//
// 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// export default function findKthLargest (nums, k) {
//   let sortArr = nums.sort((a, b) => b - a)
//   return sortArr[k - 1]
// }

// 性能更好的方法，结合冒泡
export default function findKthLargest (arr, k) {
  let len = arr.length
  for (let i = 0; i < k; i++) {
    for (let j = 0, stop = len - 1 - i; j < stop; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr[len - k]
}
