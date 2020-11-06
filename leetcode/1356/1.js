function sortByBits(arr) {
    function countBits(n) {
      let count = 0;
      while (n != 0) {
        count += n & 1;
        n >>= 1;
      }
      return count;
    }
    return arr.sort((a, b) => {
      return countBits(a) - countBits(b) || a - b;
    });
  }
