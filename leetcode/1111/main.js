/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    var depth = 0;
    return seq.split("").map((value, index) => {
        if (value === '(') {
            ++depth;
            return depth % 2;
        } else {
            let ans = depth % 2;
            --depth;
            return ans;
        }
    })
}