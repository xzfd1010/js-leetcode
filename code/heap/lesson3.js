// 编写一段程序来查找第 n 个超级丑数。
//
// 超级丑数是指其所有质因数都是长度为 k 的质数列表 primes 中的正整数。
//
// 示例:
//
// 输入: n = 12, primes = [2,7,13,19]
// 输出: 32
// 解释: 给定长度为 4 的质数列表 primes = [2,7,13,19]，前 12 个超级丑数序列为：[1,2,4,7,8,13,14,16,19,26,28,32] 。
//
// 说明:
//
//
// 1 是任何给定 primes 的超级丑数。
// 给定 primes 中的数字以升序排列。
// 0 < k ≤ 100, 0 < n ≤ 106, 0 < primes[i] < 1000 。
// 第 n 个超级丑数确保在 32 位有符整数范围内。
//
// Related Topics 堆 数学
// leetcode 未通过
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
export function nthSuperUglyNumber (n, primes) {
  let ugly = new Ugly(n, primes)
  return ugly.getAll()
}

class Heap {
  constructor (data) {
    this.data = data
    this.length = data.length
    this.sort()
  }

  sort () {
    let iArr = this.data
    let length = iArr.length
    if (length <= 1) {
      return iArr
    }
    // 从最后一个父节点开始构建最大堆，完成第一次构建
    for (let i = Math.floor(length / 2); i >= 0; i--) {
      Heap.maxHeapify(iArr, i, length)
    }
    return iArr
  }

  find (val, i = 0) {
    let arr = this.data
    if (val > arr[i] || i > this.length) {
      return false
    } else if (val === arr[i]) {
      return val
    } else {
      return this.find(val, i * 2 + 1) || this.find(val, i * 2 + 2)
    }
  }

  // 不断构建最大堆的方法，将索引为i的父节点和两个子节点的比较，并保证子节点依旧符合最大堆的规则
  static maxHeapify (arr, i, size) {
    let left = i * 2 + 1
    let right = i * 2 + 2
    let max = i
    if (left <= size && arr[max] < arr[left]) {
      max = left
    }
    if (right <= size && arr[max] < arr[right]) {
      max = right
    }
    // 找到了父节点和两个子节点的最大索引，需要交换子节点和父节点的顺序，并保持子节点的顺序
    if (max !== i) {
      Heap.swap(arr, max, i)
      Heap.maxHeapify(arr, max, size)
    }
  }

  static swap (arr, a, b) {
    if (a === b) return
    [arr[a], arr[b]] = [arr[b], arr[a]]
  }
}

class Ugly {
  constructor (n, primes) {
    this.n = n
    this.primes = new Heap(primes)
  }

  static getPrimes (n) {
    // 用来查找某个数的质因数列表
    let primes = (n) => {
      let arr = []
      // 从2开始判断
      for (let i = 2; i < n / 2 + 1; i++) {
        // 整除，且因数为质数
        if (n % i === 0 && primes(i).length === 0) {
          arr.push(i)
        }
      }
      return arr
    }
    return primes(n)
  }

  getAll () {
    let res = [1]
    let i = 2
    while (res.length < this.n) {
      let arr = Ugly.getPrimes(i) // 质因数列表
      let len = arr.length
      let k = 0
      // 判断质因数列表是否全部在primes中
      for (; k < len; k++) {
        if (!this.primes.find(arr[k])) {
          break
        }
      }
      if (k === len) {
        if (len === 0) {
          if (this.primes.find(i)) {
            res.push(i)
          }
        } else {
          res.push(i)
        }
      }
      i++
    }
    return res[this.n - 1]
  }
}

export default Ugly
