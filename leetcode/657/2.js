/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = (moves) => {
    const pos = [0, 0];
    for (let i = 0; i < moves.length; i++) {
      const move = moves[i];
      if (move === 'U') { // 上
        pos[0]++;
      } else if (move === 'D') { // 下
        pos[0]--;
      } else if (move === 'L') { // 左
        pos[1]--;
      } else if (move === 'R') { // 右
        pos[1]++;
      }
    }
    return pos[0] === 0 && pos[1] === 0;
  };
  
  console.log(judgeCircle('UD'));
