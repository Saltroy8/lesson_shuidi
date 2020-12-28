var maxProfit = function(k, prices) {
    const dp = new Int16Array(k << 1).fill(-prices[0])
    for (let i = 0; i < prices.length; i++) 
        for (let j = Math.min(dp.length, i + 1); j--;) // 顺序遍历也可
            dp[j] = Math.max(dp[j], (dp[j - 1] || 0) + (j & 1 ? prices[i] : -prices[i]))
    return Math.max(0, ...dp) 
};
