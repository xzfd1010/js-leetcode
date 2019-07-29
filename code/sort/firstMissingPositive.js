// 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。
//
// 示例 1:
//
// 输入: [1,2,0]
// 输出: 3
//
// 示例 2:
//
// 输入: [3,4,-1,1]
// 输出: 2
//
// 示例 3:
//
// 输入: [7,8,9,11,12]
// 输出: 1
//
// 说明:
//
// 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 交换的意义是什么？为什么要把第i个和第j个数交换？为了让第j个数符合要求
 * 当j是索引，并且第j个数不符合 value = index + 1的规则时，把第j个和第i个数交换；
 * 这时候i没有变，nums[i] = j+1 变成了 nums[j] 此时 nums[j] = j + 1符合了 value = index+1的要求
 * 这样一轮遍历下来，不符合要求的数都放到了数组后面，符合要求的数都放到了前面
 */
export default function firstMissingPositive (nums) {
  let i = 0; let j; let tmp
  while (i < nums.length) {
    j = nums[i] - 1 // 如果按顺序排好了， 第i个元素应该等于 i+1
    if (j >= 0 && j < nums.length && nums[j] !== j + 1) {
      tmp = nums[i]
      nums[i] = nums[j]
      nums[j] = tmp
    } else {
      i++
    }
  }
  console.log(nums)
  i = 0
  while (i < nums.length && nums[i] === i + 1) i++
  return i + 1
}

firstMissingPositive([0, 1, -2, 2, 3, -3])
