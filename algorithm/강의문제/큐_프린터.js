function solution(priorities, location) {
    let count = 0;
    const check = (prio) =>{
        for(let item of priorities){
            if(item > prio) return false;
        }
        return true;
    }
    while(true){

        let now = priorities.shift();
        if(check(now)){
            count++
            if(location === 0){
                return count;
            }else{
                location--
            }
        }else{
            priorities.push(now);
            if(location === 0){
                location = priorities.length-1;
            }else{
                location--
            }
        }
    }

}

console.log(solution([1, 1, 9, 1, 1, 1]	,0))