var canPlaceFlowers = function(flowerbed, n) {
    if (n === 0) return true
    let i = -1, p = -1, r = 0, l = flowerbed.length - 1
    while (i++ < l) 
        if (flowerbed[i] === 1) {
            if (p === -1)  // 开始 → 花
                r = i - 0 >> 1
            else // 花 → 花
                r += i - p - 2 >> 1
            p = i
            if (r >= n) return true
        }
    if (p === -1)  // 无花
        r = l - 0 + 2 >> 1
    else // 花 → 结束
        r += l - p >> 1
    return r >= n
};
