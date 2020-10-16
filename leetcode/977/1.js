/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    /* 中间开始的双指针 */
    const resArr = [], len = A.length;
    let left = 0, right = len;
  
    while (left < right) { // 找到中间的数
      const mid = left + ((right - left) >> 1);
  
      if (A[mid] < 0) {
        left = mid + 1;
      } else if (A[mid] > 0) {
        right = mid;
      } else {
        left = right = mid
        break;
      }
    }
    --left;
    while (left >= 0 || right < len) {
      if (right >= len || (left >= 0 && -A[left] < A[right])) {
        resArr.push(A[left] ** 2);
        --left;
      } else {
        resArr.push(A[right] ** 2);
        ++right;
      }
    }
  
    return resArr;
  };
  