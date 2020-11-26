var maximumGap = function(nums, r = 0) {
    return nums.length > 1 && sort(nums).reduce((p, v) => v[0] === -1 ? p : (r = Math.max(r, v[0] - p[1]), v)), r
};
var sort = nums => {
    var max = Math.max(...nums), min = Math.min(...nums), space = Math.max(1, (max - min) / (nums.length - 1) | 0), num = (max - min) / space + 1 | 0, t, i
    return nums.reduce((p, v) => (t = p[i = (v - min) / space | 0], p[i] = t[0] === -1 ? [v, v] : [v < t[0] ? v : t[0], v > t[1] ? v : t[1]], p), Array.from({length: num}, _ => [-1, -1]))
}
