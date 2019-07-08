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

// 使用正则
// export default function reverseWords (s) {
//   return s.split(/\s/g).map((word) => {
//     return word.split('').reverse().join('')
//   }).join(' ')
// }

export default function reverseWords (s) {
  return s.match(/[\w']+/g).map((word) => {
    return word.split('').reverse().join('')
  }).join(' ')
}
