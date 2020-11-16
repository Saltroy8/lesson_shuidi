var reconstructQueue = function(people) {
    return people.sort((a, b) => a[0] - b[0] || b[1] - a[1]).reduce((p, v, t) => (t = v[1], p[p.findIndex(_=>_ === void 0 && t-- === 0)] = v, p), Array(people.length))
};
