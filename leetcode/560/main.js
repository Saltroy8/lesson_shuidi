var subarraySum = function(nums, k) {
    let map  = new Map();
    map.set(0,1);
    let sum = 0;
    let res = 0;
    for(let i=0;i<nums.length;i++){
      sum += nums[i];
      if(map.has(sum-k))res += map.get(sum-k);
      map.set(sum,map.has(sum)?map.get(sum)+1:1);
    }
    return res;
  };