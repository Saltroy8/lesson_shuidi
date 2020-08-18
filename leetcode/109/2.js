const sortedListToBST = (head) => {
    if (head == null) return null;
    let slow = head;
    let fast = head;
    let preSlow; // 保存slow的前一个节点
  
    while (fast && fast.next) {
      preSlow = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    const root = new TreeNode(slow.val);
  
    if (preSlow != null) { // 中点slow不是head，需要构建左子树
      preSlow.next = null; // 切断preSlow和中点slow
      root.left = sortedListToBST(head); 
    }
  
    root.right = sortedListToBST(slow.next);
    return root;
  };
