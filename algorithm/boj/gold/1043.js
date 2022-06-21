const input = `4 3
0
2 1 2
1 3
3 2 3 4`.split('\n').map(val => val.split(' ').map(Number));

// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(val => val.split(' ').map(Number));

const [people,party] = input.shift();
const [t_num,...t_people] = input.shift();

const graph = [0]
for(let i =0; i<people; i++){
    graph.push([])
}
for(let i =0; i<input.length; i++){
    for(let j = 1; j<input[i].length; j++){
        for(let k = j+1; k<input[i].length; k++){
            graph[input[i][j]].push(input[i][k]);
            graph[input[i][k]].push(input[i][j]);
        }
    }
}
const know = new Array(people+1).fill(false);

const find = (now) =>{
    if(know[now]){
        return
    }
    know[now] = true;
    for(let i=0; i<graph[now].length; i++){
        find(graph[now][i])
    }
}

for(let i =0; i<t_people.length; i++){
    find(t_people[i]);
}

let count = 0;

for(let i =0; i<input.length; i++){
    let flag = true;
    for(let j =1; j<input[i].length; j++){
        if(know[input[i][j]]){
            flag = false;
            break;
        }
    }
    if(flag){
        count++
    }
}

console.log(count)
