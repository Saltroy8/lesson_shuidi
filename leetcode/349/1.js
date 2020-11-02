const intersection = (nums1, nums2) => {
    const map = {};
    const res = [];
  
    for (const num1 of nums1) {
      map[num1] = true; // 记录nums1出现过的数字
    }
    for (const num2 of nums2) {
      if (map[num2]) {  // 如果nums2的这个数字在nums1出现过
        map[num2] = false; // 置为false，避免重复推入res
        res.push(num2);  // 交集数字推入res
      }
    }
    return res;
  };
  
