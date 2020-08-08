const recoverTree = (root) => {
    let prevNode = new TreeNode(-Infinity);
    let firstError;
    let secondError;
    var inOrder = function (root) { // 中序遍历：left|root|right，root和prevNode就是两个指针
      if (root == null) return;
      inOrder(root.left);
      if (prevNode.val >= root.val && firstError == null) { // 当前是第一对错误
        firstError = prevNode;                              // 记录第一个错误点
      }
      if (prevNode.val >= root.val && firstError != null) { // 第一个错误点已确定
        secondError = root;                                 // 记录第二个错误点
      }
      prevNode = root;                                      // 更新 prevNode
      inOrder(root.right);
    };
    inOrder(root);
    const temp = firstError.val;
    firstError.val = secondError.val;
    secondError.val = temp; 
  };
