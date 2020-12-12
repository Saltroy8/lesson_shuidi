var wiggleMaxLength = function(nums) {
    if (nums.length < 2) return nums.length
    let trend, len = 1, i = 0
    while(++i < nums.length)
        if (nums[i] !== nums[i - 1]) 
            if (nums[i] > nums[i - 1] !== trend) {
                len++
                trend = nums[i] > nums[i - 1] 
            }
    return len
};
