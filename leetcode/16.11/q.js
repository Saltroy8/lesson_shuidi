var divingBoard = function (shorter, longer, k) {
    if (k == 0) return [];
    if (shorter == longer) return [k * shorter];
    const res = [];
    for (let i = 0; i <= k; i++) {
      res.push(i * longer + (k - i) * shorter); // 题目好像从短到长排列，那就从0个longer开始吧
    }
    return res;
  };
  