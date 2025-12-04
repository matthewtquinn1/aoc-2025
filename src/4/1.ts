import fs = require('fs');

const rollStorage = fs.readFileSync('./src/4/input.txt', 'utf8')
    .split('\r\n')
    .map(line => line.split(''));

const maxAdjacentRolls = 3;
const paperRoll = "@";
let availableRolls = 0;

for (let i = 0; i < rollStorage.length; i++){
    const row = rollStorage[i]!;
    for (let j = 0; j < row.length; j++){

        // We only check paper rolls, not empty spots.
        if (row[j] !== paperRoll){
            continue;
        }

        let adjacentRolls = 0;

        // Check left
        if (row[j - 1] === paperRoll){
            adjacentRolls++;
        }

        // Check right
        if (row[j + 1] === paperRoll){
            adjacentRolls++;
        }

        // Check above
        if (rollStorage[i - 1] !== undefined && rollStorage[i - 1]![j] === paperRoll){
            adjacentRolls++;
        }

        // Check upper left
        if (rollStorage[i - 1] !== undefined && rollStorage[i - 1]![j - 1] === paperRoll){
            adjacentRolls++;
        }

        // Check upper right
        if (rollStorage[i - 1] !== undefined && rollStorage[i - 1]![j + 1] === paperRoll){
            adjacentRolls++;
        }

        // Check below
        if (rollStorage[i + 1] !== undefined && rollStorage[i + 1]![j] === paperRoll){
            adjacentRolls++;
        }

        // Check lower left
        if (rollStorage[i + 1] !== undefined && rollStorage[i + 1]![j - 1] === paperRoll){
            adjacentRolls++;
        }

        // Check lower right
        if (rollStorage[i + 1] !== undefined && rollStorage[i + 1]![j + 1] === paperRoll){
            adjacentRolls++;
        }

        // Can be safely removed.
        if (adjacentRolls <= maxAdjacentRolls){
            availableRolls++;
        }
    }
}

console.log(availableRolls);