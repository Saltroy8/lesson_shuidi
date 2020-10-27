/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = (root) => {
    // 1. 设置结果集
    const result = [];
  
    // 2. 递归遍历
    const recursion = (root) => {
      // 2.1 判断终止条件
      if (!root) {
        return;
      }
  
      // 2.2 前序遍历：根、左、右
      result.push(root.val);
      recursion(root.left);
      recursion(root.right);
    };
    recursion(root);
  
    // 3. 返回结果
    return result;
  };
  
  const root = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: { val: 3, left: null, right: null },
      right: null,
    },
  };
  
  console.log(preorderTraversal(root));
