/* 
冒泡排序的思路
1. 从前向后比较相邻的两个元素，如果前一个比后一个大，则交换位置。
2. 经过第一轮排序，最后一个元素应该是最大的一个。
3. 按照步骤一的方法进行相邻两个元素的比较，这个时候由于最后一个元素已经是最大的了，所以最后一个元素不用比较。
4. 如果有n个元素，那么经过n-1轮排序就可以得到结果。
 */

function bubbleSort(arr){
    var sort = arr;
    //如果有i个元素，则需要进行i-1轮比较
    for(var i = 1; i < arr.length; i++){    //i初始值为1，是为了内循环写j<arr.length-i

        //从第一个数开始，每次比较相邻两个元素的大小，如果左边的数比较大，则交换这两个元素的值
        //注意，这里是j<arr.length-i，如果写j<arr.length-1，就多做了无用比较，虽然也不影响结果
        for(var j = 0; j < arr.length-i; j++){  
            if(sort[j] > sort[j+1]){
                //交换两个元素的值
                var temp = sort[j];
                sort[j] = sort[j+1];
                sort[j+1] = temp;
                //ES6中交换两个元素的值的方法：[a, b] = [b, a];
                //这道题中写成：[sort[j], sort[j+1]] = [sort[j+1], sort[j]];
            }
        }
    }
    return sort;
}

