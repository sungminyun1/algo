//https://programmers.co.kr/learn/courses/30/lessons/42860

function solution(name){
    let move = Array(name.length).fill(Infinity);
    move[0] = 0;
    console.log(move);
    const trip = (now) =>{
        let right = now === name.length-1 ? 0 : now + 1;
        let left = now === 0? name.length-1 : now -1;
        if(move[now] < move[left]){
            move[left] = move[now]+1;
            trip(left);
        }
        if(move[now] < move[right]){
            move[right] = move[now]+1;
            trip(right);
        }
        if(move[now] >= move[right] && move[now >= move[left]]){
            return;
        }
    }

    trip(0)
    console.log(move);

    const alphabet = {
        'A' : 0, 'B' : 1, 'C' : 2, 'D' : 3, 'E' : 4, 'F' : 5, 'G' : 6, 'H' : 7, 'I' : 8, 'J' : 9,
        'K' : 10, 'L' : 11, 'M' : 12, 'N' : 13, 'O' : 12, 'P' : 11, 'Q' : 10, 'R' : 9, 'S' : 8, 'T' : 7,
        'U' : 6, 'V' : 5, 'W' : 4, 'X' : 3, 'Y' : 2, 'Z' : 1
    }
    let sum = 0;
    for(let i = 0; i<name.length; i++){
        sum+=alphabet[name[i]];
    }

    console.log(sum)
}

console.log(solution("JAAANAAN"));