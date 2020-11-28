var reversePairs = function(nums) {
    return sort(nums)
};
var sort = (a, l = 0, r = a.length - 1) => {
    if (l >= r) return 0
    var m = l + r >>> 1, i = 0, t = [], p1 = l, p2 = m + 1,
        sum = sort(a, l, m) + sort(a, m + 1, r) + count(a, p1, m, p2, r)
    while (p1 <= m || p2 <= r) 
        t[i++] = p2 > r || p1 <= m && a[p1] < a[p2] ? a[p1++] : a[p2++]
    for(i = 0; i < t.length; i++) a[l + i] = t[i]
    return sum
}
var count = (a, p1, m, p2, r, total = 0) => {
    while(p1 <= m) {
        while(p2 <= r && a[p1] > 2 * a[p2]) p2++
        total += p2 - 1 - m
        p1++
    }
    return total
}
