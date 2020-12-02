var maxNumber = function(nums1, nums2, k) {
    var r = Array(k).fill(0), end = Math.min(k, nums1.length)
    for(var i = Math.max(0, k - nums2.length); i <= end; i++) 
            r = max(r, merge(maxSubsequence(nums1, i), maxSubsequence(nums2, k - i)))
    return r
};
var maxSubsequence = (nums, k) => {
    var mStack = [], len = nums.length, top = -1, last = len - k
    for(var i = 0; i < len; i++) {
        while (top > -1 && nums[i] > mStack[top] && last > 0) top--, last--
        top < k - 1 ? mStack[++top] = nums[i] : last--
    }
    return mStack
}
var merge = (nums1, nums2) => {
    var p1 = p2 = 0, r = [], len1 = nums1.length, len2 = nums2.length
    while (p1 < len1 || p2 < len2) {
        if (p2 >= len2 || nums1[p1] > nums2[p2]) r.push(nums1[p1++])
        else if (nums1[p1] === nums2[p2]) {
            var _p1 = p1, _p2 = p2
            while(_p1 < len1 && nums1[++_p1] === nums2[++_p2]) {}
            r.push(_p2 >= len2 || nums1[_p1] > nums2[_p2] ? nums1[p1++] : nums2[p2++])
        } else r.push(nums2[p2++])
    }
    return r 
}
var max = (nums1, nums2, p1 = p2 = -1, len1 = nums1.length) => {
    while(p1 < len1 && nums1[++p1] === nums2[++p2]) {}
    return nums2[p2] > nums1[p1] ? nums2 : nums1
}

