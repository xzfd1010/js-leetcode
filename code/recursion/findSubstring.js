// 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
//
// 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。
//
// 示例 1：
//
// 输入：
//  s = "barfoothefoobarman",
//  words = ["foo","bar"]
// 输出：[0,9]
// 解释：
// 从索引 0 和 9 开始的子串分别是 "barfoor" 和 "foobar" 。
// 输出的顺序不重要, [9,0] 也是有效答案。
//
//
// 示例 2：
//
// 输入：
//  s = "wordgoodgoodgoodbestword",
//  words = ["word","good","best","word"]
// 输出：[]
//
//

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// export default function findSubstring (s, words) {
//   if (s.length === 0 || words.length === 0) return []
//   if (s.length < words[0].length) return []
//   let combineResult = []
//   let indices = []
//   // 实现排列组合
//   let combine = (cur, words) => {
//     if (words.length <= 1) {
//       let temp = cur.concat(words).join('')
//       if (!combineResult.includes(temp)) {
//         combineResult.push(temp)
//       }
//     } else {
//       for (let i = 0, len = words.length; i < len; i++) {
//         let copy = words.slice()
//         let temp = copy.splice(i, 1)
//         combine(cur.concat(temp), copy)
//       }
//     }
//   }
//   combine([], words)
//   combineResult.map(item => {
//     let start = -1
//     while (s.indexOf(item, start + 1) > -1) {
//       start = s.indexOf(item, start + 1)
//       indices.push(start)
//     }
//   })
//   return indices.sort((a, b) => a - b)
// }

function findSubstring (s, words) {
  if (s.length === 0 || words.length === 0) return []
  if (s.length < words[0].length) return []

  const wordMap = createWordMap(words)
  let wordSize = words[0].length
  let windowSize = words.length * wordSize
  let copiedWordMap, numOfWords
  let answer = []
  let lastWord, firstWord

  for (let i = 0; i < wordSize; i++) {
    let start = i
    let end = i

    copiedWordMap = Object.assign({}, wordMap)
    numOfWords = Object.keys(copiedWordMap).length

    while (end - wordSize - 1 < s.length) {
      lastWord = s.substr(end, wordSize)

      if (copiedWordMap.hasOwnProperty(lastWord)) {
        copiedWordMap[lastWord]--
        if (copiedWordMap[lastWord] === 0) {
          numOfWords--
        }
      }

      end += wordSize

      while (numOfWords === 0) {
        if (end - start === windowSize) {
          answer.push(start)
        }

        firstWord = s.substr(start, wordSize)
        if (copiedWordMap.hasOwnProperty(firstWord)) {
          copiedWordMap[firstWord]++
          if (copiedWordMap[firstWord] > 0) {
            numOfWords++
          }
        }

        start += wordSize
      }
    }
  }
  return answer

  function createWordMap (words) {
    const map = {}

    for (let word of words) {
      if (map.hasOwnProperty(word)) map[word]++
      else map[word] = 1
    }
    return map
  }
};
findSubstring('barfoothefoobarman', ['foo', 'bar'])
