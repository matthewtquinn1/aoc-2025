import fs = require('fs');

const sortedRanges = fs.readFileSync('./src/5/input.txt', 'utf8')
    .split('\r\n\r\n')[0]
    ?.split('\r\n')
    .map(range => range.split('-').map(Number))
    .sort((a, b) => a[0]! - b[0]!)!;

const mergedRanges = [sortedRanges[0]];
for (let i = 1; i < sortedRanges.length; i++) {

    const currentStart = sortedRanges[i]![0]!;
    const currentEnd = sortedRanges[i]![1]!;
    
    // Grab the last one merged.
    const lastMergedEnd = mergedRanges![mergedRanges.length - 1]![1]!;

    // Did this one start before the other one ended?
    if (currentStart <= lastMergedEnd){
        mergedRanges[mergedRanges.length - 1]![1] = Math.max(lastMergedEnd, currentEnd);
        continue;
    }

    // Did this one start after the other one ended?
    mergedRanges.push(sortedRanges[i]);
}

let total = 0;
for (const range of mergedRanges){
    total += range![1]! - range![0]! + 1;
}

console.log(total);