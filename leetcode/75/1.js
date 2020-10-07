/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
    // 1. 数组下标对应 0，1，2 的个数
    const colorsTime = [0, 0, 0];
  
    // 2. 遍历数组收集颜色
    for (let i = 0; i < nums.length; i++) {
      colorsTime[nums[i]] ++;
    }
  
    // 3. 设置替换颜色的数组下标
    let j = 0;
  
    // 4. 遍历 colorsTime，将里面的数字取出来
    for (let i = 0; i < colorsTime.length; i++) {
      // 5 如果还有颜色
      while (colorsTime[i]) {
        nums[j] = i; // 更换
        j++; // 下标累加
        colorsTime[i]--; // 次数减一
      }
    }
  
    // 6. 返回结果
    // return nums;
  };
  
  console.log(sortColors([2, 0, 2, 1, 1, 0])); // [0, 0, 1, 1, 2, 2]
  
