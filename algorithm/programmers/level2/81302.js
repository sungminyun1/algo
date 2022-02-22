//https://programmers.co.kr/learn/courses/30/lessons/81302#fn1

//solved
function checkP(room,col,row){
    if(room[col][row+1] === 'P'){
        return false;
    }else if(room[col+1] !== undefined && room[col+1][row] === 'P'){
        return false;
    }else if(room[col][row+2] === 'P'){
        if(room[col][row+1] === 'X'){
            return true;
        }else{
            return false;
        }
    }else if(room[col+2] !==undefined && room[col+2][row] === 'P'){
        if(room[col+1][row] === 'X'){
            return true;
        }else{
            return false;
        }
    }else if(room[col+1] !== undefined && room[col+1][row+1] === 'P'){
        if(room[col+1][row] === 'X' && room[col][row+1] === 'X'){
            return true;
        }else{
            return false;
        }
    }else if(room[col+1] !== undefined && room[col+1][row-1] === 'P'){
        if(room[col+1][row] === 'X' && room[col][row-1] === 'X'){
            return true;
        }else{
            return false;
        }
    }else{
        return true;
    }
}
function solution(places) {
    let answer = [];
    for(let i =0; i<5; i++){
        let res = true;
        for(let j =0; j<5; j++){
            for(let k =0; k<5; k++){
                if(places[i][j][k] === 'P'){
                    if(!checkP(places[i],j,k)){
                        res = false;
                        break;
                    }
                }
            }
            if(res === false){
                break;
            }
        }
        if(res === true){
            answer.push(1);
        }else{
            answer.push(0);
        }
    }

    return answer;
}

console.log(solution([
    ["PXOOP", "XPXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]
]));