const input = `8
1 1 0 0 0 0 1 1
1 1 0 0 0 0 1 1
0 0 0 0 1 1 0 0
0 0 0 0 1 1 0 0
1 0 0 0 1 1 1 1
0 1 0 0 1 1 1 1
0 0 1 1 1 1 1 1
0 0 1 1 1 1 1 1`.split('\n').map(val=>val.split(' ').map(Number));
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(val=>val.split(' ').map(Number));

const [N] = input.shift();
main(N,input);

function main(N,Board){
    let white = 0;
    let blue = 0;

    const valid = (row,col,size) =>{
        let token = Board[row][col];
        for(let i =0; i<size; i++){
            for(let j =0; j<size; j++){
                if(Board[row+i][col+j] !== token) return false;
            }
        }

        if(token === 1){
            blue++
        }else{
            white++
        }
        return true;
    }

    const run = (row,col,size) =>{
        if(valid(row,col,size)){
            return;
        }
        let next_size = size/2;
        run(row,col,next_size);
        run(row+next_size,col,next_size);
        run(row,col+next_size,next_size);
        run(row+next_size,col+next_size,next_size);
    };

    run(0,0,N)

    console.log(white);
    console.log(blue)
}