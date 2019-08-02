// 给定一个用字符数组表示的 CPU 需要执行的任务列表。其中包含使用大写的 A - Z 字母表示的26 种不同种类的任务。任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。CPU 在任何一个单位时间内都可以执行一个任务，或者在待命状态。
//
// 然而，两个相同种类的任务之间必须有长度为 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。
//
// 你需要计算完成所有任务所需要的最短时间。
//
// 示例 1：
//
// 输入: tasks = ["A","A","A","B","B","B"], n = 2
// 输出: 8
// 执行顺序: A -> B -> (待命) -> A -> B -> (待命) -> A -> B.
//
// 注：
//
// 任务的总个数为 [1, 10000]。
// n 的取值范围为 [0, 100]。

/**
 * @param {string[]} tasks
 * @param {number} n
 * @return {number}
 */
export default function leastInterval (tasks, n) {
  let q = ''
  let Q = {}
  // 遍历所有任务，分类
  tasks.map(item => {
    if (Q[item]) {
      Q[item]++
    } else {
      Q[item] = 1
    }
  })

  while (true) {
    let keys = Object.keys(Q)
    let temp = []
    if (!keys[0]) {
      break
    }
    for (let i = 0; i <= n; i++) {
      // 寻找最大的项
      let key
      let pos
      let max = 0
      keys.map((item, index) => {
        if (Q[item] > max) {
          key = item
          pos = index
          max = Q[item]
        }
      })
      // 推入任务队列，代表执行
      if (key) {
        temp.push(key)
        keys.splice(pos, 1)
        Q[key]--
        if (Q[key] < 1) {
          delete Q[key]
        }
      } else {
        break
      }
    }
    q += temp.join('').padEnd(n + 1, '-')
  }
  q = q.replace(/-+$/g, '')

  return q.length
}
