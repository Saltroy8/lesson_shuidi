/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const set = new Set();
    for(const s of J) {
        set.add(s);
    }
    let ans = 0;
    for(const s of S) {
        if(set.has(s)){
            ans++;
        }
    }
    return ans;
};
