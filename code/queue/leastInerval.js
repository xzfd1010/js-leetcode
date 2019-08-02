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
// export default function leastInterval (tasks, n) {
//   let q = ''
//   let Q = {}
//   // 遍历所有任务，分类
//   tasks.map(item => {
//     if (Q[item]) {
//       Q[item]++
//     } else {
//       Q[item] = 1
//     }
//   })
//
//   while (true) {
//     let keys = Object.keys(Q)
//     let temp = []
//     if (!keys[0]) {
//       break
//     }
//     for (let i = 0; i <= n; i++) {
//       // 寻找最大的项
//       let key
//       let pos
//       let max = 0
//       keys.map((item, index) => {
//         if (Q[item] > max) {
//           key = item
//           pos = index
//           max = Q[item]
//         }
//       })
//       // 推入任务队列，代表执行
//       if (key) {
//         temp.push(key)
//         keys.splice(pos, 1)
//         Q[key]--
//         if (Q[key] < 1) {
//           delete Q[key]
//         }
//       } else {
//         break
//       }
//     }
//     q += temp.join('').padEnd(n + 1, '-')
//   }
//   q = q.replace(/-+$/g, '')
//
//   return q.length
// }

export default function leastInterval (tasks, n) {
  let taskCounts = new Array(26)
  taskCounts.fill(0)
  for (let t = 0; t < tasks.length; t++) {
    taskCounts[tasks[t].charCodeAt(0) - 'A'.charCodeAt(0)]++
  }

  taskCounts.sort((a, b) => b - a)

  let maxVal = taskCounts[0] - 1
  let idleSlots = maxVal * n // 所有的空闲冷却时间，再加上maxVal就是理论上的最小时间

  for (let i = 1; i < taskCounts.length && taskCounts[i] > 0; i++) {
    idleSlots -= Math.min(maxVal, taskCounts[i]) // 对应的插入到空闲时间中
  }

  // idleSlots > 0 代表一顿插入后，还是没有弥补冷却时间，那就用tasks.length加上剩余的冷却时间；<=0，代表正好插入完毕
  return idleSlots > 0 ? idleSlots + tasks.length : tasks.length
};
