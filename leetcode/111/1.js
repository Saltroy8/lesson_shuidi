const minDepth = (root) => {
    if (root == null) return 0;
    
    const left = minDepth(root.left);
    const right = minDepth(root.right);
  
    if (left > 0 && right > 0) {
      return 1 + Math.min(left, right);
    } else if (left > 0) {
      return 1 + left;
    } else if (right > 0) {
      return 1 + right;
    } else {
      return 1;
    }
  };
