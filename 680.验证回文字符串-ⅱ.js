/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 *
 * https://leetcode-cn.com/problems/valid-palindrome-ii/description/
 *
 * algorithms
 * Easy (36.08%)
 * Likes:    139
 * Dislikes: 0
 * Total Accepted:    18.2K
 * Total Submissions: 49.9K
 * Testcase Example:  '"aba"'
 *
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * 
 * 示例 1:
 * 
 * 
 * 输入: "aba"
 * 输出: True
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: "abca"
 * 输出: True
 * 解释: 你可以删除c字符。
 * 
 * 
 * 注意:
 * 
 * 
 * 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

// 解法一：双指针法
// var validPalindrome = function (s) {
//     if (isReverseStr(s)) {
//         return true;
//     }

//     for(var i = 0, j = s.length-1; i < j; i++, j--){
//         if(s.charAt(i) != s.charAt(j)) {
//             break;
//         }
//     }

//     var arr = s.split('')
//     var arrCopy = s.split('');
//     arr.splice(i, 1);
//     if (isReverseStr(arr.join(''))) {
//         return true;
//     }
//     arrCopy.splice(j, 1);
//     if (isReverseStr(arrCopy.join(''))) {
//         return true;
//     }

//     return false;

// };

// // 判断是否是回文字符串的函数
// function isReverseStr(s) {
//     var i = 0;
//     var j = s.length - 1;
//     while (i < j) {
//         if (s.charAt(i) == s.charAt(j)) {
//             i++;
//             j--;
//         } else {
//             return false;
//         }
//     }
//     return true;
// }


// // 解法二：双指针法重写
// var validPalindrome = function (s) {
//     for(var i = 0, j = s.length-1; i < j; i++, j--){
//         if(s.charAt(i) != s.charAt(j)){
//             return isReverseStr(s, i+1, j) || isReverseStr(s, i, j-1)
//         }
//     }

//     return true;
// };

// // 判断回文字符串函数重写
// var isReverseStr = function(s, i, j) {
//     while(i < j){
//         if(s.charAt(i) != s.charAt(j)){
//             return false;
//         }else{
//             i++;
//             j--;
//         }
//     }
//     return true;
// }

// 解法三：双指针法加递归
var validPalindrome = function (s, flag = true) {   // flag用于控制递归深度，只需要递归一次
    var i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i] != s[j]) {
            // 如果存在两个指针位置的字母不相同，递归调用自己一次
            if (flag) {
                return validPalindrome(s.slice(i + 1, j + 1), false) ||
                    validPalindrome(s.slice(i, j), false);
            }
            return false;
        } else {
            i++;
            j--;
        }
    }
    return true;
};
// @lc code=end

