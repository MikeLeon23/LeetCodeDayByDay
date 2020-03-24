/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

//暴力法：
var strStr = function(haystack, needle) {
    if(haystack == '' && needle == ''){
        return 0;
    }
    for(var i = 0; i < haystack.length; i++){
        for(var j = 0; j < needle.length; j++){
            if(haystack[i+j] != needle[j]){
                break;
            }
        }
        if(j == needle.length){
            return i;
        }
    }
    if(i == haystack.length){
        return -1;
    }
};


//直接调用库函数法
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};