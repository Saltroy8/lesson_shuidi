const numTrees = (n) => {
    const memo = new Array(n + 1).fill(0);
    // 单独再封装出recur 是为了memo只创建一次。而不是每次调用都新建
    const recur = (n) => {
      if (n == 0 || n == 1) return memo[n] = 1;
      if (memo[n] > 0) return memo[n];
      for (let i = 0; i < n; i++) {
        memo[n] += recur(i) * recur(n - i - 1);
      }
      return memo[n];
    };
    return recur(n);
  };
