const input = `3
((
))
())(()`.split('\n');

// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const result = [];

const check = (arr) =>{
    let stack = 0;

    for(let i =0; i<arr.length; i++){
        if(arr[i] === '('){
            stack++;
        }else if(arr[i] === ')'){
            if(stack <= 0){
                return 'NO';
            }else{
                stack--;
            }
        }
    }

    return stack === 0? 'YES' : 'NO';
}
for(let i =1; i<input.length; i++){
    result.push(check(input[i].split('')));
}

console.log(result.join('\n'))