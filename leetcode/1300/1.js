/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
    let len = arr.length
    let min = Math.min(...arr, ~~(target / len))
    let max = Math.max(...arr)
    let last = 0
    while (min < max) {  

      let sum = arr.reduce((a, b) => a + Math.min(b, min), 0)
      if (sum < target) {  
        min = min < max ? min + 1 : max
        last = sum
      } else {
        if (target - last <= sum - target) {
          --min
        }
        return min
      }
    }
    return min
  };
