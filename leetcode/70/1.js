var climbStairs = (n) => {
    let prev = 1
    let cur = 1
    for (let i = 2; i < n + 1; i++) {
      let temp = cur   
      cur = prev + cur
      prev = temp    
    }
    return cur
  }
  