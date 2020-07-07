const hasPathSum = (root, sum) => {
    if (root == null) return false
    if (root.left == null && root.right == null) {
      return sum - root.val == 0 
    }
    return hasPathSum(root.left, sum - root.val) ||
      hasPathSum(root.right, sum - root.val)
  }
  