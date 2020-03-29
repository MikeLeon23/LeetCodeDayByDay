/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// 就是先假定第一个数是numbers[i]
// 然后用二分法在数组的剩余部分中寻找另一个数字
var twoSum = function(numbers, target) {
    for(var i = 0; i < numbers.length-1; i++){
        var n = numbers[i];
        var left = i+1;
        var right = numbers.length-1;
        while(left <= right){
            var mid = Math.floor(left + (right - left)/2);
            if(n + numbers[mid] == target){
                return [i+1, mid+1];
            }else if(n + numbers[mid] < target){
                left = mid+1;
            }else{
                right = mid-1;
            }
        }
        // if(n + numbers[left] == target){  这步多余
        //     return [i+1, left+1];
        // }
    }
};