/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 *
 * https://leetcode-cn.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (49.51%)
 * Likes:    84
 * Dislikes: 0
 * Total Accepted:    31.5K
 * Total Submissions: 63.5K
 * Testcase Example:  '"hello"'
 *
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 * 
 * 示例 1:
 * 
 * 输入: "hello"
 * 输出: "holle"
 * 
 * 
 * 示例 2:
 * 
 * 输入: "leetcode"
 * 输出: "leotcede"
 * 
 * 说明:
 * 元音字母不包含字母"y"。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

// 方法一：把元音字符放进一个数组，反转后再按顺序放回字符串中
var reverseVowels = function (s) {
    var arr = s.split('');
    var indexArr = [];
    var vowelArr = [];
    for (var i = 0; i < s.length; i++) {
        if (isVowel(arr[i])) {
            indexArr.push(i);
            vowelArr.push(arr[i]);
        }
    }
    vowelArr.reverse();
    for (var i = 0; i < indexArr.length; i++) {
        arr[indexArr[i]] = vowelArr[i];
    }

    return arr.join('');
};

// 方法二：双指针法
var reverseVowels = function(s) {
    var arr = s.split('');
    var i = 0;
    var j = arr.length-1;
    while(i < j) {
        if(!isVowel(arr[i])){
            i++;
        } else if(!isVowel(arr[j])) {
            j--;
        } else {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }

    return arr.join('');
};

// 判断是否是元音字符的函数
function isVowel(str) {
    switch (str) {
        case 'a':
            return true;
            break;
        case 'e':
            return true;
            break;
        case 'i':
            return true;
            break;
        case 'o':
            return true;
            break;
        case 'u':
            return true;
            break;
        case 'A':
            return true;
            break;
        case 'E':
            return true;
            break;
        case 'I':
            return true;
            break;
        case 'O':
            return true;
            break;
        case 'U':
            return true;
            break;
        return false;
    }
}
// @lc code=end

