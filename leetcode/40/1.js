/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = (candidates, target) => {
    // 1. 设置哈希集合，记录重复的路径，例如 [1, 7] 和 [7, 1]
    const set = new Set();
  
    // 2. 通过 result 捕获结果
    const result = [];
  
    // 3. 递归
    const recursion = (index, sum, path) => {
      // 3.1 如果超过目标了，中止递归
      if (sum > target) {
        return;
      }
      // 3.2 如果等于目标，result 捕获结果
      if (sum === target) {
        // 3.2.1 浅拷贝数组并且排序
        const newPath = path.concat().sort((a, b) => a - b);
        
        // 3.2.2 获取一个字符串版本的新数组
        const newPathStr = newPath.join('-');
        
        // 3.2.3 如果还没有添加过这个路径，那么就添加它
        if (!set.has(newPathStr)) {
          result.push(path.concat());
        }
  
        // 3.2.4 记录这个路径
        set.add(newPathStr);
        return;
      }
  
      // 3.3 从 index 开始，遍历数组，查找可用目标
      for (let i = index; i < candidates.length; i++) {
        // 3.3.1 迎来老板
        path.push(candidates[i]);
  
        // 3.3.2 让司机送老板出门
        recursion(i + 1, sum + candidates[i], path);
  
        // 3.3.3 呸,撤掉老板的位置,等待 i + 1 老板的光临
        path.pop();
      }
    };
    recursion(0, 0, []);
  
    // 4. 返回结果
    return result;
  };
  
  console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
  