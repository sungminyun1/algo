function main(M,N,arr){
    let board = [];

    for(let i =0; i<N; i++){
        board.push(new Array(M).fill(0));
    }

    for(let i =0; i<arr.length; i++){
        let col = arr[i][0];
        let row = arr[i][1];
        board[row][col] = 1;
    }
    
    let direction = [[1,0],[-1,0],[0,1],[0,-1]];
    let needVisit = [];
    let visited = [];
    let count = 0;
    while(visited.length !== arr.length){
        if(needVisit.length === 0){
            count++
            for(let i = 0; i<arr.length; i++){
                if(board[arr[i][0]][arr[i][1]] === 1){
                    needVisit.push(arr[i]);
                    break;
                }
            }
        }
        let now = needVisit.shift();
        let col = now[0];
        let row = now[1];
        board[row][col] = 2;
        visited.push(now);

        for(let i = 0; i<direction.length; i++){
            let nCol = col + direction[i][0];
            let nRow = row + direction[i][1];
            if(nCol >= 0 && nCol < M && nRow >= 0 && nRow < N){
                if(board[nRow][nCol] === 1){
                    needVisit.push([nCol,nRow]);
                }
            }
        }
    }

    console.log(count);
}

// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = `2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5`.toString().trim().split('\n');
for(let i = 1; i<input.length; i++){
    let tmp = input[i].split(' ')
    if(tmp.length > 2){
        let M = Number(tmp[0]);
        let N = Number(tmp[1]);
        let count = Number(tmp[2]);
        let arr = []
        for(let j = 0; j<count; j++){
            i++;
            arr.push([+input[i][0],+input[i][2]]);
        }
        main(M,N,arr);
    }
}
//main(input)
//main(5,3,['0 2','1 2','2 2','3 2','4 2','4 0'])
