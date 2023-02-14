```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Interval {
    int start, end;
};

bool intervalCompare(Interval i1, Interval i2) {
    return (i1.start < i2.start);
}

vector<Interval> mergeIntervals(vector<Interval>& intervals) {
    sort(intervals.begin(), intervals.end(), intervalCompare);
    vector<Interval> mergedIntervals;
    Interval temp = intervals[0];
    for (int i = 1; i < intervals.size(); i++) {
        if (temp.end >= intervals[i].start) {
            temp.end = max(temp.end, intervals[i].end);
        } else {
            mergedIntervals.push_back(temp);
            temp = intervals[i];
        }
    }
    mergedIntervals.push_back(temp);
    return mergedIntervals;
}

int main() {
    vector<Interval> intervals = { {6, 8}, {1, 9}, {2, 4}, {4, 7} };
    vector<Interval> mergedIntervals = mergeIntervals(intervals);
    for (int i = 0; i < mergedIntervals.size(); i++) {
        cout << "[" << mergedIntervals[i].start << ", " << mergedIntervals[i].end << "] ";
    }
    return 0;
}
```