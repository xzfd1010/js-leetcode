// 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。
//
// 如果数组元素个数小于 2，则返回 0。
//
// 示例 1:
//
// 输入: [3,6,9,1]
// 输出: 3
// 解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
//
// 示例 2:
//
// 输入: [10]
// 输出: 0
// 解释: 数组元素个数小于 2，因此返回 0。
//
// 说明:
//
// 你可以假设数组中所有元素都是非负整数，且数值在 32 位有符号整数范围内。
// 请尝试在线性时间复杂度和空间复杂度的条件下解决此问题。

/**
 * @param {number[]} nums
 * @return {number}
 */
// export default function maximumGap (nums) {
//   if (nums.length < 2) return 0
//   let sortNums = nums.sort((a, b) => a - b)
//   let gap = 0
//   for (let i = 0, len = sortNums.length; i < len - 1; i++) {
//     let temp = sortNums[i + 1] - sortNums[i]
//     gap = temp > gap ? temp : gap
//   }
//   return gap
// }

export default function maximumGap (nums) {
  if (nums.length < 2) return 0
  let gap = 0
  for (let i = 0, len = nums.length; i < len; i++) {
    for (let j = 0, stop = len - i - 1; j < stop; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
    if (i > 0 && nums[len - i] - nums[len - i - 1] > gap) {
      gap = nums[len - i] - nums[len - i - 1]
    }
  }
  return gap
}
