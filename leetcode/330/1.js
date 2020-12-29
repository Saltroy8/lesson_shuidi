/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (nums, n) {
    let m = 1, i = 0, r = 0
    while (m <= n) m += nums[i] <= m ? nums[i++] : (r++ , m)
    return r
};
