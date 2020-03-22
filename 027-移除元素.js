/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

//方法一：找到相同元素删除掉
var removeElement = function(nums, val) {
    var i = 0;
    while(i < nums.length){
        if(nums[i] == val){
            nums.splice(i, 1);
        }else{
            i++;
        }
    }
    return nums.length;
};

//方法二：双指针
var removeElement = function(nums, val) {
    var i = 0;
    var j = 0;
    while(j < nums.length){
        if(nums[j] == val){
            j++;
        }else{
            nums[i] = nums[j];
            i++;
            j++;
        }
    }
    nums.length = i;
    return i;
};