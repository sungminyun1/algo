const input = `22
front
back
pop_front
pop_back
push_front 1
front
pop_back
push_back 2
back
pop_front
push_front 10
push_front 333
front
back
pop_back
pop_back
push_back 20
push_back 1234
front
back
pop_back
pop_back`.split('\n');
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const deq = [];
const result = [];

for(let i =1; i<input.length; i++){
    const [comm,val] = input[i].split(' ');
    switch(comm){
        case 'push_front':
            deq.unshift(val);
            break;
        case 'push_back':
            deq.push(val);
            break;
        case 'pop_front':
            let tmp = deq.shift()
            result.push(tmp?tmp:'-1');
            break;
        case 'pop_back':
            let tmp2 = deq.pop();
            result.push(tmp2?tmp2:'-1');
            break;
        case 'size':
            result.push(''+deq.length);
            break;
        case 'empty':
            result.push(!deq.length?'1':'0');
            break;
        case 'front':
            result.push(deq.length?deq[0]:'-1');
            break;
        case 'back':
            result.push(deq.length?deq[deq.length-1]:'-1');
            break;
    }
}

console.log(result.join('\n'))