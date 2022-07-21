const input = `5
1 3 2 -1
2 4 4 -1
3 1 2 4 3 -1
4 2 4 3 3 5 6 -1
5 4 6 -1`.split('\n');

// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const N = +input.shift();
const arr = input.map(val=>val.split(' ').map(Number))

const graph = [];
for(let i =0; i<=N; i++){
    graph.push([]);
}

for(let i =0; i<N; i++){
    let now = arr[i][0];
    for(let j = 1; j<arr[i].length-1;){
        let to = arr[i][j++];
        let len = arr[i][j++];
        graph[now].push([to,len])
    }
}

main(N,graph);


function main(N,Graph){
    let max = 0;
    const visited = [];
    const bfs = (start) =>{
        const needVisit = [[start,0]];
        

        while(needVisit.length){
            let [now,len] = needVisit.shift();
            visited[now] = true;
            if(max < len){
                max = len;
            }
            for(let node of Graph[now]){
                if(!visited[node[0]]){
                    needVisit.push([node[0],len+node[1]])
                }
            }
        }
    }

    for(let i =1; i<=N; i++){
        if(!visited[i]){
            bfs(i);
        }
        
    }
    console.log(max)
}