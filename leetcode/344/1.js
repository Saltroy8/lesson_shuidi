/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
    // 1. 设置尾部指针
    let end = s.length - 1;
  
    // 2. 遍历数组
    for (let i = 0; i < end; i++) {
  
      // 3. swap 交换
      const temp = s[i];
      s[i] = s[end];
      s[end] = temp;
  
      // swap 第二种方法：[s[i], s[end]] = [s[end], s[i]]
  
      // 4. 尾部指针缩减
      end--;
    }
  };
  
  console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); // ['o', 'l', 'l', 'e', 'h']
