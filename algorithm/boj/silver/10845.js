const input = `15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front`.split('\n')
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const result = [];
const queue = []
for(let i =1; i<input.length; i++){
    const [comm,val] = input[i].split(' ');
    switch(comm){
        case 'push' : 
            queue.push(val);
            break;
        case 'pop' :
            if(queue.length){
                result.push(queue.shift());
            }else{
                result.push('-1');
            }
            break;
        case 'size':
            result.push(''+queue.length);
            break;
        case 'empty':
            result.push(queue.length?'0':'1');
            break;
        case 'front' : 
            result.push(queue[0]?queue[0]:'-1');
            break;
        case 'back' :
            result.push(queue.length? ''+queue[queue.length-1] : '-1')
            break;
    }
}

console.log(result.join('\n'))