Here is a JavaScript solution for merging overlapping intervals in a list:

```javascript
function mergeIntervals(intervals) {
    if (!intervals.length) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    var prev = intervals[0];
    var res = [prev];
    for (var curr of intervals) {
        if (curr[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], curr[1]);
        } else {
            res.push(curr);
            prev = curr;
        }
    }
    return res;
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]));
console.log(mergeIntervals([[1,4],[4,5]]));
```

This console application sorts the intervals by their starting times. Then it iterates over the sorted intervals, and if the current interval begins before the previous one ends, the two are merged. Otherwise, the current interval is added to the result list.