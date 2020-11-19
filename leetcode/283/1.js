var moveZeroes = function(nums) {
    nums.reduce((p, v, i) => v === 0 ? p + 1 : (p !== 0 && ([nums[i], nums[i - p]] = [nums[i - p], nums[i]]), p), 0)
};

