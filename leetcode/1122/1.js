var relativeSortArray = function(arr1, arr2, h = new Map) {
    arr2.forEach((v, i) => h.set(v, i))
    return sort(arr1, v => h.has(v) ? h.get(v) : 1000 + v)
};
var sort = (a, v, l = 0, r = a.length - 1) => {
    if (l === r) return
    var m = l + r >>> 1, p1 = l, p2 = m + 1, i = 0, t = []
    sort(a, v, l, m)
    sort(a, v, m + 1, r)
    while (p1 <= m || p2 <= r) {
        t[i++] = p2 > r || p1 <= m && v(a[p1]) < v(a[p2]) ? a[p1++] : a[p2++]
    }
    for(var i = 0; i < t.length; i++) a[l + i] = t[i]
    return a
}
