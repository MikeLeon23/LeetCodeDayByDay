/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n == 1){
        return '1';
    }
    var count = 1;
    var str = countAndSay(n-1);
    var ans = '';
    for(var i = 0; i < str.length; i++){
        if(str[i] == str[i+1]){
            count++;
        }else{
            ans = ans + count + str[i];
            count = 1;
        }
    }
    // return parseInt(ans);
    return ans;
};