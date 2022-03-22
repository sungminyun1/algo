// const input = `9
// 0 0 0 1 1 1 -1 -1 -1
// 0 0 0 1 1 1 -1 -1 -1
// 0 0 0 1 1 1 -1 -1 -1
// 1 1 1 0 0 0 0 0 0
// 1 1 1 0 0 0 0 0 0
// 1 1 1 0 0 0 0 0 0
// 0 1 -1 0 1 -1 0 1 -1
// 0 -1 1 0 1 -1 0 1 -1
// 0 1 -1 1 0 -1 0 1 -1`.split('\n');
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const N = +input.shift();
const Board = input.map((val,row)=>{
    return val.split(' ').map((val2, col)=> +val2)
})
main(N,Board)
function main(N,Board){
    let allZero = 0;
    let allOne = 0; 
    let allMinus = 0;

    const check = (srow,scol,size) =>{
        const type = Board[srow][scol];
        for(let i =srow; i<srow+size; i++){
            for(let j = scol; j<scol+size; j++){
                if(Board[i][j] !== type){
                    return false;
                }
            }
        }
        switch(type){
            case 0 : 
                allZero++;
                break;
            case 1 :
                allOne++;
                break;
            case -1 :
                allMinus++;
                break;
        }
        return true;
    }
    
    const go = (srow,scol,size) =>{
        if(check(srow,scol,size)){
            return;
        }

        let nsize = size/3;
        const starts = [
            [srow,scol],[srow,scol+nsize],[srow,scol+ (nsize*2)],
            [srow+nsize, scol],[srow+nsize, scol+nsize], [srow+nsize, scol+ (nsize*2)],
            [srow + (nsize*2), scol], [srow + (nsize*2), scol + nsize], [srow + (nsize*2), scol +(nsize*2)]
        ];
        for(let i of starts){
            go(i[0],i[1],nsize);
        }
    }

    go(0,0,N);

    console.log(allMinus);
    console.log(allZero);
    console.log(allOne);
}