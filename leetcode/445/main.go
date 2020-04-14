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
 var addTwoNumbers = function(l1, l2) {
    let link1 = reverse(l1);
    let link2 = reverse(l2);
    let p = link1;
    let q = link2;
    // 进一标志
    let mark = 0;
    let res = new ListNode();
    let cur = res;
    while (p || q || mark === 1) {
        let val = (p ? p.val : 0) + (q ? q.val : 0) + mark;
        mark = val / 10 | 0;
        cur.next = new ListNode(val % 10);
        cur = cur.next;
        if (p) p = p.next;
        if (q) q = q.next;
    }
    // 将结果再次翻转
    return reverse(res.next);

    // 翻转单链表
    function reverse(l) {
        // 迭代
        let cur = l;
        let pre = null;
        while (cur) {
            let temp = cur.next;
            cur.next = pre;
            pre = cur;
            cur = temp;
        }
        return pre;

        // // 递归
        // if (!l || !l.next) return l;
        // let p = reverse(l.next);
        // l.next.next = l;
        // l.next = null;
        // return p;
    }
};