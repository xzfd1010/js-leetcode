// 格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。
//
// 给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。格雷编码序列必须以 0 开头。
//
// 示例 1:
//
// 输入: 2
// 输出: [0,1,3,2]
// 解释:
// 00 - 0
// 01 - 1
// 11 - 3
// 10 - 2
//
// 对于给定的 n，其格雷编码序列并不唯一。
// 例如，[0,2,3,1] 也是一个有效的格雷编码序列。
//
// 00 - 0
// 10 - 2
// 11 - 3
// 01 - 1
//
// 示例 2:
//
// 输入: 0
// 输出: [0]
// 解释: 我们定义格雷编码序列必须以 0 开头。
//     给定编码总位数为 n 的格雷编码序列，其长度为 2n。当 n = 0 时，长度为 20 = 1。
//     因此，当 n = 0 时，其格雷编码序列为 [0]。

/**
 * @param {number} n
 * @return {number[]}
 */
// export default function (n) {
//   const result = []
//   if (n === 0) {
//     return [0]
//   }
//   let flag = true
//   let first = '0'.repeat(n)
//   result.push(first)
//   while (flag) {
//     let last = result[result.length - 1].split('')
//     let pushed = false
//     for (let i = last.length - 1; i >= 0; i--) {
//       let digit = 0
//       if (last[i] === '0') {
//         digit = 1
//       } else {
//         digit = 0
//       }
//       var copy = last.slice()
//       copy.splice(i, 1, digit)
//       let newElement = copy.join('')
//       if (result.indexOf(newElement) < 0) {
//         result.push(newElement)
//         pushed = true
//         break
//       }
//     }
//     if (!pushed) flag = false
//   }
//
//   return result.map(item => {
//     return parseInt(item, 2)
//   })
// }

// export default (n) => {
//   let make = (n) => {
//     if (n === 0) {
//       return [0]
//     } else if (n === 1) {
//       return ['0', '1']
//     } else {
//       let prev = make(n - 1)
//       let result = []
//       let max = Math.pow(2, n) - 1
//       for (let i = 0, len = prev.length; i < len; i++) {
//         result[i] = `0${prev[i]}`
//         result[max - i] = `1${prev[i]}`
//       }
//       return result
//     }
//   }
//
//   return make(n).map(num => {
//     return parseInt(num, 2)
//   })
// }

export default function grayCode (n) {
  if (n === 0) {
    return [0]
  } else if (n === 1) {
    return [0, 1]
  } else {
    let result = grayCode(n - 1)
    let tmp = 1 << n - 1
    for (let i = result.length; i > 0; i--) {
      result.push(tmp | result[i - 1])
    }
    return result
  }
}
