/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if(strs.length == 0){
        return '';
    }
    var s = '';
    for(var i = 0; i < strs[0].split('').length; i++) {
        s = strs[0].substring(0, i + 1);
        for (var j = 1; j < strs.length; j++) {
            if(s != strs[j].substr(0, i + 1)) {
                s = s.substr(0, i);
                return s;
            }
        }
    }
    return s;
};