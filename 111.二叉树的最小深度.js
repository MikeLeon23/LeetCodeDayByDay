/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
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
 * @return {number}
 */
var minDepth = function(root) {
  if (root === null) {
    return 0
  }
  const leftDept = minDepth(root.left)
  const rightDept = minDepth(root.right)
  // if (!leftDept && !rightDept) {
  //   return 1
  // } else if (!leftDept && rightDept) {
  //   return rightDept + 1
  // } else if (leftDept && !rightDept) {
  //   return leftDept + 1
  // } else {
  //   return Math.min(leftDept, rightDept) + 1
  // }

  // 比上面注释更好的写法
  return (leftDept && rightDept)
          ? 1 + min(leftDept, rightDept)
          : 1 + leftDept + rightDept
};
// @lc code=end

