/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function(root) {
  if (root === null) {
    return true
  }
  return compareTree(root.left, root.right)
};

const compareTree = function(tree1, tree2) {
  if (tree1 === null && tree2 === null) {
    return true
  } else if (tree1 !== null && tree2 !== null) {
    if (tree1.val !== tree2.val) {
      return false
    }
    return compareTree(tree1.left, tree2.right) && compareTree(tree1.right, tree2.left)
  }
  return false
}
// @lc code=end

