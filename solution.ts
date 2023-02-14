Here is a TypeScript solution for merging overlapping intervals in a list:

```typescript
class Interval {
    start: number;
    end: number;

    constructor(start: number, end: number) {
        this.start = start;
        this.end = end;
    }
}

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

let intervals: Interval[] = [new Interval(1, 3), new Interval(2, 6), new Interval(8, 10), new Interval(15, 18)];
let mergedIntervals: Interval[] = mergeIntervals(intervals);

for (let interval of mergedIntervals) {
    console.log(`[${interval.start}, ${interval.end}]`);
}
```

This TypeScript program defines a class `Interval` to represent an interval with a start and end. The `mergeIntervals` function takes an array of `Interval` objects, sorts them by their start times, and then iterates through them, merging any that overlap. The merged intervals are added to a new array, which is returned at the end. The program then creates an array of intervals, merges them, and prints out the merged intervals.