const removeDuplicateNodes = (head) => {
    if (head == null) return head;
    const map = {};
    map[head.val] = true;
    let node = head.next;
    let prev = head;
    while (node) {
      if (map[node.val]) {
        prev.next = node.next;
      } else {
        map[node.val] = true;
        prev = prev.next;
      }
      node = node.next;
    }
    return head;
  };
  