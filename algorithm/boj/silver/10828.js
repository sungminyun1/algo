const input = `7
pop
top
push 123
top
pop
top
pop`.split('\n')
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
const stack = [];
const result = [];
for(let i =1; i<input.length; i++){
    const [method,val] = input[i].split(' ');
    switch(method){
        case 'push' : 
            stack.push(val);
            break;
        case 'pop':
            result.push(stack.length ? stack.pop() : -1);
            break;
        case 'size':
            result.push(stack.length)
            break;
        case 'empty':
            result.push(stack.length? 0 : 1)
            break;
        case 'top' :
            result.push(stack.length? stack[stack.length-1] : -1)
            break;
    }
}
console.log(result.join('\n'))