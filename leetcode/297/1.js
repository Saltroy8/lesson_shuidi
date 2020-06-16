
const serialize = (root) => {
    if (root == null) return 'X,' // 遇到null节点
    const leftSerialized = serialize(root.left)   //左子树的序列化字符串
    const rightSerialized = serialize(root.right) //右子树的序列化字符串
    return root.val + ',' + leftSerialized + rightSerialized // 根|左|右
  }
  
  
  /**
   * Decodes your encoded data to tree.
   *
   * @param {string} data
   * @return {TreeNode}
   */
  const buildTree = (list) => {        // dfs函数
    const nodeVal = list.shift()       // 当前考察的节点
    if (nodeVal == 'X') return null    // 是X，返回null给父调用
    const node = new TreeNode(nodeVal) // 创建node节点
    node.left = buildTree(list)        // 构建node的左子树
    node.right = buildTree(list)       // 构建node的右子树
    return node                        // 返回以node为根节点的子树给父调用
  }
  const deserialize = (data) => {
    const list = data.split(',')       // 转成list数组
    return buildTree(list)             // 构建树，dfs的入口
  }
  
  
  /**
   * Your functions will be called as such:
   * deserialize(serialize(root));
   */