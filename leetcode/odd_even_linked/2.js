function ListNode(val) {
    this.val = val;
    this.next = null;
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);


n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

var oddEvenList = function(head) {
    if(!head || !head.next) return head;
    const dummyHead1 = {
        next: head
    }
    const dummyHead2 = {
        next: head.next
    }
    let odd = dummyHead1.next;
    let even = dummyHead2.next;
    while(odd && odd.next && even && even.next){
        const oddNext = odd.next.next;
        const evenNext = even.next.next;
        odd.next = oddNext;
        even.next = evenNext;

        odd = oddNext;
        even = evenNext;
    }
    odd.next = dummyHead2.next;
    return dummyHead1.next;
}

console.log(oddEvenList(n1));
