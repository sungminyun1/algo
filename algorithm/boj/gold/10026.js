const input = `5
RRRBB
GGBBB
BBBRR
BBRRR
RRRRR`.split('\n');
let board = [];
for(let i =1; i<input.length; i++){
    board.push(input[i].split(''))
}
main(board,true) 
function main(board, mode){
    console.log(board)
}