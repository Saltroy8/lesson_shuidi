var sortString = function(s) {
    var h = Object.create(null), ks, i, r = [], l
    for (var v of s) h[i = v.charCodeAt()] = (h[i] || 0) + 1
    ks = Object.keys(h), l = ks.length
    while(r.length < s.length) {// 结果数组长度 = 字符串长度 结束
        for (i = 0; i < l; i++) 
            if(h[ks[i]]) r.push(ks[i] | 0), h[ks[i]]--
        while (i--) 
            if(h[ks[i]]) r.push(ks[i] | 0), h[ks[i]]--
    }
    return String.fromCharCode(...r)
};
