var largestPerimeter = function(A) {
    A.sort((a, b) => b - a)
    for (var i = 0; i < A.length - 2; i++)
        for (var j = i + 2; j < A.length; j++)
            if (isTriangle(A[i], A[i + 1], A[j]))
            return A[i] + A[i + 1] + A[j]
    return 0
};
var isTriangle = (a, b, c) => {
    return a + b > c && a + c > b && b + c > a
}
