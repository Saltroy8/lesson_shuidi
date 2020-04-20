/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let num = 0;
    if(grid && grid.length) {
        const maxI = grid.length - 1, maxJ = grid[0].length - 1
        function overturn(i, j) { // 符合条件的翻转为'0'
            if(i < 0 || j < 0 || i > maxI || j > maxJ) return;
            if(grid[i][j] === '1') {
                grid[i][j] = '0'
                overturn(i, j-1)
                overturn(i-1, j)
                overturn(i+1, j)
                overturn(i, j+1)
            }
        }
        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                if(grid[i][j] === '1') {
                    num++;
                    overturn(i, j)
                }
            }
        }
    }
    return num;
};