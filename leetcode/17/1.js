/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length == 0) return []; // 如果为空就直接返回
    let res = [];
    // 建立字母谱
    let map = {
        '2':['a','b','c'],
        '3':['d','e','f'],
        '4':['g','h','i'],
        '5':['j','k','l'],
        '6':['m','n','o'],
        '7':['p','q','r','s'],
        '8':['t','u','v'],
        '9':['w','x','y','z']
    }
    allLetter(0, '');
    return res
    function allLetter(st, str){
        if(st == digits.length){ // 如果达到规定长度，压入数组后退出
            res.push(str);
            return
        }
        for(let i=0;i<map[digits[st]].length;i++){
            let tmp = str; // 记录初始状态
            str += map[digits[st]][i];
            allLetter(st+1, str);
            str = tmp; // 恢复初始状态
        }
    }
};
