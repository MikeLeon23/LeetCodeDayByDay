/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //判断是不是一对
    //每次放进去之前，与数组中最后一个元素比较
    //是一对就把数组中最后一个pop，不是一对就把元素push进数组
    //所有都完成之后，检查数组中是否还有元素
    //如果是空数组，返回true，否则返回false
        var arr = s;
        var newArr = [];
        for(var i = 0; i < arr.length; i++){
            if(!areCouple(newArr[newArr.length-1], arr[i])){
                newArr.push(arr[i]);
            }else{
                newArr.pop();
            }
        }
        return !newArr.length;
    };
    
    function areCouple(x, y){
        var flag = 0;
        if(x == '(' && y == ')' 
        || x == '{' && y == '}' 
        || x == '[' && y == ']'){
            flag = 1;
        }
        return flag;
    }