/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const number = parseInt(str, 10);
    const Max = Math.pow(2, 31) - 1;
    const Min = Math.pow(-2, 31);
    if (isNaN(number)) {
        return 0;
    }
    if (number < Min || number > Max) {
        return number < 0 ? Min : Max;
    }
    return number;
};