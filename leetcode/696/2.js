const countBinarySubstrings = (s) => {
    // 1. 设置结果集
    let count = 0;
  
    // 2. 设置搜索
    const dfs = (m, n, aim) => {
      if (m < 0 || n > s.length - 1 || s[m] === s[n] || s[m] !== aim) {
        return;
      }
      count++;
      m--;
      n++;
      dfs(m, n, aim);
    };
  
    // 3. 遍历字符串
    for (let i = 0; i < s.length - 1; i++) {
      // 3.1 发现目标
      if (s[i] !== s[i + 1]) {
        dfs(i, i + 1, s[i]);
      }
    }
  
    // 4. 返回结果
    return count;
  };
