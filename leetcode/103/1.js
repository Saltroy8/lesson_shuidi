var zigzagLevelOrder = function(root) {
    let q = root ? [root] : [], r = []
    while (q.length) {
        let l = q.length
        r.push([])
        while(l--) {
            let n = q.shift()
            f(r, n.val)
            n.left && q.push(n.left)
            n.right && q.push(n.right)
        }
    }
    return r
};
