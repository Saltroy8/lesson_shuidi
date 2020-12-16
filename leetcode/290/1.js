var wordPattern = function(pattern, s) {
    const a = s.split(' '), len = pattern.length
    if (len !== a.length) return false
    let h = new Map, i = -1
    while(++i < len) {
        const p = pattern[i], s = a[i]
        if (h.has(p)) {
            if (h.get(p) !== s) return false 
        } else {
            h.set(p, s)
        }
    }
    h = new Map, i = -1
    while(++i < len) {
        const p = pattern[i], s = a[i]
        if (h.has(s)) {
            if (h.get(s) !== p) return false 
        } else {
            h.set(s, p)
        }
    }
    return true
};
