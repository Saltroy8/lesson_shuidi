var findMinArrowShots = function(points) {
    points.sort((a, b) => a[1] - b[1]);
    
    let count = 0;
    let i = 0;
    while (i < points.length) {
        const right = points[i][1];
        i++;
        while (i < points.length && points[i][0] <= right) {
            i++
        }
        count++;
    }
    return count;
};
