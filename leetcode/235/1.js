/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
    // 1. 设置 p 抵达的路径
    let pPath = [];
  
    // 2. 设置 q 抵达的路径
    let qPath = [];
  
    // 3. 递归
    const recursion = (root, path) => {
  
      // 3.1 设置递归终止条件：无节点或者 p + q 的路径都找到了
      if (!root || (pPath.length && qPath.length)) {
        return;
      }
  
      // 3.2 将当前节点添加进路径中
      path.push(root);
  
      // 3.3 判断是否找到了目标的 p、q 节点
      // 注意，题目给的是 treeNode 节点，所以需要 p.val
      if (root.val === p.val) {
        pPath = path.concat();
      }
      if (root.val === q.val) {
        qPath = path.concat();
      }
  
      // 3.4 进一步递归
      recursion(root.left, path);
      recursion(root.right, path);
      
      // 3.5 回溯
      path.pop();
    };
    recursion(root, []);
  
    console.log(pPath);
  
    // 4. 找完路径后，开始遍历比较并返回结果
    const maxLength = Math.max(pPath.length, qPath.length);
    for (let i = 0; i < maxLength; i++) {
      if (pPath[i] !== qPath[i]) {
        return pPath[i - 1];
      }
    }
  };
  
  /*
        6
     /    \
    2      8
   / \    / \
  0   4  7   9
     / \
    3   5
  */
  
  const root = {
    val: 6,
    left: {
      val: 2,
      left: { val: 0, left: null, right: null },
      right: {
        val: 4,
        left: { val: 3, left: null, right: null },
        right: { val: 5, left: null, right: null },
      },
    },
    right: {
      val: 8,
      left: { val: 7, left: null, right: null },
      right: { val: 9, left: null, right: null },
    },
  };
  
  console.log(lowestCommonAncestor(root, 2, 8)); // 6
  console.log(lowestCommonAncestor(root, 2, 4)); // 2
 