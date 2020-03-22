/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if(s.length==1){
        return getValue(s);
    }else{
        var a = 0;
        var arr = s.split("");
        for(var i = 0; i < arr.length; i++){
            var num = getValue(arr[i]);
            var afNum = getValue(arr[i+1]);
            if(num < afNum){
                a -= num;
            }else{
                a += num;
            }
        }
        return a;
    }
};

function getValue(a){
    switch(a){
        case 'I':
            return 1;
            break;
        case 'V':
            return 5;
            break;
        case 'X':
            return 10;
            break;
        case 'L':
            return 50;
            break;
        case 'C':
            return 100;
            break;
        case 'D':
            return 500;
            break;
        case 'M':
            return 1000;
            break;
        default:
            return 0;
    }
}