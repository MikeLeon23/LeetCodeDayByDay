/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @description 方法1：在头部加一个虚拟节点
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// var removeElements = function(head, val) {
//   if (head === null) {
//     return head
//   }
//   const tempNode = new ListNode(-1, head)
//   let p = tempNode
//   while (p !== null) {
//     if (p.next && p.next.val === val) {
//       p.next = p.next.next
//     } else {
//       p = p.next
//     }
//   }
//   return tempNode.next
// };

/**
 * @description 方法2：不设虚拟节点
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// var removeElements = function(head, val) {
//   while (head !== null && head.val === val) {
//     head = head.next
//   }
//   let p = head
//   while (p !== null) {
//     if (p.next && p.next.val === val) {
//       p.next = p.next.next
//     } else {
//       p = p.next
//     }
//   }
//   return head
// };

/**
 * @description 方法3：递归
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (head === null) {
    return head
  }
  head.next = removeElements(head.next, val)
  return head.val === val ? head.next : head
};
// @lc code=end

