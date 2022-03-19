// const input = `5 3 2
// 0 0 0 0 0
// 0 0 0 0 0
// 0 0 0 0 0
// 0 0 0 0 0
// 0 0 1 0 0
// 0 0 0 0 0`.toString().trim().split('\n')
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
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
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
    let needVisit = [];
    const len = N*H;
    let count = 0;
    for(let i =0; i<len; i++){
        for(let j =0; j<M; j++){
            if(Arr[i][j] === 1){
                needVisit.push([i,j])
                count++;
            }else if(Arr[i][j] === -1){
                count++;
            }
        }
    }
    let day = 0;
    while(needVisit[0]){
        let nextDay = []
        let nowlen = needVisit.length;
        for(let i =0; i<nowlen; i++){
            let [row,col] = needVisit.shift();
            for(let i =0; i<6; i++){
                let nRow = row + direction[i][0];
                let nCol = col + direction[i][1];
                if(nRow >= 0 && nRow < len && nCol >= 0 && nCol < M){
                    if(Arr[nRow][nCol] === 0 ){
                        Arr[nRow][nCol] = 1;
                        count++;
                        nextDay.push([nRow,nCol]);
                    }
                }
            }
        }
        day++;
        needVisit = nextDay;
    }
    // let complete = true;
    // for(let i =0; i<len; i++){
    //     for(let j =0; j<M; j++){
    //         if(Arr[i][j] === 0){
    //             complete = false;
    //             break;
    //         }
    //     }
    //     if(!complete){
    //         break;
    //     }
    // }

    if(count === M*N*H){
        console.log(day-1)
    }else{
        console.log(-1)
    }
}