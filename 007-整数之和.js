/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x < 0){
        var str = -x + "";
        var a = str.split("");
        var b = a.reverse();
        var c = b.join("");
        if(-c < -(2**31)){
            return 0;
        }else{
            return -c;
        }
    }else{
        var str = x + "";
        var a = str.split("");
        var b = a.reverse();
        var c = b.join("");
        if(c > 2**31-1){
            return 0;
        }else{
            return c;
        }
    }
};