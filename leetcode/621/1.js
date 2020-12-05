var leastInterval = function(tasks, n, h = new Map, r = 0) {
    if (n === 0) return tasks.length
    for(var i = 0, t; i < tasks.length; i++) 
        (t = h.get(tasks[i])) ? t[0]++: h.set(tasks[i], [1, 0])
    while(h.size) {
        var sel = [-Infinity]
        h.forEach((v, k) => v[1] ? v[1]-- : v[0] > sel[0] && (sel = [v[0], k]))
        if (sel.length === 2) d(h, sel[1], n)
        r++
    }
    return r
};
var d = (h, k, n, t = h.get(k)) => t[0] === 1 ? h.delete(k) : (t[0]--, t[1] = n)

