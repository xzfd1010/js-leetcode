export default function selectionSort (arr) {
  let len = arr.length
  let min // 最小值索引
  for (let i = 0; i < len; i++) {
    // 将当前位置设为最小值
    min = i
    // 检查数组其余部分是否更小
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    // 如果当前位置不是最小值，将其换为最小值
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]]
    }
  }
  return arr
}
