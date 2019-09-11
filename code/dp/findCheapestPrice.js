// 有 n 个城市通过 m 个航班连接。每个航班都从城市 u 开始，以价格 w 抵达 v。
//
// 现在给定所有的城市和航班，以及出发城市 src 和目的地 dst，你的任务是找到从 src 到 dst 最多经过 k 站中转的最便宜的价格。
// 如果没有这样的路线，则输出 -1。
//
// 示例 1:
// 输入:
// n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
// src = 0, dst = 2, k = 1
// 输出: 200
// 解释:
// 城市航班图如下
//
//
// 从城市 0 到城市 2 在 1 站中转以内的最便宜价格是 200，如图中红色所示。
//
// 示例 2:
// 输入:
// n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
// src = 0, dst = 2, k = 0
// 输出: 500
// 解释:
// 城市航班图如下
//
// 从城市 0 到城市 2 在 0 站中转以内的最便宜价格是 500，如图中蓝色所示。
//
// 提示：
//
// n 范围是 [1, 100]，城市标签从 0 到 n - 1.
// 航班数量范围是 [0, n * (n - 1) / 2].
// 每个航班的格式 (src, dst, price).
// 每个航班的价格范围是 [1, 10000].
// k 范围是 [0, n - 1].
// 航班没有重复，且不存在环路
//
// Related Topics 堆 广度优先搜索 动态规划

/**
 * @param {number} n  那个城市
 * @param {number[][]} flights 航班情况
 * @param {number} src 起始点
 * @param {number} dst 结束点
 * @param {number} K 中转次数
 * @return {number}
 */
// F(src,dst,k) = Min(F(src,dst-1,k-1)+F(dst-1,dst,1))
export const findCheapestPrice = function (n, flights, src, dst, K) {
  let getFlights = (src, dst, K) => {
    // 获取所有能直达dst的路线
    let prev = flights.filter(flight => flight[1] === dst)
    // 遍历这些路线，寻找包含src的，并取最小值
    if (!prev.length) return
    let arr = prev.map(flight => {
      if (flight[0] === src && K >= 0) {
        // 当前路线从src出发，直达dst
        return flight[2]
      } else if (K === 0 && flight[0] !== src) {
        // 当前路线中不包含src，排除掉
        return false
      } else {
        // 当前路线继续向前查找，目的地变为前一站的始发地
        return flight[2] + getFlights(src, flight[0], K - 1)
      }
    }).filter(value => value)
    if (arr.length) return Math.min.apply(null, arr)
  }
  return getFlights(src, dst, K) || -1
}
// 有几次 K，就需要做几次循环，举例第二轮循环的所算的所有参数一定都是参与了一次中转的，第三轮的则一定是参与了两次中转的，以此类推。
export const findCheapest = function (n, flights, src, dst, K) {
  let dp = new Array(n).fill(Infinity)
  dp[src] = 0
  for (let i = 0; i < K + 1; i++) {
    const arr = [].concat(dp)
    for (let i = 0; i < flights.length; i++) {
      let iDest = flights[i][1]
      let iSrc = flights[i][0]
      let iCost = flights[i][2]
      arr[iDest] = Math.min(arr[iDest], dp[iSrc] + iCost)
    }
    dp = arr.concat([])
  }
  return dp[dst] === Infinity ? -1 : dp[dst]
}
