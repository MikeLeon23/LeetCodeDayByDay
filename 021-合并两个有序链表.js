/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var l3 = new ListNode();
    var p1 = l1;
    var p2 = l2;
    var p3 = l3;
    while(p2 && p1){
        if(p1.val <= p2.val){
            p3.next = p1;
            p1 = p1.next;
        }else{
            p3.next = p2;
            p2 = p2.next;
        }
        p3 = p3.next;
    }
    if(p1){
        p3.next = p1;
    }
    if(p2){
        p3.next = p2;
    }
    return l3.next;
};