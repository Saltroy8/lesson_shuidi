var wordBreak = function (s, wordDict) {
    const wordSet = new Set(wordDict);
    const visited = new Array(s.length);
    const queue = [0];                      // 先考察start位置0
    while (queue.length) {
      const start = queue.shift();          // 考察出列节点
      if (visited[start] == true) continue; // 跳过访问过的
      visited[start] = true;                // 访问了 记录一下
      for (let end = start + 1; end <= s.length; end++) { // 固定start 考察所有end
        const word = s.slice(start, end);   // 开头的单词
        if (wordSet.has(word)) {            // 单词表有这个单词
          if (end > s.length - 1) return true; //end指针已经越界，即所有节点遍历完了
          queue.push(end); //单词存在于单词表，且end未到头，将end推入队列作为下一层节点
        }
      }
    }
    return false; // 所有节点遍历完，也没有返回true，则返回false
  };
