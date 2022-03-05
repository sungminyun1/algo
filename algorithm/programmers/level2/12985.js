//https://programmers.co.kr/learn/courses/30/lessons/12985?language=javascript

function solution(n,a,b){
    let round = 0;
    while(true){
        round++;
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        if(a===b){
            break;
        }
    }
    return round;
}

console.log(solution(8,4,7)) //3