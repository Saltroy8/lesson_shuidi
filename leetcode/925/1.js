const isLongPressedName = (name, typed) => {
    let i = 0;
    for (let j = 0; j < typed.length; j++) {
      if (i < name.length && name[i] == typed[j]) { // i 和 j 都步进1
        i++;
      } else if (i - 1 >= 0 && typed[j] == name[i - 1]) { // i - 1 >= 0代表name[i - 1]存在
        // 当前typed[j]是长按出来的，它右边可能还有长按出来的，只是j++
      } else { // name[i - 1]不存在，或 typed[j] != name[i - 1]，键入错误，直接返回false
        return false;
      }
    }
    if (i > name.length - 1) { // 遍历结束，如果i越界了，说明i的字符也考察完了，返回true
      return true;
    }
    return false; // i 没越界，说明还有别的字符未匹配，返回false
  };
