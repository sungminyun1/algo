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
5 5`.split('\n').map(val=>val.split(' ').map(Number));
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
            for(let i =0; i<direction.length; i++){
                let next_row = row + direction[i][0];
                let next_col = col + direction[i][1];
                if(row >= 0 && row < M && col >=0 && col < N && valid(next_row,next_col) >=0){

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
}
