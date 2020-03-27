/**
 * @param {number[]} nums
 * @return {number}
 */

// 方法一：暴力法
var maxSubArray = function (nums) {
    var maxSum = nums[0];
    for (var i = 0; i < nums.length; i++) {
        var temp = 0;
        for (var j = i; j < nums.length; j++) {
            temp = temp + nums[j];
            if (temp > maxSum) {
                maxSum = temp;
            }
        }
    }
    return maxSum;
};

// 方法二：贪心算法
var maxSubArray = function(nums){
    var ans = nums[0];
    var sum = 0;
    for(var i = 0; i < nums.length; i++){
        if(sum > 0){
            sum = sum + nums[i];
        }else{
            sum = nums[i];
        }
        ans = Math.max(ans, sum);
    }
    return ans;
}