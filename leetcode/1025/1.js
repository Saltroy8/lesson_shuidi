/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
    return get_num(N, false)
  
    function get_num(N, flag) {
      if (N < 2) return flag
      let x = 1
      while (N > x) {
        if (N % x === 0) {
          return get_num(N - x, !flag)
        } else {
          x++
        }
      }
    }
  }
