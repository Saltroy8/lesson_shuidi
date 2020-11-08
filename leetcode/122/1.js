function maxProfit(prices) {
    let profit = 0;
    let i = 1;
    const l = prices.length;
  
    while (i < l) {
      while (i < l && prices[i - 1] >= prices[i]) { // 下降阶段
        i++;
      } 					     	// 下降阶段结束，prices[i - 1]是波谷
      const trough = prices[i - 1];
      while (i < l && prices[i - 1] <= prices[i]) { // 上升阶段
        i++;
      }						// 上升阶段结束，prices[i - 1]是波峰
      const peak = prices[i - 1];
      profit += peak - trough;		        // 波峰-波谷，得到一段差价
    }
    return profit;
  }
