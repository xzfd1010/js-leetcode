// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
//
// 示例 1:
//
// 输入: "Let's take LeetCode contest"
// 输出: "s'teL ekat edoCteeL tsetnoc"
//
//
// 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
// Related Topics 字符串

// 不够优雅
// export default function reverseWords (s) {
//   let words = s.split(' ')
//   words = words.map((word) => {
//     return word.split('').reverse().join('')
//   })
//   return words.join(' ')
// }

// 不生成多余变量
// export default function reverseWords (s) {
//   return s.split(' ').map((word) => {
//     return word.split('').reverse().join('')
//   }).join(' ')
// }

// 先反转大单词，再使用小单词
// function reverseWords (str) {
//   let newString = str.split('').reverse().join('')
//   return newString.split(' ').reverse().join(' ')
// }

// 使用正则，这个正则可以，split中使用正则
export default function reverseWords (s) {
  return s.split(/\s/g).map((word) => {
    return word.split('').reverse().join('')
  }).join(' ')
}

// 不行，因为[\w']不能匹配()<>等字符
// export default function reverseWords (s) {
//   return s.match(/[\w']+/g).map((word) => {
//     return word.split('').reverse().join('')
//   }).join(' ')
// }
