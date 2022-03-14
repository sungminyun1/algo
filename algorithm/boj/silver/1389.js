// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = `5 5
1 3
1 4
4 5
4 3
3 2`.toString().trim().split('\n');
let arr = [];
for(let i =1; i<input.length; i++){
    let tmp = input[i].split(' ');
    arr.push([+tmp[0], +tmp[1]]);
}
main(arr);

function main(arr){
    let graph = {};
    for(let i =0; i<arr.length; i++){
        let a= arr[i][0];
        let b= arr[i][1];
        if(graph[a] === undefined){
            graph[a] = [b];
        }else{
            graph[a].push(b);
        }

        if(graph[b] === undefined){
            graph[b] = [a];
        }else{
            graph[b].push(a);
        }
    }
    let count = 0;
    const bfs = (now,visit,long) =>{
        visit.push(now);
        count +=long
        for(let i =0; i<graph[now].length; i++){
            if(!visit.includes(''+graph[now][i])){
                bfs(''+graph[now][i],visit,long+1);
            }
        }
    }

    let keys = Object.keys(graph);
    console.log(keys)
    for(let i =0; i<keys.length; i++){
        count = 0;
        bfs(keys[i],[],0);
        console.log(count)
    }
}

