// 假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
// 这里是建模的过程：
// 给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。
//
// 示例 1:
//
// 输入: flowerbed = [1,0,0,0,1], n = 1
// 输出: True
//
// 示例 2:
//
// 输入: flowerbed = [1,0,0,0,1], n = 2
// 输出: False
//
// 注意:
//
// 数组内已种好的花不会违反种植规则。
// 输入的数组长度范围为 [1, 20000]。
// n 是非负整数，且不会超过输入数组的大小。

// 场景1：[0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1] 4
// 场景2：[1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1] 3
// 场景3：[0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1] 3
// 如果左边缘是0，判断右侧是否为0，为0可以种植；如果是1，就继续判断；
// 如果右边缘是0，判断左侧是否为0，为0可以种植，否则继续判断；
// 判断每个元素的左侧和右侧，是否都为0，都为0才可以种植，并且直接就应该把元素替换成1，再继续判断；得到最大的种植数量
// 判断n 和 max

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// 数组的替换可以变成移位，因为确定+1之后，右侧的肯定就不需要判断了
// export default function canPlaceFlowers (flowerbed, n) {
//   let max = 0
//   if (flowerbed.length <= 1) {
//     max += flowerbed[0] === 1 ? 0 : 1
//     return n <= max
//   }
//   for (let i = 0; i < flowerbed.length; i++) {
//     if (i === 0) {
//       if (flowerbed[0] === 0 && flowerbed[1] === 0) {
//         max += 1
//         flowerbed.splice(i, 1, 1)
//         continue
//       }
//     }
//     if (i === flowerbed.length - 1) {
//       if (flowerbed[flowerbed.length - 1] === 0 && flowerbed[flowerbed.length - 2] === 0) {
//         max += 1
//         flowerbed.splice(i, 1, 1)
//         continue
//       }
//     }
//
//     if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
//       max += 1
//       flowerbed.splice(i, 1, 1)
//     }
//   }
//   return n <= max
// }
// push(0)也可以解决右边界问题
export default function canPlaceFlowers (flowerbed, n) {
  let max = 0
  if (flowerbed.length <= 1) {
    max += flowerbed[0] === 1 ? 0 : 1
    return n <= max
  }
  for (let i = 0, len = flowerbed.length - 1; i <= len; i++) {
    if (flowerbed[i] === 0) {
      if (i === 0 && flowerbed[1] === 0) {
        max += 1
        i += 1
      } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
        max += 1
        i += 1
      } else if (i === len && flowerbed[len - 1] === 0) { // 倒数第二项
        max += 1
      }
    }
  }
  return n <= max
}
