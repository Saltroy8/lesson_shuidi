const firstMissingPositive = (nums) => {
    for (let i = 0; i < nums.length; i++) {
      while (
        nums[i] >= 1 &&              
        nums[i] <= nums.length &&     // 对1~nums.length范围内的元素进行安排
        nums[nums[i] - 1] !== nums[i] // 已经出现在理想位置的，就不用交换
      ) {
        const temp = nums[nums[i] - 1]; // 交换
        nums[nums[i] - 1] = nums[i];
        nums[i] = temp;
      }
    }
    // 现在期待的是 [1,2,3,...]，如果遍历到不是放着该放的元素
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] != i + 1) { // 比如 [1,3,4,...]
        return i + 1;         // 返回 2
      }
    }
    return nums.length + 1; // 发现元素 1~nums.length 占满了数组，一个没缺
  };
  