/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const ret = [];
  
    for (let i = 0, temp = 1; i < nums.length; i++) {
      ret[i] = temp;
      temp *= nums[i];
    }
    for (let i = nums.length - 1, temp = 1; i >= 0; i--) {
      ret[i] *= temp;
      temp *= nums[i];
    }
    return ret;
  };