// export default function countBinarySubstrings (s) {
//   let result = []
//
//   function match (str) {
//     let start = str.match(/^(0+|1+)/)[0]
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
//   return result
// }

// 00110011 curLen = 2 preLen = 2 curLen = 1
export default function countBinarySubstrings (s) {
  let result = 0
  // curLen 与 preLen 分别记录当前数字出现次数与前半部分数字出现次数，curLen小于等于prLen则符合条件
  let curLen = 1
  let preLen = 0
  for (let i = 0; i < s.length - 1; i++) {
    // 指针往后移动，若当前数字与下一个数字一样则将curLen加1
    if (s[i] === s[i + 1]) {
      curLen += 1
    } else {
      // 否则就是遇到了不同之处，把相同子串的长度交给preLen，curLen再重新往后寻找
      preLen = curLen
      curLen = 1
    }
    if (preLen >= curLen) {
      result += 1
    }
  }
  return result
}
