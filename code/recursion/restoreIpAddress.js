// 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
//
// 示例:
//
// 输入: "25525511135"
// 输出: ["255.255.11.135", "255.255.111.35"]
//

/**
 * @param {string} s
 * @return {string[]}
 */
export default function restoreIpAddresses (s) {
  let result = []
  let search = (cur, sub) => {
    if (cur.length === 4 && cur.join('') !== s) return
    if (cur.length === 4 && cur.join('') === s) {
      result.push(cur.join('.'))
    } else {
      for (let i = 0, len = Math.min(3, sub.length), temp; i < len; i++) {
        temp = sub.substr(0, i + 1) // 截取第1-3个字符
        if (temp < 256 && (!temp.startsWith('0') || (temp.startsWith('0') && temp.length === 1))) {
          search(cur.concat([temp]), sub.substr(i + 1))
        }
      }
    }
  }
  search([], s)
  return result
}
