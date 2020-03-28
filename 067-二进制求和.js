/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// 不能使用二进制字符串转成十进制整数，求和之后再转换成二进制字符串的方法。
// 因为求和结果可能超过JavaScript数值的界限
var addBinary = function(a, b) {
    // 确保a的长度比b大，这样比较好处理
    if(a.length < b.length){
        return addBinary(b, a);
    }
    // b的长度比a短，前面补0直到长度相等
    while(a.length > b.length){
        b = '0'+b;
    }
    var i = a.length-1;
    var str = '';
    var flag = 0;   //是否需要进位的标志
    while(i != -1){
        if(a[i] == b[i]){
            str = flag + str;
            if(a[i] == '1'){
                flag = 1;
            }else{
                flag = 0;
            }
        }else{
            if(flag){
                str = '0' + str;
            }else{
                str = '1' + str;
            }
        }
        i--;
    }
    // 每一位都累加完，检查进位标志是否是1，如果是1，结果前面要再加一个1
    if(flag){
        str = '1' + str;
    }
    return str;
};