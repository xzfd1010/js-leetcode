// 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
//
// 假设一个二叉搜索树具有如下特征：
//
//
// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。
//
//
// 示例 1:
//
// 输入:
//    2
//   / \
//  1   3
// 输出: true
//
//
// 示例 2:
//
// 输入:
//    5
//   / \
//  1   4
//     / \
//    3   6
// 输出: false
// 解释: 输入为: [5,1,4,null,null,3,6]。
//     根节点的值为 5 ，但是其右子节点值为 4 。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 给定数组，构建二叉搜索树；但本题还是给定一个普通的二叉树
// class Node {
//   constructor (val) {
//     this.val = val
//     this.left = this.right = null
//   }
// }
//
// class Tree {
//   constructor (data) {
//     let root = new Node(data.shift())
//     // 遍历所有数据，逐渐插入到当前这棵搜索树中去
//     data.forEach(item => {
//       this.insert(root, item)
//     })
//     return root
//   }
//
//   insert (node, data) {
//     if (data < node.val) {
//       if (node.left === null) {
//         node.left = new Node(data)
//       } else {
//         this.insert(node.left, data)
//       }
//     } else {
//       if (node.right === null) {
//         node.right = new Node(data)
//       } else {
//         this.insert(node.right, data)
//       }
//     }
//   }
// }
//
// export { Tree }

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
// export default function isValidBST (root) {
//   let walk = (root) => {
//     if (!root || (!root.left && !root.right)) {
//       return true
//     } else if ((root.left && root.left.val > root.val) || (root.right && root.right.val < root.val)) {
//       return false
//     } else {
//       return walk(root.left) && walk(root.right)
//     }
//   }
//   return walk(root)
// }

// [10, 5, 15, 1, 6, 7, 20]
//        10
//    5       15
//  1   6   12    20
// 0 2 4 8 11 14 16  21
export default function isValidBST (root) {
  let walk = (node, lower = -Infinity, upper = Infinity) => {
    if (!node) return true
    let val = node.val
    if (val <= lower || val >= upper) {
      return false
    }
    if (!walk(node.right, val, upper)) {
      return false
    }
    if (!walk(node.left, lower, val)) {
      return false
    }
    return true
  }
  return walk(root)
}
