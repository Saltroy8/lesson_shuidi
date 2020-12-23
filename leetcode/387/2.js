var firstUniqChar = function(s) {
    let h = new Map, i = -1
    while (++i < s.length) h.set(s[i], h.has(s[i]) ? -1 : i)
    i = -1
    h.forEach((v, _, h) => v !== -1 && (i = v, h.clear()))
    return i
};
