// Get the input.
const fs = require('fs');
const data = fs.readFileSync('./input.txt', 'utf8');

function movePosition(newPosition) {
    const maxPositions = 100;
    return ((newPosition % maxPositions) + maxPositions) % maxPositions;
}

const startingPosition = 50;
let currentPosition = startingPosition;
let totalStopsOnZero = 0;

for (const line of data.split('\n')) {
    const direction = line[0];

    currentPosition = direction === 'L'
        ? movePosition(currentPosition - parseInt(line.slice(1), 10))
        : movePosition(currentPosition + parseInt(line.slice(1), 10));

    if (currentPosition === 0) {
        totalStopsOnZero++; 
    }
}

console.log('Answer', totalStopsOnZero);
