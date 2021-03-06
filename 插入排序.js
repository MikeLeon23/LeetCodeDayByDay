/* 
插入排序思路：有点像扑克牌右手抓牌插到左手牌堆中
1. 从第2个数开始，取得数组的第2个数num，向前依次比较
2. 如果前面的一个数x > num，那么将x向后移动一位
3. 如果前面的一个数x <= num，那么将num的值赋给当前位置的元素
4. 取得数组的第3个数，重复上面步骤，直到操作完数组最后一个数，就可以得到一个从小到大排列的有序数组
*/

function insertSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var j = i;
        var num = arr[j];
        while (j > 0 && arr[j - 1] > num) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = num;
    }
}