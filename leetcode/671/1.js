const judgePoint24 = (nums) => {
    const len = nums.length;
    if (len == 1) { // 递归的出口。处理一下精度丢失的问题
      const diff = nums[0] - 24;
      return Math.abs(diff) < 0.00001;
    }
    let isValid = false; // 标识变量，控制是否进入递归
  
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        const numsCopy = nums.slice(); // 拷贝一份原数组
        numsCopy.splice(j, 1); // 先删除索引大的nums[j]，不会影响nums[i]的位置
        numsCopy.splice(i, 1); // 删除nums[i]]
        const n1 = nums[i];
        const n2 = nums[j];
        // 加
        isValid = isValid || judgePoint24(numsCopy.concat(n1 + n2));
        // 减与被减
        isValid = isValid || judgePoint24(numsCopy.concat(n1 - n2));
        isValid = isValid || judgePoint24(numsCopy.concat(n2 - n1));
        // 乘
        isValid = isValid || judgePoint24(numsCopy.concat(n1 * n2));
        if (n2 !== 0) { // 除
          isValid = isValid || judgePoint24(numsCopy.concat(n1 / n2));
        }
        if (n1 !== 0) { // 被除
          isValid = isValid || judgePoint24(numsCopy.concat(n2 / n1));
        }
        if (isValid) return true; 
      }
    }
    return false; // 遍历结束，始终没有返回真，那就返回false
  };
