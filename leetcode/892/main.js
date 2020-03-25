/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    var sum = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            sum += grid[i][j] * 6;      
            if (grid[i][j] > 1)
                sum -= (grid[i][j] - 1) * 2; 
            if (i >= 1) 
                sum -= Math.min(grid[i][j], grid[i - 1][j]) * 2;
            if (j >= 1)
                sum -= Math.min(grid[i][j], grid[i][j - 1]) * 2;
        }
    }
    return sum;
};