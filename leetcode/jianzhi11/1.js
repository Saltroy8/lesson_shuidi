const minArray = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      const mid = left + right >>> 1;
      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else if (nums[mid] == nums[right]) {
        right--;
      } else {
        right = mid;
      }
    }
    return nums[left];
  };
  