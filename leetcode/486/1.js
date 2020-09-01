const PredictTheWinner = (nums) => {

    const helper = (i, j) => { // i，j是两端的索引
      if (i == j) {    // 递归的出口，此时只有一个选择，并且没有剩余的可选
        return nums[i];
      }
      const pickI = nums[i] - helper(i + 1, j); // 选择左端
      const pickJ = nums[j] - helper(i, j - 1); // 选择右端
      return Math.max(pickI, pickJ);            // 取较大者
    };
  
    return helper(0, nums.length - 1) >= 0;
  };
