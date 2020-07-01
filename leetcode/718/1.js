const findLength = (A, B) => {
    const m = A.length;
    const n = B.length;
    const dp = new Array(n + 1).fill(0);
    let res = 0;
    for (let i = 1; i <= m; i++) {
      for (let j = n; j >= 1; j--) {
        if (A[i - 1] == B[j - 1]) {
          dp[j] = dp[j - 1] + 1;
        } else {
          dp[j] = 0;
        }
        res = Math.max(dp[j], res);
      }
    }
    return res;
  };
  