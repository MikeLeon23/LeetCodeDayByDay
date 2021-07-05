/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
// [-10,-3,0,5,9]
var sortedArrayToBST = function(nums) {
  return build(nums, 0, nums.length - 1)
};

const build = function(nums, lo, hi) {
  if (lo > hi) {
    return null
  }
  // lo + (hi - lo)/2, 而不是(lo + hi)/2, 防止溢出风险
  const mid = Math.floor(lo + (hi - lo)/2)
  const root = new TreeNode(nums[mid])
  root.left = build(nums, lo, mid - 1)
  root.right = build(nums, mid + 1, hi)
  return root
}

// 直接在函数中定义工具函数，测试性能差别。
// 事实证明，没有什么差别=_=
// var sortedArrayToBST = function(nums) {
//   function build(nums, lo, hi) {
//     if (lo > hi) {
//       return null
//     }
//     const mid = Math.floor(lo + (hi - lo)/2)
//     const root = new TreeNode(nums[mid])
//     root.left = build(nums, lo, mid - 1)
//     root.right = build(nums, mid + 1, hi)
//     return root
//   }
//   return build(nums, 0, nums.length - 1)
// };
// @lc code=end

