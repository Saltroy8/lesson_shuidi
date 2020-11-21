var sortList = function(head, r = []) {
    if (!head) return null
    while (head) {
        r.push(head)
        var tmp = head.next
        head.next = null
        head = tmp
    }
    r.sort((a, b) => a.val - b.val).reduce((p, v) => p.next = v)
    return r[0]
};
