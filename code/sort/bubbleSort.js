export default function bubbleSort (arr) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0, stop = len - 1 - i; j < stop; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

// function swap (arr, p1, p2) {
//   let temp = arr[p1]
//   arr[p1] = arr[p2]
//   arr[p2] = temp
// }
