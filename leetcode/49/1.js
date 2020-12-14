var getPrimes = function(n) {// getPrimes(102) 可以获得26个质数
    var isCom= new Uint8Array(n), b = Math.sqrt(n), r = n > 2 ? [2] : [], t
    for(var i = 3; i < n; i += 2) {
        if(!isCom[i]) {
            r.push(i)
            if (i <= b) for(var j = i; (t = i * j) < n; j += 2) isCom[t] = 1
        }
    }
    return r
};
