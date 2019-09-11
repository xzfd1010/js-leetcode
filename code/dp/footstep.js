// 台阶问题

function footstep (n) {
  if (n === 1) return 1
  if (n === 2) return 2
  else return footstep(n - 1) + footstep(n - 2)
}

console.log(footstep(10))
