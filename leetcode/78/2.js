const subsets = (nums) => {
    const res = [];
  
    const dfs = (index, list) => {
      res.push(list.slice());
      for (let i = index; i < nums.length; i++) {
        list.push(nums[i]);
        dfs(i + 1, list);
        list.pop();
      }
    };
  
    dfs(0, []);
    return res;
  };
  
