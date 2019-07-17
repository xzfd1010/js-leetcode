// 给定一副牌，每张牌上都写着一个整数。
//
// 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
//
// 每组都有 X 张牌。
// 组内所有的牌上都写着相同的整数。
//
// 仅当你可选的 X >= 2 时返回 true。
//
// 示例 1：
//
// 输入：[1,2,3,4,4,3,2,1]
// 输出：true
// 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
//
// 示例 2：
//
// 输入：[1,1,1,2,2,2,3,3]
// 输出：false
// 解释：没有满足要求的分组。
//
// 示例 3：
//
// 输入：[1]
// 输出：false
// 解释：没有满足要求的分组。
//
// 示例 4：
//
// 输入：[1,1]
// 输出：true
// 解释：可行的分组是 [1,1]
//
//
// 示例 5：
//
// 输入：[1,1,2,2,2,2]
// 输出：true
// 解释：可行的分组是 [1,1]，[2,2]，[2,2]
//
//
//
// 提示：
//
//
// 1 <= deck.length <= 10000
// 0 <= deck[i] < 10000

/**
 * @param {number[]} deck
 * @return {boolean}
 */
// 需要处理 deck 中的数字 > 10的情况
// export default function hasGroupsSizeX (deck) {
//   let str = deck.sort().join('') // 将数组按顺序变成字符串
//   // 单张或者多张分组，并模式匹配
//   let group = str.match(/(\d)\1+|\d/g)
//   // 两两求公约数
//   while (group.length > 1) {
//     let a = group.shift().length
//     let b = group.shift().length
//     let v = gcd(a, b)
//     if (v === 1) {
//       return false
//     } else {
//       group.unshift('0'.repeat(v))
//     }
//   }
//   // 处理完之后为空
//   return group.length ? group[0].length > 1 : false
// }

export default function hasGroupsSizeX (deck) {
  // 将数组按顺序变成分组的数组
  let group = deck.sort().reduce((acc, cur, index) => {
    if (!index || cur !== acc[acc.length - 1][0]) {
      acc.push([cur])
      return acc
    }
    acc[acc.length - 1].push(cur)
    return acc
  }, [])
  // 两两求公约数
  while (group.length > 1) {
    let a = group.shift().length
    let b = group.shift().length
    let v = gcd(a, b)
    if (v === 1) {
      return false
    } else {
      group.unshift('0'.repeat(v).split(''))
    }
  }
  // 处理完之后为空
  return group.length ? group[0].length > 1 : false
}

// 求公约数的问题
function gcd (a, b) {
  if (b === 0) {
    return a
  } else {
    return gcd(b, a % b)
  }
}
