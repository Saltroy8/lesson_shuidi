const maxDepth = (root) => {
    if (root == null) return 0;
    const queue = [root];
    let depth = 1;
    while (queue.length) {
      const levelNum = queue.length;          // 当前层的节点个数
      for (let i = 0; i < levelNum; i++) {    // 逐个让当前层的节点出列
        const cur = queue.shift();            // 当前出列的节点
        if (cur.left) queue.push(cur.left);
        if (cur.right) queue.push(cur.right); // 左右子节点入列
      }
      // 当前层所有节点出列，如果有下一层节点，则队列非空
      if (queue.length) depth++;
    }
    return depth;
  };
