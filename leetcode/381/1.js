var RandomizedCollection = function() {
    this.a = []
    this.h = {}
};

RandomizedCollection.prototype.insert = function(val) {
    this.a.push(val)
    var r = this.h[val]
    r ? this.h[val].push(this.a.length - 1) : this.h[val] = [this.a.length - 1]
    return r === void 0
};

RandomizedCollection.prototype.remove = function(val) {
    var r = this.h[val]
    if (r) {
        delete this.a[r.pop()]
        if (r.length === 0) delete this.h[val]
    }
    return r !== void 0
};

RandomizedCollection.prototype.getRandom = function() {
    var a = this.a.filter(v => v !== void 0)
    return a[Math.random() * a.length | 0]
};
