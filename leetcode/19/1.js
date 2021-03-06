/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast = head, stack = head;
    while(--n){
        fast = fast.next;
    }
    if(!fast.next) return head.next;
    fast = fast.next;
    while(fast && fast.next){
        fast = fast.next;
        stack = stack.next;
    }
    stack.next = stack.next.next;
    return head;
};

