var countPrimes = function(n) {
    for(var i = 2, primes = [], isPrime = new Int8Array(n).fill(1); i < n; i++) {
        if (isPrime[i]) primes.push(i)
        for (var j = 0, t; j < primes.length && (t = i * primes[j]) < n; j++) {
            isPrime[t] = 0
            if (i % primes[j] === 0) break
        }
    }
    return primes.length
};
