/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return null;
  }
  let res = [];
  let queue = [root];
  while (queue.length) {
    let nextStep = [];
    let tmpres = [];
    for (let i = 0; i < queue.length; i++) {
      tmpres.push(queue[i].val);
      if (queue[i].left) {
        nextStep.push(queue[i].left);
      }
      if (queue[i].right) {
        nextStep.push(queue[i].right);
      }
    }
    res.push(tmpres);
    queue = nextStep;
  }
  return res;
};

function makeBT(arr) {
  arr.unshift(0);
  const make = (idx) => {
    if (!arr[idx]) {
      return [];
    }
    return {
      val: arr[idx],
      left: make(idx * 2),
      right: make(idx * 2 + 1),
    };
  };
  return make(1);
}

console.log(levelOrder(makeBT([3, 9, 20, null, null, 15, 7])));
