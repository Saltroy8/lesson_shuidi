const isSubsequence = (subStr, str) => {
    if (subStr.length == 0) return true;
    let i = 0;
    while (i < str.length) {
      if (subStr[0] == str[i]) {
        const rest_sub = subStr.substring(1);     // 剩余subStr
        const rest_str = str.substring(i + 1);    // 剩余str
        return isSubsequence(rest_sub, rest_str); // 递归判断
      }
      i++;
    }
    return false;
  };
 