var countRangeSum = function(nums, lower, upper) {
    var d = (l, r, f) => {
        if (l === r) return 0
        var m = l + r >>> 1, res = d(l, m) + d(m + 1, r), i = l, p1 = m + 1, p2, a
        while (i <= m) {
            while(p1 <= r && sums[p1] - sums[i] <  lower) p1++
            p2 = p1
            while(p2 <= r && sums[p2] - sums[i] <= upper) p2++
            res += p2 - p1, i++
        }
        if (f === 1) return res
        i = 0, p1 = l, p2 = m + 1, a = []
        while(p1 <= m || p2 <= r) 
            a[i++] = p2 > r || p1 <= m && sums[p1] < sums[p2] ? sums[p1++] : sums[p2++]
        for(i = 0; i < a.length; i++) sums[l + i] = a[i]
        return res
    }, sums = [0]
    for(var i = 1; i <= nums.length; i++) sums[i] = sums[i - 1] + nums[i - 1]
    return d(0, sums.length - 1, 1)
};

