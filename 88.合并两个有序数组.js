/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (47.09%)
 * Likes:    456
 * Dislikes: 0
 * Total Accepted:    127.9K
 * Total Submissions: 271.5K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 num1 成为一个有序数组。
 * 
 * 
 * 
 * 说明:
 * 
 * 
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 
 * 
 * 
 * 
 * 示例:
 * 
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * 输出: [1,2,2,3,5,6]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 方法一：从nums2里取出数字，在nums1中从后往前比较
var merge = function (nums1, m, nums2, n) {
    if(m == 0){
        for(var i = 0; i < n; i++){
            nums1.unshift(nums2[i]);
        }
    }
    var endOfNums1 = m-1;
    for (var i = 0; i < n; i++) {
        for (var j = endOfNums1; j >= -1; j--) {
            if (nums2[i] < nums1[j]) {
                nums1[j + 1] = nums1[j];
            } else {
                nums1[j + 1] = nums2[i];
                break;
            }
        }
        endOfNums1++;
    }
    nums1.length = m + n;
};

// 方法二：从nums2中取出元素，在nums1中从前往后比较
var merge = function (nums1, m, nums2, n) {
    var endOfNums1 = m-1;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < nums1.length; j++) { //这里从前往后遍历
            if (nums2[i] < nums1[j] || j > endOfNums1) {
                nums1.splice(j, 0, nums2[i])
                break;
            }
        }
        endOfNums1++;
    }
    nums1.length = m + n;
};
// @lc code=end

