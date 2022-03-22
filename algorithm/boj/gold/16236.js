const input = `6
5 4 3 2 3 4
4 3 2 3 4 5
3 2 9 5 6 6
2 1 2 3 4 5
3 2 1 6 5 4
6 6 6 6 6 6`.split('\n');
const N = +input.shift();
main(N,input);
function main(N,Arr){
    const prey = new Array(7).fill(0)
    const shark = {
        size : 2,
        eat : 0,
        point : []
    }
    let board = Arr.map((val,row) =>{
        return val.split(' ').map((val2, col) =>{
            val2 = +val2;
            if(0 < val2 && val2 <7){
                prey[val2]++;
            }else if(val2 === 9){
                shark.point = [row,col];
                return 0;
            }
            return val2;
        })
    })
    

    const done = () =>{
        for(let i = 1; i<shark.size; i++){
            if(prey[i] > 0){
                return false;
            }
        }
        return true;
    }
    let time = 0;
    //todo raider 탐색 순서 틀림
    const direction = [[-1,0],[0,-1],[0,1],[1,0]];
    const raider = (row,col)=>{
        const queue = [`${row} ${col}`];
        while(true){
            let [nrow, ncol] = queue.shift().split(' ').map(val =>+val);
            if(board[nrow][ncol] > 0 && board[nrow][ncol] < shark.size){
                time += Math.abs(row - nrow) + Math.abs(col - ncol);
                prey[board[nrow][ncol]]--;
                board[nrow][ncol] = 0;
                shark.point = [nrow, ncol];
                return;
            }
            for(let i =0; i<4; i++){
                let nextr = nrow + direction[i][0];
                let nextc = ncol + direction[i][1];
                if(nextc >= 0 && nextc < N && nextr >=0 && nextr < N){
                    if(board[nextr][nextc] <= shark.size && !queue.includes(`${nextr} ${nextc}`)){
                        queue.push(`${nextr} ${nextc}`)
                    }
                }
            }
        }
    }
    while(!done()){
        raider(shark.point[0], shark.point[1]);
        if(++shark.eat === shark.size){
            shark.size++;
            shark.eat = 0;
        }
    }

    console.log(time)
}