const sumNumbers = (root) => {
    const helper = (root, cur) => {
      if (root == null) {
        return 0;
      }
      cur = 10 * cur + root.val;
      if (root.left == null && root.right == null) {
        return cur;
      }
      return helper(root.left, cur) + helper(root.right, cur);
    };
    return helper(root, 0);
  };
