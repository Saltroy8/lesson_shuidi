var candy = function(ratings) {
    let i = 0, r = new Uint16Array(ratings.length)
    r[0] = 1
    while (++i < ratings.length) // 初始每人1个时，上解法保留if，删Math.max即可
        r[i] = ratings[i] > ratings[i - 1] ? r[i - 1] + 1 : 1
    i--
    while (i--) // r[i] = Math.max(r[i], r[i + 1] + 1) 写成判断后，并入条件
        if (ratings[i] > ratings[i + 1] && r[i + 1] + 1 > r[i]) r[i] = r[i + 1] + 1
    return r.reduce((p, v) => p + v)
};
