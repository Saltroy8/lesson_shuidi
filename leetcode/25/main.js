function ListNode(val) {
    this.val = val;
    this.next = null
}

var n1 = new ListNode(1);
var n2 = new ListNode(2);
var n3 = new ListNode(3);
var n4 = new ListNode(4);
var n5 = new ListNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
// console.log(n1);
var reverseKGroup = function(head,k){
  if(!head || k == 1) {
      return head;
  }
  var dummy = {
      next: head
  }

  var start = dummy;
  var end = head;
  var count = 0;
  while(end != null){
      count++;
      
      if(count % k == 0){
        // if(count < 3 ){
        //     console.log(start, '----------');
        // }
          start = reverse(start,end.next)
          end = start.next
      } else {
        end = end.next
      }

  }

  return dummy.next;
}

var reverse = function(start, end) {
    var cur = start.next;
    var pre = start;
    var first = cur;
    while(cur != end){
        var temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    start.next = pre;
    first.next = cur;
    return first;
}