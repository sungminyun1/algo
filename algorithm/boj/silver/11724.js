const input = `6 8
1 2
2 5
5 1
3 4
4 6
5 4
2 4
2 3`.split('\n');
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let graph = {};
let n = +input[0].split(' ')[0]
for(let i =1; i<input.length; i++){
    let [a,b] = input[i].split(' ');
    if(graph[a]){
        graph[a].push(b);
    }else{
        graph[a] = [b];
    }
    if(graph[b]){
        graph[b].push(a);
    }else{
        graph[b] = [a];
    }
}
main(n,graph)
function main(n,graph){
    let visited = [];
    let count =0;

    const findNext = () =>{
        for(let i of Object.keys(graph)){
            if(!visited.includes(i)){
                return i
            }
        }
        return 'done';
    }
    while(true){
        let next = findNext();
        if(next === 'done'){
            break;
        }
        let needVisit = [...graph[next]];
        while(needVisit.length){
            let now = needVisit.shift();
            if(visited.includes(now)){
                continue;
            }
            visited.push(now);
            needVisit.push(...graph[now]);
        }
        count++
    }

    console.log(count)
}