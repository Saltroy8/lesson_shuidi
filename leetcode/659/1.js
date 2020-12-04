var isPossible = function qiefen(nums) {
    var dp1 = 0, dp2 = 0, dp3 = 0, i = 0
    while(i < nums.length) {
        var start = i, left
        while(i < nums.length && nums[i] === nums[++i]) {}
        if (start > 0 && nums[start - 1] + 1 < nums[start]) {
            if (dp1 || dp2) return false
            dp1 = i - start, dp3 = 0
        } else {
            if ((left = i - start - dp1 - dp2) < 0) return false
            var _dp2 = dp2
            dp2 = dp1
            if (left > dp3) {
                dp1 = left - dp3
                dp3 = dp3 + _dp2
            } else {
                dp1 = 0
                dp3 = left + _dp2
            }
        }
    }
    return dp1 === 0 && dp2 === 0
}
