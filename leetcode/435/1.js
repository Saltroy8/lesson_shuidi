var eraseOverlapIntervals = function(intervals) {
    const n = intervals.length
    if (n === 0) return 0
    intervals.sort((a, b) => a[1] - b[1])
    let r = intervals[0][1], count = 1, i = 0
    while(++i < n)
        if (intervals[i][0] >= r) {
            count++
            r = intervals[i][1]
        } // else { 重复区间数++ }
    return n - count
};
