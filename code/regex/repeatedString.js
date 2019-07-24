// 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。
//
// 示例 1:
//
// 输入: "abab"
// 输出: True
// 解释: 可由子字符串 "ab" 重复两次构成。
//
// 示例 2:
//
// 输入: "aba"
// 输出: False
//
// 示例 3:
//
// 输入: "abcabcabcabc"
// 输出: True
// 解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)

/**
 * @param {string} s
 * @return {boolean}
 */
// export default function repeatedSubstringPattern (s) {
//   let regex = /^(\w+)\1+$/g
//   return regex.test(s)
// }
//重复字符串, 去除首尾两个字符.
// 如果是子字符串构成的, 那么应该存在于重复的字符串中.
export default function repeatedSubstringPattern (s) {
  let newstr = s.slice(1) + s.slice(0, -1)
  return newstr.indexOf(s) > -1
}
