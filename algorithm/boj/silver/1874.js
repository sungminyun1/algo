const input = `5
1
2
5
3
4`.split('\n').map(Number);
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number);
let now = 1;
const stack = [];
let result = [];
let flag = true;
for(let i = 1; i<input.length; i++){
    if(now <= input[i]){
        while(now<=input[i]){
            stack.push(now);
            now++;
            result.push('+');
        }
        stack.pop();
        result.push('-');
    }else{
        let now = stack.pop();
        if(now !== input[i]){
            console.log('NO');
            flag = false;
            break;
        }else{
            result.push('-')
        }
    }
}

if(flag){
    console.log(result.join('\n'))
}