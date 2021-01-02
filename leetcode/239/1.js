var maxSlidingWindow = function(nums, k) {
    let h = new Uint16Array(20001), r = new Int16Array(nums.length - k + 1), i = -1
    while (++i < k) h[nums[i] + 10000]++
    r[0] = max(h), i--
    while(++i < nums.length) {
        h[nums[i] + 10000]++
        h[nums[i - k] + 10000]--
        r[i - k + 1] = max(h)
    }
    return r
};
max = h => {
    let j = 20001
    while(h[--j] === 0) {}
    return j - 10000
}
