// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
//
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
//
// 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
//
//
//
// 网格中的障碍物和空位置分别用 1 和 0 来表示。
//
// 说明：m 和 n 的值均不超过 100。
//
// 示例 1:
//
// 输入:
// [
//  [0,0,0],
//  [0,1,0],
//  [0,0,0]
// ]
// 输出: 2
// 解释:
// 3x3 网格的正中间有一个障碍物。
// 从左上角到右下角一共有 2 条不同的路径：
// 1. 向右 -> 向右 -> 向下 -> 向下
// 2. 向下 -> 向下 -> 向右 -> 向右
//
// Related Topics 数组 动态规划

// leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
export const uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length // 行
  let n = obstacleGrid[0].length // 列
  let dp = (m, n) => {
    if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
      return 0
    }
    // 边界条件，是，应该只有2种边界条件
    if (m < 2 || n < 2) {
      if (m < 2) {
        // 单行
        return obstacleGrid[0].includes(1) ? 0 : 1
      } else {
        for (let i = 0; i < m; i++) {
          if (obstacleGrid[i][0] === 1) {
            return 0
          }
        }
        return 1
      }
    } else {
      return dp(m - 1, n) + dp(m, n - 1)
    }
  }
  return dp(m, n)
}
// leetcode submit region end(Prohibit modification and deletion)

export function getPaths (obstacleGrid) {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length

  // 极端条件
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
    return 0
  }

  obstacleGrid[0][0] = 1

  // 将第一行遍历，设置为0代表不能通过，设置为1代表可以通过
  for (let i = 1; i < n; i++) {
    // 当前格为0且前一个格为1，代表可以通过；当前格为1 || 前一个格为0，代表不能通过
    obstacleGrid[0][i] = obstacleGrid[0][i] === 0 && obstacleGrid[0][i - 1] === 1 ? 1 : 0
  }

  // 同理遍历第一列
  for (let j = 1; j < m; j++) {
    obstacleGrid[j][0] = obstacleGrid[j][0] === 0 && obstacleGrid[j - 1][0] === 1 ? 1 : 0
  }

  // 从上向下，从左往右遍历，f(m,n) = f(m-1,n) + f(m,n-1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      obstacleGrid[i][j] = obstacleGrid[i][j] !== 1 ? obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1] : 0
    }
  }

  return obstacleGrid[m - 1][n - 1]
}
