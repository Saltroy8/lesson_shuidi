var postorderTraversal = function(root) {
    var r = [], dfs = node => r.unshift(node.val) && node.right && dfs(node.right) || node.left && dfs(node.left)
    return root ? dfs(root) || r : []
};
