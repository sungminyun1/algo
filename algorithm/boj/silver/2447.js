function main(size){
    let board = [];
    for(let i =0; i<size; i++){
        board.push(new Array(size).fill(' '))
    }
    
    const draw = (col,row,b_size) =>{
        if(b_size === 3){
            board[col][row] = '*';
            board[col][row+1] = '*';
            board[col][row+2] = '*';
            board[col+1][row] = '*';
            board[col+1][row+2] = '*';
            board[col+2][row] = '*';
            board[col+2][row+1] = '*';
            board[col+2][row+2] = '*';
            return;
        }
        let n_size = b_size/3;
        draw(col,row,n_size);
        draw(col, row + n_size, n_size);
        draw(col, row + (n_size * 2), n_size);
        draw(col + n_size, row, n_size);
        draw(col + n_size, row + (n_size * 2), n_size);
        draw(col + (n_size * 2),row,n_size);
        draw(col + (n_size * 2),row + n_size ,n_size);
        draw(col + (n_size * 2),row + (n_size * 2),n_size);
    }
    draw(0,0,size);

    for(let i =0; i<board.length; i++){
        let tmp = '';
        for(let j =0; j<board[i].length; j++){
            tmp += board[i][j];
        }
        console.log(tmp)
    }
}
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim()
// main(Number(input))
main(27);