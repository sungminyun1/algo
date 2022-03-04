//https://programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps){
    let board = maps;
    board[0][0] = 1

    console.log(board)
    const trip = (col,row) =>{
        let now = board[col][row]
        if(board[col-1] !== undefined && board[col-1][row] !== 0){
            if(board[col-1][row] === 1 || board[col-1][row] > now){
                board[col-1][row] = now+1;
                trip(col-1,row);
            }
        }
        if(board[col+1] !== undefined && board[col+1][row]!== 0){
            if(board[col+1][row] === 1 || board[col+1][row] > now){
                board[col+1][row] = now+1;
                trip(col+1 , row);
            }
        }
        if(board[col][row-1]!== 0){
            if(board[col][row-1] === 1 || board[col][row-1] > now){
                board[col][row-1] = now+1;
                trip(col,row-1);
            }
        }
        if(board[col][row+1]!== 0){
            if(board[col][row+1] === 1 || board[col][row+1] > now){
                board[col][row+1] = now+1;
                trip(col,row+1);
            }
        }
    }

    trip(0,0)
    console.log(board)
    return board[board.length-1][board[0].length-1] === 1 ? -1 : board[board.length-1][board[0].length-1]
}

console.log(solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]]))