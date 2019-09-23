// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
//
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
//
// 示例:
//
// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
//
//
// 说明:
// 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
//

/**
 * @param {string} digits
 * @return {string[]}
 */
export default function letterCombinations (digits) {
  if (!digits) return []
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let code = [] // 保存数字对应的字母
  let num = digits.split('')
  // 23 => ['abc', 'def']
  num.map(item => {
    if (map[item]) {
      code.push(map[item])
    }
  })
  if (code.length <= 1) {
    return code[0].split('')
  }
  // 组合函数
  let comb = (arr) => {
    // 临时变量用来保存前两个组合的结果
    let tmp = []
    // 最外层的循环是遍历第一个元素，里层的循环是遍历第二个元素
    for (let i = 0, il = arr[0].length; i < il; i++) {
      for (let j = 0, jl = arr[1].length; j < jl; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0, 2, tmp)
    if (arr.length > 1) {
      comb(arr)
    } else {
      return tmp // 遍历到最后，返回的就是数字的第一项，也就是tmp
    }
    return arr[0] // arr[0]就是tmp
  }
  return comb(code)
}
