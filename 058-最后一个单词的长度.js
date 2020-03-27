/**
 * @param {string} s
 * @return {number}
 */

//最初版
var lengthOfLastWord = function (s) {
    if (s.length == 0) {
        return 0;
    }
    for (var i = s.length - 1; i >= 0; i--) {
        if (s[i] != ' ') {
            var b = i;
            break;
        }
    }
    if (b == undefined) {
        return 0;
    }
    for (var j = b; j >= 0; j--) {
        if (s[j] == ' ') {
            var a = j;
            break;
        }
    }
    if (a == undefined) {
        return b + 1;
    }
    return b - a;
};

// 改进版
var lengthOfLastWord = function (s) {
    var end = s.length-1;
    while(end >= 0 && s[end] == ' '){
        end--;
    }
    var start = end;
    while(start >= 0 && s[start] != ' '){
        start--;
    }
    return end-start;
}