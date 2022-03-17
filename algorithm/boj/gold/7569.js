const input = `5 3 2
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 1 0 0
0 0 0 0 0`.toString().trim().split('\n')
// let cube = [];
    // let layer = [];
    // for(let i =0; i<Arr.length; i++){
    //     layer.push(Arr[i]);
    //     if(i > 0 && (i+1)%N === 0){
    //         cube.push(layer);
    //         layer = [];
    //     }
    // }
    // console.log(cube);
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const M = +input[0].split(' ')[0]
const N = +input[0].split(' ')[1]
const H = +input[0].split(' ')[2]
let Arr = [];
for(let i =1; i<input.length; i++){
    Arr.push(input[i].split(' ').map(val => +val));
}
main(M,N,H,Arr)
function main(M,N,H,Arr){
    
    const direction = [[1,0],[-1,0],[0,1],[0,-1],[N,0],[-N,0]] //아래,위,오,왼,위층,아래층
    const needVisit = [];
    for(let i =0; i<Arr.length; i++){
        let idx = Arr[i].indexOf(1);
        if(idx >= 0){
            needVisit.push([i,idx])
        }
    }
    let day = 0;
    while(needVisit.length){
        let nexDay = []
        while(needVisit.length){
            let [row,col] = needVisit.shift();
            Arr[row][col] = 1;
            for(let i =0; i<direction.length; i++){
                let nRow = row + direction[i][0];
                let nCol = col + direction[i][1];
                if(nRow >= 0 && nRow < Arr.length && nCol >= 0 && nCol < M){
                    if(Arr[nRow][nCol] === 0 ){
                        Arr[nRow][nCol] = 3;
                        nexDay.push([nRow,nCol]);
                    }
                }
            }
        }
        day++;
        console.log(Arr)
        needVisit.push(...nexDay)
    }
    let complete = true;
    for(let i =0; i<Arr.length; i++){
        if(Arr[i].includes(0)){
            complete = false;
        }
    }

    if(complete){
        console.log(day-1)
    }else{
        console.log(-1)
    }
}