var lastRemaining = function(n, m) {
    var a = 0;
    for (var i = 2; i <= n; i++) {
        a = (a + m) % i;
    }
    return a;
};