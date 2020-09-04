const binaryTreePaths = (root) => {
    if (root == null) {
      return [];
    }
    const res = [];
    const buildPath = (root, pathStr) => {
      if (root.left == null && root.right == null) {
        pathStr += root.val; // 处理叶子节点，不加箭头
        res.push(pathStr);   // 捕获合格的path
        return;
      }
      pathStr += root.val + '->'; // 处理当前的非叶子节点
      if (root.left) {
        buildPath(root.left, pathStr); // 在dfs中构建str
      }
      if (root.right) {   // 左子树遍历完，遍历右子树
        buildPath(root.right, pathStr); // 注意这里传的是pathStr，是当前root下的str，暗含了回溯了
      }
    };
    buildPath(root, '');
    return res;
  };
