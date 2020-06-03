var new21Game = function (N, K, W) {
    if (K == 0) return 1
    let dp = new Array(N + 1).fill(0)
    let preSum = new Array(N + 1).fill(0)
    dp[0] = preSum[0] = 1
    for (let i = 1; i < N + 1; i++) {
      if (i - W <= 0) { 
        if (i <= K) {
          dp[i] = preSum[i - 1] / W
        } else { 
          dp[i] = preSum[K - 1] / W
        }
      } else {
        if (i <= K) {
          dp[i] = (preSum[i - 1] - preSum[i - W - 1]) / W
        } else {
          dp[i] = (preSum[K - 1] - preSum[i - W - 1]) / W
        }
      }
      preSum[i] = preSum[i - 1] + dp[i]
    }
    return preSum[N] - preSum[K - 1]
  }
  