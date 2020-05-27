var subarraysDivByK = (A, K) => {
    let map = new Array(K).fill(0)
    map[0] = 1 
    let preSumModK = 0
    let count = 0
    for (let i = 0; i < A.length; i++) {
      preSumModK = (preSumModK + A[i]) % K
      if (preSumModK < 0) preSumModK += K
      count += map[preSumModK] 
      map[preSumModK]++ 
    }
    return count
  }
  