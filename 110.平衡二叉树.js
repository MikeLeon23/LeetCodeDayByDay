/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (root === null) {
    return true
  }
  if (Math.abs(getDepth(root.left) - getDepth(root.right)) > 1) {
    return false
  }
  return isBalanced(root.left) && isBalanced(root.right)
};

function getDepth(root) {
  if (root === null) {
    return 0
  }
  const leftDept = getDepth(root.left)
  const rightDept = getDepth(root.right)
  return Math.max(leftDept, rightDept) + 1
}

// @lc code=end

