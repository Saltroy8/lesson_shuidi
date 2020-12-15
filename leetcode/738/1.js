var monotoneIncreasingDigits = function(N) {
    for (var n = N + 1; n--;) {
        let find = true
        for(let i = length(N); i-- > 1;) {
            if (digit(n, i - 1) < digit(n, i)) {
                find = false
                break
            }
        }
        if (find) return n
    }
};
var length = N => Math.ceil(Math.log(N + 1) / Math.LN10)
var digit = (N, i) => (N / Math.pow(10, i) | 0) % 10
