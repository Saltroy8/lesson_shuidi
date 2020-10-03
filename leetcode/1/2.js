var twoSum = function(nums, target) {
    return nums.reduce((p, v, i, ar) => p[v] !== undefined && ar.splice(1) && [p[v], i] || (i === p['l'] ? [] : p[target - v] = i, p), {l: nums.length - 1})
};
