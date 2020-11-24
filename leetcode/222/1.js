var countNodes = function(root, n = root, l = 0) {
    if (!root) return 0
    while(n) (n = n.left) && l++
    return d(root, 1 << l, (1 << l + 1) - 1, l)
};
var d = (n, l, r, level, m) => {
    while(l < r) b(n, m = l + r + 1 >> 1, level) ? l = m : r = m - 1
    return l 
}
var b = (n, v, l) => {
    while(l--) n = v >>> l & 1 ? n.right : n.left
    return n !== null
}

