// 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
//
// 重复出现的子串要计算它们出现的次数。
//
// 示例 1 :
//
//
// 输入: "00110011"
// 输出: 6
// 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。
//
// 请注意，一些重复出现的子串要计算它们出现的次数。
//
// 另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。
//
//
// 示例 2 :
//
//
// 输入: "10101"
// 输出: 4
// 解释: 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。
//
//
// 注意：
//
//
// s.length 在1到50,000之间。
// s 只包含“0”或“1”字符。
//
// Related Topics 字符串

// 异或运算：参与运算的两个值，如果两个相应位相同，结果为0，否则为1；
// export default function countBinarySubstrings (s) {
//   let result = []
//
//   function match (str) {
//     let start = str.match(/^(0+|1+)/)[0] // 这里返回的是所有符合的正则表达式
//     let end = (start[0] ^ 1).toString().repeat(start.length)
//     let reg = new RegExp(`^(${start}${end})`)
//     if (reg.test(str)) {
//       return RegExp.$1
//     } else {
//       return ''
//     }
//   }
//
//   for (let i = 0; i < s.length - 1; i++) {
//     const r = match(s.slice(i))
//     if (r) {
//       result.push(r)
//     }
//   }
//   return result.length
// }

// 00110011 curLen = 2 preLen = 2 curLen = 1
// i = 0 curLen = 2 preLen = 0
// i = 1 curLen = 1 preLen = 2 01
// i = 2 curLen = 2 preLen = 2 0011
// i = 3 curLen = 1 preLen = 2 10
// i = 4 curLen = 2 preLen = 2 1100
// i = 5 curLen = 1 preLen = 2 01
// i = 6 curLen = 2 preLen = 2 0011
// export default function countBinarySubstrings (s) {
//   let arr = []
//   let result = 0
//   // curLen 与 preLen 分别记录当前数字出现次数与前半部分数字出现次数，curLen小于等于preLen则符合条件
//   let curLen = 1
//   let preLen = 0
//   for (let i = 0; i < s.length - 1; i++) {
//     // 指针往后移动，若当前数字与下一个数字一样则将curLen加1
//     if (s[i] === s[i + 1]) {
//       curLen += 1
//     } else {
//       // 否则就是遇到了不同之处，把相同子串的长度交给preLen，curLen再重新往后寻找
//       preLen = curLen
//       curLen = 1
//     }
//     if (preLen >= curLen) {
//       result += 1
//       let current = ((s[i + 1] ^ 1) + '').repeat(curLen) + s[i + 1].repeat(curLen)
//       arr.push(current)
//     }
//   }
//   console.log(arr)
//   return result
// }
