/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 *
 * https://leetcode-cn.com/problems/sum-of-square-numbers/description/
 *
 * algorithms
 * Easy (33.11%)
 * Likes:    108
 * Dislikes: 0
 * Total Accepted:    18.6K
 * Total Submissions: 56.2K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a^2 + b^2 = c。
 * 
 * 示例1:
 * 
 * 
 * 输入: 5
 * 输出: True
 * 解释: 1 * 1 + 2 * 2 = 5
 * 
 * 
 * 
 * 
 * 示例2:
 * 
 * 
 * 输入: 3
 * 输出: False
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
// 方法一：二分查找法
var judgeSquareSum = function(c) {
    // var a = 0;
    var b = Math.floor(Math.sqrt(c));
    for(var i = 0; i <= b; i++){
        var a = i;
        var left = i;
        var right = b;
        while(left <= right){
            var mid = Math.floor(left + (right-left)/2);
            // console.log(mid);
            if((a*a + mid*mid) == c) {
                return true;
            } else if((a*a + mid*mid) < c) {
                left = mid+1;
            } else {
                right = mid-1;
            }
        }
    }
    return false;
};

// 方法二：双指针法
var judgeSquareSum = function(c) {
    var a = 0;
    var b = Math.floor(Math.sqrt(c));
    while(a <= b){
        if((a*a + b*b) == c) {
            return true;
        } else if((a*a + b*b) > c) {
            b--;
        } else {
            a++;
        }
    }
    return false;
};
// @lc code=end

