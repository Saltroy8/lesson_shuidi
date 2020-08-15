var removeBoxes = function(boxes) {
    const dp = []
    return points(0, boxes.length - 1, 0)
    function points (l, r, k) {
        // 左界限大于右界限即没交集，没有意义因此返回0
        if (l > r) return 0
        // 三维数组代替法
        dp[l] = dp[l] || []
        dp[l][r] = dp[l][r] || []
        // 已经遍历过这种情况，即 dp[l][r][k] 有值，取出返回即可
        if (dp[l][r][k]) return dp[l][r][k]
        while (r > l && boxes[r] === boxes[r - 1]) r-- && k++
        // 因为 r 变化了，需要重新检查 dp[l][r] 是否存在
        dp[l][r] = dp[l][r] || []

        // 穷举各种情况，获得最大值
        dp[l][r][k] = points(l, r - 1, 0) + (k + 1) ** 2
        for (let i = l; i < r; ++i) {
            if (boxes[i] === boxes[r]) {
                dp[l][r][k] = Math.max(
                    dp[l][r][k],
                    points(l, i, k + 1) + points(i + 1, r - 1, 0)
                )
            }
        }

        return dp[l][r][k]
    }
};
