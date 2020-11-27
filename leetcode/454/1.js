var fourSumCount = function(A, B, C, D) {
    let sumMap = new Map()
    for(let a of A){
        for(let b of B){
            const sum = a+b
            sumMap.has(sum) ? sumMap.set(sum,sumMap.get(sum)+1) : sumMap.set(sum,1)
        }
    }
    let result = 0
    for(let c of C){
        for(let d of D){
            const sum = -(c+d)
            (sumMap.has(sum) && (result+=sumMap.get(sum))
        }
    }
    return result
};
