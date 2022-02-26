//https://programmers.co.kr/learn/courses/30/lessons/86052

function checkDone(board){
    for(let i =0; i<board.length; i++){
        for(let j =0; j<board[i].length; j++){
            let idx = board[i][j].trip.indexOf(0);
            if(idx >=0){
                return {
                    result : false,
                    col : i,
                    row : j,
                    start : idx,
                }
            }
        }
    }

    return {result : true}
}

function search(board,col,row,dir){
    let token = Math.floor(Math.random()*1000);
    let count = 0;
    while(true){
        if(board[col][row].trip[dir] === token){
            break;
        }
        count++;
        board[col][row].trip[dir] = token;
        //go to next node
        switch(dir){
            case 0 : //up out
                if(col === 0){
                    col = board.length -1
                }else{
                    col--;
                }
                break;
            case 1 : //down out
                if(col === board.length -1){
                    col = 0;
                }else{
                    col++;
                }
                break;
            case 2: //left out
                if(row === 0){
                    row = board[col].length -1
                }else{
                    row--
                }
                break;
            case 3: //right out
                if(row === board[col].length -1){
                    row = 0;
                }else{
                    row++
                }
                break;
        }
        //find next dir
        switch(board[col][row].type){
            case 'L' :
                if(dir === 0){ //아래에서 왔다면 왼쪽으로
                    dir = 2;
                }else if(dir === 1){ //위에서 왔다면 오른쪽으로
                    dir = 3;
                }else if(dir === 2){ //오른족에서 왔다면 아래로
                    dir = 1;
                }else if(dir === 3){ // 왼쪽에서 왔다면 위로
                    dir = 0;
                }
                break;
            case 'R' :
                if(dir === 0){ //아래에서 왔다면 오른쪽으로
                    dir = 3;
                }else if(dir === 1){ //위에서 왔다면 왼쪽으로
                    dir = 2;
                }else if(dir === 2){ //오른족에서 왔다면 위로
                    dir = 0;
                }else if(dir === 3){ // 왼쪽에서 왔다면 아래로
                    dir = 1;
                }
                break;
        }
    }
    return count;
}

function solution(grid) {
    let answer = [];
    let arr = [];
    for(let i =0; i<grid.length; i++){
        let tmp = [];
        for(let j =0; j<grid[i].length; j++){
            tmp.push({
                type : grid[i][j],
                trip : [0,0,0,0] //uo,do,lo,ro
            })
        }
        arr.push(tmp);
    }

    while(true){
        let res = checkDone(arr);
        if(res.result){
            break;
        }
        answer.push(search(arr,res.col, res.row, res.start));
    }
    return answer.sort()
}

console.log(solution(["SR",'LR'])) //[16]