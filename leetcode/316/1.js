/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    // 创建一个 map 来存储每个字符出现的个数
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
      let item = s[i]
      if (map.has(item)) {
        map.set(item, map.get(item) + 1)
      } else {
        map.set(item, 1)
      }
    }
    // 维护一个栈 stack 来按顺序存储字典序最小的字符
    let stack = []
    for (let i = 0; i < s.length; i++) {
      let char = s[i]
      map.set(char, map.get(char) - 1) // map 计数减 1
      // 如果当前栈中没有包含此字符，则需要把 char 加入 satack 中
      // 但是加入之前需要判断是否栈中存在比 char 字典序更大的元素，存在则需要判断是否要删除（弹出）
      // 怎么判断是否要删除栈中的元素 stack[j] 呢？
      // 除了满足比 char 字典序大之外，还要判断后续 s 中还能再遍历到与 stack[j] 相同的字符，不然删了就没了...
      if (stack.includes(char) === false) { 
          let j = stack.length
          // 遍历栈，判断栈中是否有比 char 更大的字母，并且字符串 s 中还有此相同字符（stack[j]）
          // 有则弹出（删除），保证字典序
          while(j-- && stack[j] > char && map.get(stack[j])) {
            stack.pop()
          }
          stack.push(char) // 将 char 入栈
      }
    }
    return stack.join('')
  };
 