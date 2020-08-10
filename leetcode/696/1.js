const countBinarySubstrings = (s) => {
    // 1. 设置结果集
    let count = 0;
  
    // 2. 遍历字符串
    for (let i = 0; i < s.length - 1; i++) {
      // 3. 发现目标
      if (s[i] !== s[i + 1]) {
        
        // 4. 设置深入探索前的初始目标
        let [m, n] = [i, i + 1];
        const aim = s[m];
        
        // 5. 开始深度挖掘
        // 为什么要 aim？看 00110011，当中的 011001 里，开头的 0 和末尾的 1 也不等
        while (m >= 0 && n < s.length && s[m] === aim) {
          if (s[m] !== s[n]) {
            count++;
            m--;
            n++;
          } else {
            break;
          }
        }
      }
    }
    // 5. 返回结果
    return count;
  };
