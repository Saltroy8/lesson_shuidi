/**
 * 
 * @param {string} s
 * @return {boolean} 
 */

var isValid = function(s) {
    if (!s || s.length <1) return true;
    var n = s.length;
    const statck = [];
    for (var i = 0; i < n; i++) {
        const c = s[i];
        // console.log(c);
        if (c == '(') {
            statck.push(c);

        } else {
            if(statck.length < 1){
                return false
            }
            statck.pop();
        }
    }
    return statck.length > 0? false:true;
}

console.log(isValid('()'));