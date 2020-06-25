var wordBreak = function (s, wordDict) {
    const wordSet = new Set(wordDict);
    const queue = [0]; // BFS先考察start位置0
    while (queue.length) {
      const start = queue.shift(); // 考察出列的节点
      for (let end = start + 1; end <= s.length; end++) { 
        const word = s.slice(start, end); // 开头的单词
        if (wordSet.has(word)) { // 单词表有这个单词，要看end指针到哪了
          if (end > s.length - 1) return true; // end指针越界，说明所有节点遍历完了
          // 直接返回true，没有节点需要考察需要入列了
          queue.push(end); // 否则，将end入列，作为下一层待考察的节点
        }
      }
    }
    return false; // 所有节点遍历完，也没有返回true，则返回false
  };
