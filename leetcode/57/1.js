var insert = function(intervals, newInterval) {
    for(var i = intervals.length; i-- > 0;)
        if (intervals[i][1] < newInterval[0]) 
            intervals.splice(i + 1, 0, newInterval), i = -2
        else if (intervals[i][1] >= newInterval[0] && intervals[i][0] <= newInterval[1]) 
            newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])], intervals.splice(i, 1)
    if (i === -1) intervals.unshift(newInterval)
    return intervals
}

