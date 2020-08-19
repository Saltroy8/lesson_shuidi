const isPalindrome = (s) => {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
      if (s[i] != s[j]) return false;
      i++;
      j--;
    }
    return true;
  };
  
  const countSubstrings = (s) => {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      for (let j = i; j < s.length; j++) {
        if (isPalindrome(s.substring(i, j + 1))) {
          count++;
        }
      }
    }
    return count;
  };
  
