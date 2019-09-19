// Given an input string, reverse the string word by word. A word is defined as a sequence of non-space characters.

// The input string does not contain leading or trailing spaces and the words are always separated by a single space.

// For example,
// Given s = "the sky is blue",
// return "blue is sky the".
// in-place算法，不能够新开辟空间，所以只能使用内部空间
// 思路：先将字符串整个翻转第一次，以空格分割，翻转每个单词
export function reverseWordsInPlace (s) {
  reverse(s, 0, s.length - 1)
  let begin = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ' || i === s.length) {
      reverse(s, begin, i - 1)
      begin = i + 1
    }
  }
}

function reverse (arr, begin, end) {
  while (begin < end) {
    [arr[begin], arr[end]] = [arr[end], arr[begin]]
    begin++
    end--
  }
}
