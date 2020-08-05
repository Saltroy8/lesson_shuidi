const rob = (root) => {     // 打劫以root为根节点的子树的最大收益
    if (root == null) return 0;
    let robIncludeRoot = root.val; 
    if (root.left) {
      robIncludeRoot += rob(root.left.left) + rob(root.left.right);
    }
    if (root.right) {
      robIncludeRoot += rob(root.right.left) + rob(root.right.right);
    }
    const robExcludeRoot = rob(root.left) + rob(root.right); 
    return Math.max(robIncludeRoot, robExcludeRoot); // 二者取其大
  };
  
