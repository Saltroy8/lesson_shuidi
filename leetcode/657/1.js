/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let m = moves.length;
    let x = 0,y=0;
    if(m%2) return false; // 奇数不可能回到原点
    for(let i=0;i<m;i++){
        switch(moves[i]){ // 坐标加减
            case 'U':
                y++
                break;
            case 'R':
                x++
                break;
            case 'D':
                y--
                break;
            case 'L':
                x--
                break;
        }
    }
    return x===0&&y===0; // 加减后为原点的话 返回true
};
