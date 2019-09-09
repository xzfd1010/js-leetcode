// 给定一个字符串，请将字符串里的字符按照出现的频率降序排列。
//
// 示例 1:
// 输入:
// "tree"
//
// 输出:
// "eert"
//
// 解释:
// 'e'出现两次，'r'和't'都只出现一次。
// 因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。
//
// 示例 2:
//
// 输入:
// "cccaaa"
//
// 输出:
// "cccaaa"
//
// 解释:
// 'c'和'a'都出现三次。此外，"aaaccc"也是有效的答案。
// 注意"cacaca"是不正确的，因为相同的字母必须放在一起。
//
// 示例 3:
// 输入:
// "Aabb"
//
// 输出:
// "bbAa"
//
// 解释:
// 此外，"bbaA"也是一个有效的答案，但"Aabb"是不正确的。
// 注意'A'和'a'被认为是两种不同的字符。
//
// Related Topics 堆 哈希表

// 堆排序的时间复杂度和空间复杂度最低
// 堆排序
class Heap {
  constructor (str) {
    let map = new Map()
    str.split('').map(item => {
      if (map.has(item)) {
        map.set(item, map.get(item) + 1)
      } else {
        map.set(item, 1)
      }
    })
    this.map = map
    this.data = Array.from(map.values())
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
    // 交换顶点和最后一个元素的顺序，并继续构建最大堆
    for (let j = 0; j < length; j++) {
      Heap.swap(iArr, 0, length - 1 - j)
      Heap.maxHeapify(iArr, 0, length - 1 - j - 1)
    }
    return iArr
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

  toString () {
    let arr = this.sort()
    let str = []
    while (arr.length) {
      let top = arr.pop()
      for (let [k, v] of this.map) {
        if (v === top) {
          str.push(k.repeat(top))
          this.map.delete(k)
          break
        }
      }
    }
    return str.join('')
  }
}

export default Heap

/**
 * @param {string} s
 * @return {string}
 */
export function frequencySort (s) {
  let heap = new Heap(s)
  return heap.toString()
}
