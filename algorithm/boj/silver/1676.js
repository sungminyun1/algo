const input = +`100`.toString().trim()
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(val => +val);
main(input)
function main(input){
    let answer = 0;

  for (let i = 5; i <= n; i *= 5) {
    answer += Math.floor(n / i);
  }

  console.log(answer);
}