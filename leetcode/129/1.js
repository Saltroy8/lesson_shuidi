var longestConsecutive = (nums) => {
    if (nums.length === 0) return 0
    nums.sort((a, b) => a - b)
    let max = 1
    let count = 1
    for (let i = 0; i < nums.length - 1; i++) {
      let cur = i, next = i + 1
      if (nums[cur] === nums[next]) continue 
      if (nums[cur] + 1 === nums[next]) { 
        count++
      } else { 
        count = 1
      }
      max = Math.max(max, count)
    }
    return max
  }
  