// 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
//
// 示例 1:
//
// 输入:
// [
// [ 1, 2, 3 ],
// [ 4, 5, 6 ],
// [ 7, 8, 9 ]
// ]
// 输出: [1,2,3,6,9,8,7,4,5]
//
// 示例 2:
//
// 输入:
// [
//  [1, 2, 3, 4],
//  [5, 6, 7, 8],
//  [9,10,11,12]
// ]
// 输出: [1,2,3,4,8,12,11,10,9,5,6,7]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
export default function spiralOrder (matrix) {
  let result = []
  let getMatrix = (arr) => {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (i === 0) {
        arr[i].map(item => {
          result.push(item)
        })
      } else if (i === len - 1) {
        arr[i].reverse().map(item => {
          result.push(item)
        })
      } else {
        if (arr[i].length) {
          result.push(arr[i].pop())
        }
      }
    }
    // 去掉第一行和最后一行
    arr.pop()
    arr.shift()
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i].length) {
        result.push(arr[i].shift())
      }
    }
    if (arr.length > 0) {
      return getMatrix(arr)
    } else {
      return result
    }
  }
  return getMatrix(matrix)
}
// export default (arr) => {
//   // 处理每一圈的数据遍历过程
//   let map = (arr, r = []) => {
//     for (let i = 0, len = arr.length; i < len; i++) {
//       if (i === 0) {
//         r = r.concat(arr[i])
//       } else if (i === len - 1) {
//         r = r.concat(arr[i].reverse())
//       } else {
//         // 增加边界检查（Leetcode测试用例）
//         if (arr[i].length) {
//           r.push(arr[i].pop())
//         }
//       }
//     }
//     arr.shift()
//     arr.pop()
//     for (let i = arr.length - 1; i >= 0; i--) {
//       // 增加边界检查（Leetcode测试用例）
//       if (arr[i].length) {
//         r.push(arr[i].shift())
//       }
//     }
//     if (arr.length) {
//       return map(arr, r)
//     } else {
//       return r
//     }
//   }
//   return map(arr, [])
// }
