import fs = require('fs');

const invalidNumbers: number[] = [];

// Determines whether the number contains a duplicate of itself e.g. 1010, or 456456, 2985529855, 111111.
const isInvalid = (num: number): boolean => {
    const numAsString = num.toString();
    const numLength = numAsString.length;
    
    const factors = [];
    for (let i = 1; i <= numLength; i++) {
        if (numLength % i === 0) {
            factors.push(i);
        }
    }

    // Should split number into repeated sections e.g. 456456 => [ '456', '456' ].
    for (const factor of factors) {
        const regExpression = new RegExp(`.{1,${factor}}`, 'g');
        const factoredSections = numAsString.match(regExpression)!;
        if (factoredSections.length > 1 && factoredSections.every(section => section === factoredSections[0])) {
            invalidNumbers.push(num);
            return true;
        }
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

console.log('Invalid numbers', invalidNumbers); // Useful for testing.
console.log('Answer', answer);