/**
 * @param {number[]} digits
 * @return {number[]}
 */

// 方法一：(错误)
// 转换成整数，加一，再转换回数组
// 但Number基本类型的存储范围在-(2^53-1)到(2^53-1)之间。
// leetcode的测试用例[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]超出了这个范围。
// 而在ES10中，规范新引入了一种基本数据类型BigInt。它可以完美地兼容大数。
var plusOne = function (digits) {
    var str = digits.join('');
    var num = parseFloat(str);
    num = num + 1;
    var newDigits = [];
    while (num) {
        var a = num % 10;
        newDigits.unshift(a);
        num = Math.floor(num / 10);
    }
    return newDigits;
};

// 方法二：
// 从后往前检查，如果最后一个数小于9就直接加一
// 如果最后一个数是9，就置为0，再检查前面的一个数，如果还是9，也置为0，以此类推
// 如果第一个数也被置为0，就在数组开始位置添加一个1
var plusOne = function (digits) {
    var i = digits.length - 1;
    while (i >= 0) {
        if (digits[i] == 9) {
            digits[i] = 0;
            i--;
        } else {
            digits[i] += 1;
            break;
        }
    }
    if (i == -1) {
        digits.unshift(1);
    }
    return digits;
}