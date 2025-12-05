import fs = require('fs');

const data = fs.readFileSync('./src/5/input.txt', 'utf8')
    .split('\r\n\r\n');

const ranges = data[0]
    ?.split('\r\n')
    .map(range => range.split('-').map(Number));

const freshIngredientIds = data[1]
    ?.split('\r\n')
    .map(Number)
    .filter(id => ranges?.some(range => id >= range[0]! && id <= range[1]!));


console.log(freshIngredientIds?.length);