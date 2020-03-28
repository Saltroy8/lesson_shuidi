/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    var getgdc = (a, b) => {  
        if(b === 0)  
        return a;   
        return getgdc (b, a % b);
        }
    var hash = deck.reduce((pre, num) => {   
         if(!pre[num]) {
             pre[num] = 1
             }else{
                 pre[num]++
                 }
                 return pre;
                 }, {})
    var numCount = Object.values(hash)    
    var min = numCount.sort((a, b) => a-b)[0];       
    if (min < 2)
    return false; 
    while (numCount.length > 1) {
        const first = numCount.shift()
        const second = numCount.shift()
        const gdc = getgdc(first, second)
        if(gdc===1)
        return false;
        else 
        numCount.unshift(gdc);
        }
        return true
};