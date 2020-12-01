var searchRange = function(nums, target) {
    var i = binarySearch(nums, target)
    if (i === -1) return [-1, -1]
    else {
        var l = i, r = i + 1
        while(nums[l] === target && l >= 0) l--
        while(nums[r] === target && r < nums.length) r++
    }
    return [l + 1, r - 1]
                                            
};
var binarySearch = (nums, target, l = 0, r = nums.length - 1, m = l + r >>> 1) => 
          l  >  r      ? -1 :
    nums[m] === target ?  m :
    nums[m]  >  target ? binarySearch(nums, target, l, m - 1)
                       : binarySearch(nums, target, m + 1, r)
