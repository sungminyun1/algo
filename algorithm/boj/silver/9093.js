const input = `2
I am happy today
We want to win the first prize`.split('\n');

// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
for(let i =1; i<input.length; i++){
    console.log(input[i].split(' ').map(val=>val.split('').reverse().join('')).join(' '))
}