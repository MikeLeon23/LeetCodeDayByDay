/**
 * @param {number} x
 * @return {number}
 */

// 对于整数abcd
// 1. 先把整数取模10，得到最后一位d，并将整数除以10得到abc（结果取整）
// 2. 重复取模操作可以得到c
// 3. d*10+c得到dc
// 4. 重复以上步骤就可以得到dcba
var reverse = function(x){
    var count = 0;
    while(x != 0){      //整数只剩下个位数的时候，反转已经完成
        count = count*10+x%10;
        x = x/10;       //此时x/10会使x变为0，所以循环控制条件是x!=0
    }
    return count;
}
