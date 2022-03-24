// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(val => +val);
// const input = `1000 1 1000
// 999 1000`.toString().trim().split('\n');
const readline = require('readline');
const std = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})
let V;
let arr = [];
std.on('line',(input) =>{
    input.trim().split(' ').map(val => +val);
    V = +input[0].split(' ')[2];
    let arr = [];
    for(let i =1; i<input.length; i++){
        let tmp = input[i].split(' ')
        arr.push([+tmp[0], +tmp[1]]);
    }
    
}).on('close',()=>{
    main(arr,V);
})

// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(val => +val);
// let V = +input[0].split(' ')[2];
// let arr = [];
// for(let i =1; i<input.length; i++){
//     let tmp = input[i].split(' ')
//     arr.push([+tmp[0], +tmp[1]]);
// }
// main(arr,V);


function main(arr,V){
    const graph = {};
    for(let i =0; i<arr.length; i++){
        if(graph[arr[i][0]]){
            graph[arr[i][0]].push(arr[i][1]);
        }else{
            graph[arr[i][0]] = [arr[i][1]]
        }

        if(graph[arr[i][1]]){
            graph[arr[i][1]].push(arr[i][0]);
        }else{
            graph[arr[i][1]] = [arr[i][0]]
        }
    }

    let visited = [];
    let needVisited = [];

    //DFS
    needVisited.push(V);
    while(needVisited.length){
        let now = needVisited.pop();
        if(visited.includes(now)){
            continue;
        }
        visited.push(now);
        let candi = graph[now].sort((a,b)=>b-a);
        needVisited.push(...candi);
    }
    let DFS_res = visited.reduce((prev,now)=>{
        return prev + ` ${now}`
    },'')
    console.log(DFS_res.trim())

    visited = [];
    needVisited = [];

    //BFS
    needVisited.push(V);
    while(needVisited.length){
        let now = needVisited.shift();
        if(visited.includes(now)){
            continue;
        }
        visited.push(now);
        let candi = graph[now].sort((a,b)=>a-b);
        needVisited.push(...candi);
    }

    let BFS_res = visited.reduce((prev,now)=>{
        return prev + ` ${now}`
    },'')
    console.log(BFS_res.trim())
}