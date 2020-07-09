const respace = (dictionary, sentence) => {
    const len = sentence.length;
    const wordDict = new Set(dictionary);
    const memo = new Array(len);
    const count = (sentence, wordDict, start, memo) => {
      if (start > len - 1) return 0; // 指针越界
      if (memo[start] !== undefined) return memo[start]; // memo中有 就直接用
      memo[start] = len - start; // 保底的最坏情况：start到末尾全是不能识别的字符
      for (let end = start + 1; end <= len; end++) { // end指针从start+1开始，遍历所有字符
        const word = sentence.substring(start, end); // 考察start到end的子串
        if (wordDict.has(word)) { // 是字典的单词
          memo[start] = Math.min(memo[start], count(sentence, wordDict, end, memo));
        } else {
          memo[start] = Math.min(memo[start], count(sentence, wordDict, end, memo) + word.length);
        }
      }
      return memo[start];
    };
    return count(sentence, wordDict, 0, memo);
  };
