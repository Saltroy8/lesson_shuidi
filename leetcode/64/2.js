/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
    return Math.round(Math.exp(Math.log(n) + Math.log(n + 1) - Math.log(2)));
};