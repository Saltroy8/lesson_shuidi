const getMinimumDifference = (root) => {
    let diff = Number.MAX_SAFE_INTEGER;
    let preVal;
  
    const inOrder = (root) => {
      if (root == null) {
        return;
      }
      inOrder(root.left);
      if (preVal !== undefined && root.val - preVal < diff) {
        diff = root.val - preVal;
      }
      preVal = root.val;
      inOrder(root.right);
    };
  
    inOrder(root);
    return diff;
  };
