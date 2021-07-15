/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
 var findMode = function(root) {
  let result = []
  let max = 0, n = 0, pre = undefined

  function helper(root) {
      // base case
      if (root === null) {
          return
      }

      helper(root.left)
      // 中序遍历处理
      if (root.val === pre) {
          n++
      } else {
          n = 1
      }
      if (n > max) {
          result = [root.val]
          max = n
      }
      if (n === max) {
          if (!result.includes(root.val)) {
              result.push(root.val)
          }
      }
      pre = root.val
      helper(root.right)
  }

  helper(root)

  return result
};
// @lc code=end

