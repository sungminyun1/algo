const input = `6 5
1 2
2 5
5 1
3 4
4 6`.split('\n').map(val=>val.split(' ').map(Number));

// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(val=>val.split(' ').map(Number));

const [N,M] = input.shift();

main(N,M,input);

function main(N,M,Arr){
    let count = 0;
    let graph = [0];
    let visited = new Array(N+1).fill(0)
    visited[0] = 1;
    for(let i =1; i<=N; i++){
        graph[i] = []
    }
    for(let i =0; i<M; i++){
        const [from,to] = Arr[i];
        graph[from].push(to);
        graph[to].push(from);
    }

    const dfs = (now) =>{
        visited[now] = 1;
        for(let item of graph[now]){
            if(!visited[item]){
                dfs(item)
            }
        }
    }
    for(let i =1; i<=N; i++){
        if(!visited[i]){
            count++
            dfs(i)
        }
    }

    console.log(count)
}