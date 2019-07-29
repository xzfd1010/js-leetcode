// export default function quickSort (arr) {
//   let len = arr.length
//   if (len < 2) {
//     return arr
//   } else {
//     let flag = arr[0]
//     let left = []
//     let right = []
//     for (let i = 1, tmp; i < len; i++) {
//       tmp = arr[i]
//       if (tmp < flag) {
//         left.push(tmp)
//       } else {
//         right.push(tmp)
//       }
//     }
//     return quickSort(left).concat(flag, quickSort(right))
//   }
// }

export default (arr) => {
  // 交换数组的两项
  let swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  // 寻找 标尺 对应的index
  let findCenter = (arr, left, right) => {
    let flag = arr[left]
    let idx = left + 1
    for (let i = left + 1; i <= right; i++) {
      if (arr[i] < flag) {
        swap(arr, idx, i)
        idx++
      }
    }
    swap(arr, left, idx - 1)
    return idx - 1 // 可以减1，可以不减1
  }

  let sort = (arr, left, right) => {
    if (left < right) {
      let center = findCenter(arr, left, right)
      // 这里center - 1是因为 可以不再比较标尺了
      sort(arr, left, center - 1)
      sort(arr, center + 1, right)
    }
  }

  sort(arr, 0, arr.length - 1)
  return arr
}
