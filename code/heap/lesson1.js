// 堆排序
class Heap {
  constructor (data) {
    this.data = data
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
}

export default Heap
