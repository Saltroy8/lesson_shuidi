/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    if (!board.length) 
        return 0;
    var rows = board.length;
    var cols = board[0].length;
    var copy = new Array(rows);
    for (var row = 0; row < rows; row++) {
        copy[row] = new Array(cols);
    }
    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            copy[row][col] = board[row][col];
        }
    }
    var neighbors = [0, -1, 1];
    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            var liveBox = 0;
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    if (!i && !j) continue
                    var r = row + neighbors[i];
                    var c = col + neighbors[j];
                    if ((r >= 0 && r < rows) && (c >= 0 && c < cols) && copy[r][c] === 1) {
                        liveBox++;
                    }
                }
            }
            if ((copy[row][col] === 1) && (liveBox < 2 || liveBox > 3)) {
                board[row][col] = 0;
            }
            if (copy[row][col] === 0 && liveBox === 3) {
                board[row][col] = 1;
            }
        }
    }
};