var containsDuplicate = function(nums) {
    for (var i = 0; i < nums.length; i ++) {
        while (nums[i] !== i && nums[i] !== void 0) {
            if (nums[nums[i]] !== nums[i]) {
                var tmp = nums[i]
                    nums[i] = nums[tmp]
                    nums[tmp] = tmp
            } else return true
        }
    }
	return false
};

