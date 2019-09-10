/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
// [2, 7, 13, 19]
// [1,2,4,7,8,13,14,16,19,26,28,32] [4,2,1,0]
// 每一个新丑数，都可以表示为一个丑数乘以质因数数组中的元素得到
// 假设我们已经有了数组长度为m的元素从小到大排列的的丑数数组，那么下一个满足条件的丑数应该如何得到呢？其实无非就是利用上述规则：
// 将已经有的丑数数组中每一个元素乘以primes质因数数组，得到一堆新的丑数，从其中挑选出比现有的丑数数组大的最少的那一个元素，就是下一个满足条件的丑数
export const nthSuperUglyNumber = function (n, primes) {
  primes.sort((a, b) => {
    return a - b
  })
  let ugly = [] // 存储超级丑数的数组
  let ptr = new Array(primes.length).fill(0) // [0,...,0] 长度和primes相同
  ugly.push(1)
  // 外层循环查找第n个
  for (let i = 1; i < n; i++) {
    let mn = Math.pow(2, 32) - 1 // 2^32 - 1 设置一个极大值；mn代表当前的超级丑数
    for (let j = 0; j < primes.length; j++) {
      // primes[j]是质因子*ugly[ptr[j]] 必然得到一个超级丑数，mn代表这当中最小的那一个
      mn = Math.min(mn, primes[j] * ugly[ptr[j]])
    }
    ugly[i] = mn // ugly[1] = 2
    for (let j = 0; j < primes.length; j++) {
      // ptr[j] 初始是[0,0,0,0]，ptr中的值代表primes中对应的质因子，使用了几次；也可以看作是，当前因子对应的ugly的index
      if (mn % primes[j] === 0) {
        ptr[j]++
      }
    }
  }
  return ugly[n - 1]
}

nthSuperUglyNumber(12, [2, 7, 13, 19])
