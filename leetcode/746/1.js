var minCostClimbingStairs = function(cost) {
    //递推版
    let dp1 = cost[0];
    let dp2 = cost[1];
    for(let i=2;i<=cost.length;i++){
        [dp1,dp2] = [dp2,Math.min(dp1,dp2)+(cost[i]||0)]
    }
    return dp2;
    
    //记忆版
    // let dp = [cost[0],cost[1]];
    // for(let i=2;i<=cost.length;i++){
    //     dp[i] = Math.min(dp[i-1],dp[i-2])+(cost[i]||0);
    // }
    // return dp[dp.length-1];
};
