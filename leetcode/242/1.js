var isAnagram = function (s, t) {
    const hash = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
        hash[s.charCodeAt(i) - aCode]++;
    }
    for (let i = 0; i < t.length; i++) {
        if (hash[t.charCodeAt(i) - aCode] == 0) {
            return false;
        }
        hash[t.charCodeAt(i) - aCode]--;
    }
    for (const v of hash) {
        if (v != 0) {
            return false;
        }
    }
    return true;
};
