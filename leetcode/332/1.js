const findItinerary = (tickets) => {
    const res = ['JFK']; // 初始放入起点'JFK'
    const map = {};      // 邻接表
  
    for (const ticket of tickets) { // 建表
      const [from, to] = ticket;
      if (!map[from]) {
        map[from] = [];
      }
      map[from].push(to);
    }
  
    for (const city in map) { // 按照字母顺序，小的在前
      map[city].sort();
    }
  
    const dfs = (city, used) => { // 当前访问的城市、已用掉的机票数
      if (used == tickets.length) { 
        return true;
      };
      const nextCities = map[city];
      if (!nextCities || nextCities.length == 0) { // 没有邻接城市了
        return false; // 还没用光机票的情況下，没有下一站了，返回false
      }
      for (let i = 0; i < nextCities.length; i++) { // 设置出各种选择（递归分支）
        const next = nextCities[i]; // 当前选择的下一站
        nextCities.splice(i, 1);    // 飞出地的list中删掉这一站
        res.push(next);             // 该选择推入res
        if (dfs(next, used + 1)) {  // 在该递归分支中能找到一个用完所有机票的路径
          return true;
        } else {
          nextCities.splice(i, 0, next); // 删掉的这一站再插入回去
          res.pop();                     // 推入res的选择，也撤销
        }
      }
    };
  
    dfs('JFK', 0); // 从'JFK'城市开始遍历，当前用掉0张机票
    return res;
  };
