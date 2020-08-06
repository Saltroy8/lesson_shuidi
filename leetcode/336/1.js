const isPalindrome = (str) => {             // 判断回文串的辅助函数
    let l = 0, r = str.length - 1;
    while (l < r) {
      if (str[l++] != str[r--]) return false; // 我很不想这么写，尽量一句话做一件事吧
    }
    return true;
  };
  const palindromePairs = (words) => {
    const reverseds = new Map();
    for (let i = 0; i < words.length; i++) {
      const reversed = words[i].split('').reverse().join(''); // 翻转后的单词
      reverseds.set(reversed, i);                             // 和它的索引，存入map
    }
    const res = [];
    for (let i = 0; i < words.length; i++) {
      const curWord = words[i];                  // 当前要拆分的单词
      for (let j = 0; j < curWord.length; j++) { // j指针来拆分它
        const left = curWord.substring(0, j);    // 左边部分
        const right = curWord.substring(j);      // 右边部分
        if (isPalindrome(left) && reverseds.has(right) && reverseds.get(right) !== i) {
          res.push([reverseds.get(right), i]); // 左边是回文，右边能找到翻转且不是自己
        }
        if (isPalindrome(right) && reverseds.has(left) && reverseds.get(left) !== i) {
          res.push([i, reverseds.get(left)]); // 右边是回文，左边能找到翻转且不是自己
        }
      }
    }
    return res;
  };
