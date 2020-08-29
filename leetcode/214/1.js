const isPalindrome = (s) => {
    let i = 0, j = s.length - 1;
    while (i < j) {
      if (s[i] !== s[j]) return false;
      i++;
      j--;
    }
    return true;
  };
  const shortestPalindrome = (s) => {
    const len = s.length;
    for (let i = len; i >= 0; i--) {
      const prefix = s.substring(0, i); // 前缀部分，从大的开始考察
      if (isPalindrome(prefix)) {       // 一旦是回文就准备return结果
        const add = s.substring(i).split('').reverse().join('');
        return add + s;
      }
    }
  };
