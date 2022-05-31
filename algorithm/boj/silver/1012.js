const input = `1
5 3 6
0 2
1 2
2 2
3 2
4 2
4 0`.split('\n').map(val=>val.split(' ').map(Number));
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(val=>val.split(' ').map(Number));

const cases = input.shift();
let k = 0;
for(let i =0; i<cases[0]; i++){

    const [M,N,K] = input[k++];
    const tmp = [];
    for(let j =0; j<K; j++){
        tmp.push(input[k++]);
    }
    main(M,N,K,tmp);
}

function main(M,N,K,Board){
    const visited = []
    let count = 0;

    const valid = (row,col) =>{
        for(let i=0; i<Board.length; i++){
            if(Board[i][0] === row && Board[i][1] === col){
                if(visited.includes(i)){
                    break;
                }
                visited.push(i)
                return i;
            }
        }
        return -1;
    }

    const find =([row,col]) =>{
        const needVisit = [[row,col]];
        const direction = [[1,0],[0,1],[-1,0],[0,-1]];

        while(needVisit.length){
            let [now_row,now_col] = needVisit.shift();
            for(let i =0; i<direction.length; i++){
                let next_row = now_row + direction[i][0];
                let next_col = now_col + direction[i][1];
                if(next_row >= 0 && next_row < M && next_col >=0 && next_col < N && valid(next_row,next_col) >=0){
                    needVisit.push([next_row,next_col]);
                }
            }
        }

    }

    for(let i =0; i<Board.length; i++){
        if(visited.includes(i)){
            continue;
        }
        count++;
        visited.push(i);
        find(Board[i]);
    }

    console.log(count)
}
