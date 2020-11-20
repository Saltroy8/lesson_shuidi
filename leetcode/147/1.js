function insertionSortList(head) {
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let cur = head;
    let prev = null;
    let temp = null;

    while (cur && cur.next) {
        if (cur.val <= cur.next.val) {
            cur = cur.next;
        } else {
            temp = cur.next;
            cur.next = cur.next.next;

            prev = dummyHead;
            while (prev.next.val <= temp.val) {
                prev = prev.next;
            }
            temp.next = prev.next;
            prev.next = temp;
        }
    }

    return dummyHead.next;
}
