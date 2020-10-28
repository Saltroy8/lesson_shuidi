var uniqueOccurrences = function(arr) {
    let len = arr.length,
      map = new Map(),
      left = 0,
      right = 0
  
    arr.sort((a, b) => a - b)
  
    while (left < len) {
      // 统计相等的相邻元素数量
      while (right < len && arr[right] == arr[left]) right++
      const num = right - left
      // 数量相同返回false
      if (map.has(num)) return false
      map.set(num, right)
      left = right
    }
    return true
  }
