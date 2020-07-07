class Solution:
    def hasPathSum(self, root: TreeNode, sum: int) -> bool:
        if not root:
            return False

        if not (root.left or root.right):
            return root.val == sum

        if root.left:
            root.left.val = root.val + root.left.val

        if root.right:
            root.right.val = root.val + root.right.val
        
        return self.hasPathSum(root.left,sum) or self.hasPathSum(root.right,sum)
