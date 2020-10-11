var canPartition = function (nums) {
    let sum = nums.reduce((acc, num) => acc + num, 0);
    if (sum % 2) {
      return false;
    }
    sum = sum / 2;
    return dfs(nums, sum, 0);
  };
  
  function dfs(nums, target, cur) {
    if (target < 0 || cur > nums.length) {
      return false;
    }
    return (
      target === 0 ||
      dfs(nums, target - nums[cur], cur + 1) ||
      dfs(nums, target, cur + 1)
    );
  }
