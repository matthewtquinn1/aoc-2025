import fs = require('fs');

const answer = fs.readFileSync('./src/3/input.txt', 'utf8')
    .trim()
    .split('\r')
    .reduce((total, line) => {
        const numbers = line.split('').map(Number);
        
        let winningCombination = 0;
        for (let i = 0; i < numbers.length; i++) {
            for (let j = i + 1; j <= numbers.length; j++) {
                const proposedCombination = Number(`${numbers[i]}${numbers[j]}`);
                if (proposedCombination > winningCombination) {
                    winningCombination = proposedCombination;
                }
            }
        }

        return total + winningCombination;
    }, 0);

console.log(answer);
