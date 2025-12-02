const fs = require('fs');
const data = fs.readFileSync('./input.txt', 'utf8');

const startingPosition = 50;
let currentPosition = startingPosition;
let totalPassesOfZero = 0;
const limit = 100;

for (const line of data.split('\n')) {
    const direction = line[0];
    const moveBy = parseInt(line.slice(1), 10);

    if (direction === 'L') {
        const newPos = currentPosition - moveBy;
        
        const passes = Math.floor((currentPosition - 1) / limit) - Math.floor((newPos - 1) / limit);
        totalPassesOfZero += passes;
        
        currentPosition = newPos;
    }
    else if (direction === 'R') {
        const newPosition = currentPosition + moveBy;

        const totalTurns = Math.floor(newPosition / limit) - Math.floor(currentPosition / limit);
        totalPassesOfZero += totalTurns;
        
        currentPosition = newPosition;
    }
}

console.log('Answer', totalPassesOfZero);
