var uniquePaths = function(m, n, i = 0, j = 0) {
    return i === m - 1 && j === n - 1 ? 1 : i === m || j === n ? 0 : uniquePaths(m, n, i + 1, j) + uniquePaths(m, n, i, j + 1)
};

