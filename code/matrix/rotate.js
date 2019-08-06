// 给定一个 n × n 的二维矩阵表示一个图像。
//
// 将图像顺时针旋转 90 度。
//
// 说明：
//
// 你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。
//
// 示例 1:
//
// 给定 matrix =
// [
//  [1,2,3],
//  [4,5,6],
//  [7,8,9]
// ],
//
// 原地旋转输入矩阵，使其变为:
// [
//  [7,4,1],
//  [8,5,2],
//  [9,6,3]
// ]
//
//
// 示例 2:
//
// 给定 matrix =
// [
//  [ 5, 1, 9,11],
//  [ 2, 4, 8,10],
//  [13, 3, 6, 7],
//  [15,14,12,16]
// ],
//
// 原地旋转输入矩阵，使其变为:
// [
//  [15,13, 2, 5],
//  [14, 3, 4, 1],
//  [12, 6, 8, 9],
//  [16, 7,10,11]
// ]
//
//

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
export default function rotate (matrix) {
  // 获取n的维度
  let len = matrix.length

  // 从中间翻转
  for (let i = 0, halfLen = len / 2; i < halfLen; i++) {
    let temp = matrix[i]
    matrix[i] = matrix[len - i - 1]
    matrix[len - i - 1] = temp
  }

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }

  return matrix
}
