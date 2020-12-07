var matrixScore = function(A) {
    for (var i = 0, nums1 = new Uint8Array(A[0].length); i < A.length; i++) 
        for (var j = A[0].length; j--;) {
            if (A[i][0] === 0) A[i][j] = 1 - A[i][j]
            if (A[i][j] === 1) nums1[j]++
        }
    for (var j = 0; j < A[0].length; j++)
        if (nums1[j] < A.length - nums1[j]) 
            for (var i = 0; i < A.length; i++)
                A[i][j] = 1 - A[i][j]
    return A.reduce((sum, v) => sum + Number('0b' + v.join('')), 0)
};
