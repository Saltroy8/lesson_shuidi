var rotate = function(matrix) {
    let n = matrix.length, m = Array.from({length: n}, _ => Array(n))
    for(let i = 0; i < n; i++)
        for(let j = 0; j < n; j++)
            m[j][n - 1 - i] = matrix[i][j]
    for(let i = 0; i < n; i++)
        for(let j = 0; j < n; j++)
            matrix[i][j] = m[i][j]
};
