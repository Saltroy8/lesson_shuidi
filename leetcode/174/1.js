const calculateMinimumHP = (dungeon) => {
    const m = dungeon.length;
    const n = dungeon[0].length;
    // memo初始化，每一项都为0，代表还没记录
    const memo = new Array(m);
    for (let i = 0; i < m; i++) {
      memo[i] = new Array(n).fill(0);
    }
    const minSaveHP = (dungeon, i, j) => {
      if (i == m - 1 && j == n - 1) { // 递归的出口
        return dungeon[i][j] > 0 ? 1 : 1 - dungeon[i][j];
      }
      if (memo[i][j] > 0) return memo[i][j]; // 如果备忘录中有，就直接返回它
      let goDown = Infinity, goRight = Infinity;
      if (i < m - 1)                         // 走下方的点，需要带着的最小安全血量
        goDown = minSaveHP(dungeon, i + 1, j);
      if (j < n - 1)                         // 走右方的点，需要带着的最小安全血量
        goRight = minSaveHP(dungeon, i, j + 1);
      if (goDown < goRight) {
        if (goDown - dungeon[i][j] <= 0) {
          memo[i][j] = 1;
        } else {
          memo[i][j] = goDown - dungeon[i][j];
        }
      } else {
        if (goRight - dungeon[i][j] <= 0) {
          memo[i][j] = 1;
        } else {
          memo[i][j] = goRight - dungeon[i][j];
        }
      }
      return memo[i][j];
    };
    return minSaveHP(dungeon, 0, 0, memo);
  };
