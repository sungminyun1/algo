const input = `1   
3 3 7
0 0
0 1
0 2
1 0
1 2
2 0
2 2`.split('\n');
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
for(let j = 1; j<input.length;){
    let [M,N,X] = input[j].split(' ').map(val=>+val);
    j++;
    let arr = []
    for(let i = 0; i<X; i++,j++){
        arr.push(input[j].split(' ').map(val => +val))
    }
    main(M,N,arr)
}

function main(M,N,arr){
    let board = []
    for(let i = 0; i<M; i++){
        board.push(Array(N).fill(0))
    }
    for(let i =0; i<arr.length; i++){
        board[arr[i][0]][arr[i][1]] = 1;
    }
    let count = 0;

    const direction = [[1,0],[0,1],[,-1,0],[0,-1]];

    const find = (row,col) =>{
        board[row][col] = 2;
        for(let i =0; i<direction.length; i++){
            let nrow = row + direction[i][0];
            let ncol = col + direction[i][1];
            if(nrow >=0 && nrow < M && ncol >=0 && ncol < N && board[nrow][ncol] === 1){
                find(nrow,ncol)
            }
        }
    }
    for(let i =0; i<arr.length; i++){
        if(board[arr[i][0]][arr[i][1]] === 1){
            count++;
            find(arr[i][0],arr[i][1])
        }
    }
    console.log(count)
}
