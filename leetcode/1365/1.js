const smallerNumbersThanCurrent = (nums) => {
    const sorted = [...nums].sort((a, b) => a - b);
    const res = new Array(nums.length);
    const map = {};
  
    let sameItem = 0;        // 在之前，与自己重复的元素的个数
    let count = 0;           // 比自己小的元素的个数
    for (let i = 0; i < sorted.length; i++) {
      const cur = sorted[i]; // 当前元素
      if (i - 1 >= 0) {
        const prev = sorted[i - 1]; // 前一个元素
        if (prev == cur) {   // 前一个元素和自己相同，sameItem++
          sameItem++;
        } else {             // 前一个元素和自己不同，计算count
          count = map[prev] + sameItem + 1; // 比prev小的个数 + 和prev相同的元素的个数 + prev它自己
          sameItem = 0;      // 现在要统计和自己相同的元素个数，归0
        }
      }
      map[cur] = count;// 每个元素和对应的比它小的个数，计入map
    }
  
    for (let i = 0; i < nums.length; i++) { // 放入res数组
      res[i] = map[nums[i]];
    }
    return res;
  };
  