/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    p = head;
    if (p == null) {
        return 0;
    }
    while (p.next) {
        if (p.val == p.next.val) {
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    }
    return head;
};
// @lc code=end

