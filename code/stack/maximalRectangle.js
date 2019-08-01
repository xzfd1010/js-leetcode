// 给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
//
// 示例:
//
// 输入:
// [
//  ["1","0","1","0","0"],
//  ["1","0","1","1","1"],
//  ["1","1","1","1","1"],
//  ["1","0","0","1","0"]
// ]
// 输出: 6
//

/**
 * @param {character[][]} matrix
 * @return {number}
 */
export default function maximalRectangle (matrix) {
  if (!matrix.length) return 0
  let result = []
  let reg = /1+/g
  matrix = matrix.map(item => {
    let str = item.join('')
    let r = reg.exec(str)
    let rs = []
    while (r) {
      rs.push([r.index, r.index + r[0].length - 1])
      r = reg.exec(str)
    }
    return rs
  })
  if (matrix.length < 2) {
    matrix[0].map(posArr => {
      result.push(posArr[1] - posArr[0] + 1)
    })
  }

  let calc = (arr, n = 1) => {
    let top = arr.pop()
    let next = arr.pop()
    let tt
    let nn
    let start
    let end
    let width = 1
    let minWidth = 0
    let temp = []
    let max = result.length > 0 ? Math.max(...result) : 0
    n++

    for (let i = 0, lt = top.length; i < lt; i++) {
      tt = top[i]
      if (tt && tt[1] - tt[0] + 1 > max) {
        result.push(tt[1] - tt[0] + 1)
      }

      for (let j = 0, ln = next.length; j < ln; j++) {
        nn = next[j]
        if (nn && nn[1] - nn[0] + 1 > max) {
          result.push(nn[1] - nn[0] + 1)
        }
        width = Math.min(tt[1], nn[1]) - Math.max(tt[0], nn[0])
        if (width >= minWidth) {
          start = Math.max(tt[0], nn[0])
          end = Math.min(tt[1], nn[1])
          temp.push([start, end])
        }
      }
    }

    if (start === undefined || end === undefined) {
      if (n < 3) {
        return false
      } else {
        width = top[0][1] - top[0][0] + 1
        if (width > 1) {
          result.push(width * (n - 1))
        }
      }
    } else {
      if (arr.length > 0) {
        // 这里应该是有问题的
        let maxWidth = 0
        temp.map((posArr) => {
          if (posArr[1] - posArr[0] > maxWidth) {
            maxWidth = posArr[1] - posArr[0]
          }
        })
        result.push(n * (maxWidth + 1))
        arr.push(temp)
        calc(arr, n++)
      } else {
        // 到最后一行
        let maxWidth = 0
        temp.map((posArr) => {
          if (posArr[1] - posArr[0] > maxWidth) {
            maxWidth = posArr[1] - posArr[0]
          }
        })
        result.push(n * (maxWidth + 1))
      }
    }
  }
  while (matrix.length > 1) {
    calc([].concat(matrix))
    matrix.pop()
  }
  return result.length > 0 ? Math.max(...result) : 0
}

// var maximalRectangle = function(matrix) {
//   let row = matrix.length;
//   if( row === 0) return 0;
//   let col = matrix[0].length;
//   if( col === 0) return 0;
//
//   let scanner = new Scanner(col);
//   let res = 0;
//   matrix.forEach(curRow => {
//     scanner.scan(curRow);
//     scanner.arr.forEach(a => {
//       res = Math.max(res, a.getArea());
//     })
//   });
//
//   return res;
// };
//
// var Scanner = function(col) {
//   this.arr = Array.from({length: col}, () => {return new Unit(col)});
//   this.scan = function(curRow) {
//     let l = 0, r = col - 1;
//     for(let i = 0 ; i < col; i++) {
//       switch(curRow[i]){
//         case '1':
//           this.arr[i].moveDown(l);
//           break;
//         case '0':
//           this.arr[i].reset();
//           l = i + 1;
//           break;
//       }
//     }
//     for(let i = col - 1 ; i >= 0; i--) {
//       switch(curRow[i]){
//         case '1':
//           this.arr[i].updateRight(r);
//           break;
//         case '0':
//           r = i - 1;
//           break;
//       }
//     }
//
//   }
// }
//
// var Unit = function (col) {
//   this.height = 0;
//   this.left = 0;
//   this.right = col - 1;
//   this.moveDown = function(l) {
//     this.height++;
//     this.left = Math.max(this.left, l);
//   }
//   this.updateRight = function(r) {
//     this.right = Math.min(this.right, r);
//   }
//   this.reset = function() {
//     this.height = 0;
//     this.left = 0;
//     this.right = col;
//   }
//   this.getArea = function() {
//     return this.height * (this.right - this.left + 1);
//   }
// }
