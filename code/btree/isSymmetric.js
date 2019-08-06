// 给定一个二叉树，检查它是否是镜像对称的。
//
// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
//
//    1
//   / \
//  2   2
// / \ / \
// 3  4 4  3
//
//
// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
//
//    1
//   / \
//  2   2
//   \   \
//   3    3
//
//
// 说明:
//
// 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
//

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 构造二叉树：
class Node {
  constructor (val) {
    this.val = val
    this.left = this.right = null
  }
}

class Tree {
  constructor (data) {
    // 临时存储所有节点，方便寻找父子节点
    let nodeList = []

    // 顶节点
    let root
    // 遍历数组
    for (let i = 0, len = data.length; i < len; i++) {
      let node = new Node(data[i])
      nodeList.push(node)
      // 建立父子节点的关系
      if (i > 0) {
        // 当前节点在哪一行
        let row = Math.floor(Math.sqrt(i + 1))
        // 当前节点的起始索引
        let currentStart = Math.pow(2, row) - 1
        // 上一行的起始索引
        let prevStart = Math.pow(2, row - 1) - 1
        // 父节点在nodeList中的索引
        let parentIndex = prevStart + Math.floor((i - currentStart) / 2)
        // 父节点
        let parent = nodeList[parentIndex]
        // 这里的判空操作不够严谨，如果元素本身就是undefined，就判断不出来了，
        // 其实可以根据索引计算出来当前节点究竟是父节点的左节点还是右节点
        // 上面说的是错的，因为只要赋值了，node就是个对象，不会存在 undefined 的情况
        if (parent.left) {
          parent.right = node
        } else {
          parent.left = node
        }
        // let diff = i - (currentStart + (parentIndex - prevStart) * 2)
        // if (diff > 0) {
        //   parent.right = node
        // } else {
        //   parent.left = node
        // }
      }
    }
    root = nodeList.shift()
    nodeList.length = 0
    return root
  }
}

export { Tree }

/**
 * @param {Tree} root
 * @return {boolean}
 */
export default function isSymmetric (root) {
  if (!root) return true
  let walk = (left, right) => {
    if (!left && !right) {
      return true
    }
    if (!left || !right || left.val !== right.val) {
      return false
    }
    return walk(left.left, right.right) && walk(left.right, right.left)
  }
  return walk(root, root)
}
