/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let res = sum(n)
    let obj = {}
    while(res != 1){
      if (res in obj) return false
      obj[res] = 1
      res = sum(res)
    }
    return true
}
function sum(n){
  n = n + ''
  let sum = 0
  for(let num of n){
    sum += num * num
  }
  return sum
}
