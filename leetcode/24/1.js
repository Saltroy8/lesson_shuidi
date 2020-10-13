const swapPairs = (head) => {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    while (head && head.next) {
      const next = head.next;
      head.next = next.next;
      next.next = head;
      prev.next = next;
  
      prev = head;
      head = head.next;
    }
    return dummy.next;
  };
