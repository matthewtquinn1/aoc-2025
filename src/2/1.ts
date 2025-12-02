import fs = require('fs');

// Determines whether the number contains a duplicate of itself e.g. 1010, or 456456.
const isInvalid = (num: number): boolean => {
    const numAsString = num.toString();
    const middle = numAsString.length / 2;

    const firstHalf = numAsString.slice(0, middle);
    const lastHalf = numAsString.slice(middle);

    if (firstHalf === lastHalf) {
        return true;
    }

    return false;
}

const data = fs.readFileSync('./src/2/input.txt', 'utf8');

const answer = data
    .split(',')
    .reduce((totalSum, range) => {
        const [start, end] = range.split('-').map(Number) as [number, number];

        // Sum any invalid numbers found in the range.
        let sumOfInvalidIds = 0;
        for (let i = start; i <= end; i++) {
            if (isInvalid(i)) {
                sumOfInvalidIds += i;
            }
        }

        return totalSum + sumOfInvalidIds;
    }, 0);

console.log('Answer', answer);