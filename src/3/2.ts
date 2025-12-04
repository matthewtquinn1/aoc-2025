import fs = require('fs');

const answer = fs.readFileSync('./src/3/input.txt', 'utf8')
    .trim()
    .split('\r\n')
    .reduce((total, line) => {
        const numbers = line.split('').map(Number);

        const desiredLength = 12;

        const stack: number[] = [];
        let deleteBudget = numbers.length - desiredLength;

        for (let i = 0; i < numbers.length; i++){
            const current = numbers[i]!;

            while (deleteBudget > 0 && stack.length > 0 && current > stack[stack.length - 1]!) {
                stack.pop();
                deleteBudget--;
            }

            stack.push(current);
        }

        if (stack.length > desiredLength){
            stack.splice(desiredLength);
        }

        return total + Number(stack.join(''));     
    }, 0);

console.log('Answer', answer);
