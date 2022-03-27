// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
// const input = `5 5
// 1 3
// 1 4
// 4 5
// 4 3
// 3 2`.toString().trim().split('\n');
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
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
            graph[a] = [''+b];
        }else{
            graph[a].push(''+b);
        }

        if(graph[b] === undefined){
            graph[b] = [''+a];
        }else{
            graph[b].push(''+a);
        }
    }
    const bfs = (start) =>{
        let needVisit = [[start,0]];
        let visited = [];
        let result = 0;
        while(needVisit.length){
            let now = needVisit.shift();
            if(visited.includes(now[0])){
                continue;
            }
            visited.push(now[0]);
            result += now[1];
            for(let i =0; i<graph[now[0]].length; i++){
                if(!visited.includes(graph[now[0]][i])){
                    needVisit.push([graph[now[0]][i],now[1]+1])
                }
            }
        }
        return result
    }

    let keys = Object.keys(graph);
    let res = [-1,Infinity];
    for(let i =0; i<keys.length; i++){
        let count = bfs(keys[i]);
        if(count < res[1]){
            res = [keys[i],count]
        }
    }

    console.log(res[0])


}

