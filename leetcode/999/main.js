/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board.length; j++){
            if(board[i][j] == 'R'){
                res = search(board,i,j);
            }
        }
    }
    return res;
}
    var search = function(board,i,j){
        var sum=0;
        for(var x=j;x<board[0].length;x++){
            if(board[i][x]=='B'){
                break;
            }
            if(board[i][x]=='p'){
                sum++;
                break;
            }
        }

        for(var x=j;x>=0;x--){
            if(board[i][x]=='B'){
                break;
            }
            if(board[i][x]=='p'){
                sum++;
                break;
            }
        }
        
        for(var y=i;y<board.length;y++){
            if(board[y][j]=='B'){
                break;
            }
            if(board[y][j]=='p'){
                sum++;
                break;
            }
        }

        for(var y=i;y>=0;y--){
            if(board[y][j]=='B'){
                break;
            }
            if(board[y][j]=='p'){
                sum++;
                break;
            }
        }
        return sum;
    }