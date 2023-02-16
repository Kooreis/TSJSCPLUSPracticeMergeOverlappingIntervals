function mergeIntervals(intervals: Interval[]): Interval[] {
    if (intervals.length <= 1) {
        return intervals;
    }

    intervals.sort((a, b) => a.start - b.start);

    let result: Interval[] = [];
    let start = intervals[0].start;
    let end = intervals[0].end;

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i].start <= end) {
            end = Math.max(end, intervals[i].end);
        } else {
            result.push(new Interval(start, end));
            start = intervals[i].start;
            end = intervals[i].end;
        }
    }

    result.push(new Interval(start, end));

    return result;
}