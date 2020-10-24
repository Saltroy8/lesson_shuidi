/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
const videoStitching = (clips, T) => {
    // 初始化 T 长度的数组
    const TArray = Array.from(Array(T + 1), () => ({ array: [], length: 0 }));
  
    // 遍历 clips 列表
    for (let i = 0; i < clips.length; i++) {
  
      // 获取左右边界 [m, n]
      const [m, n] = clips[i];
  
      // 从 m 遍历到 n，看下是否需要替换
      for (let i = m; i < n, i < T; i++) {
  
        // 获取新长度
        const newLength = n - i;
  
        // 进行对比判断，有需要则替换
        if (newLength >= TArray[i].length) {
          TArray[i].array = [m, n];
          TArray[i].length = newLength;
        }
      }
    }
  
    // console.log(TArray);
    // console.log('------');
  
    let result = 0;
  
    const arr = [];
  
    // 遍历我们整理后的 TArray
    for (let i = 0; i < T; i++) {
  
      // 获取左右边界 [m, n]
      const n = Math.min(TArray[i].array[1], T);
      // console.log(TArray[n])
      // 如果当前位置该位置是初始化的数组，则返回 -1
      if (
        (i !== T && !TArray[i].length)
        || (n !== T && !TArray[n].length)
      ) {
        return -1;
      }
      arr.push(TArray[i].array);
      // 否则长度 + 1，并且进行扩容
      result++;
      i = n - 1;
    }
  
    // console.log(arr);
    // 返回最终结果
    return result;
  };
