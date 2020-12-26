var maximalRectangle = function(matrix) {
    if (matrix.length === 0) return 0
    let i = matrix.length, ns = Array.from({length: i}, _ => new Uint8Array(matrix[0].length)), r = 0, j, n
    while (i--) 
        for (j = 0, n = 0; j < matrix[0].length; j++) 
            ns[i][j] = matrix[i][j] === '1' ? ++n : n = 0
    while (j--) 
        for (i = matrix.length; i--;) 
            for (let k = i + 1, w = 200, h = 0, t; k-- && ns[k][j];) {
                if (ns[k][j] < w) w = ns[k][j]
                if ((t = w * ++h) > r) r = t
            }
    return r
};
