var generate = function(numRows) {
    for(var i = 0, r = Array(numRows); i < numRows; i++) {
        r[i] = Array(i + 1)
        r[i][0] = r[i][i] = 1
        for (var j = 1; j <= i >>> 1; j++) 
            r[i][j] = r[i][i - j] = r[i - 1][j - 1] + r[i - 1][j]
    }
    return r
};
