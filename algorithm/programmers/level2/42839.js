//https://programmers.co.kr/learn/courses/30/lessons/42839
function check(num){
    if(num === 0 || num === 1){
        return false;
    }
    if(num === 2){
        return true;
    }
    for(let i =2; i<num; i++){
        if(num%i === 0){
            return false;
        }
    }
    return true;
}
function solution(numbers){
    let count = 0;
    const arr = [];
    const loop = (str,now) =>{
        let num = Number(now);
        if(!arr.includes(num) && check(num)){
            count++;
            arr.push(num);
        }
        if(str.length === 0){
            return;
        }
        for(let i =0; i<str.length; i++){
            loop(str.slice(0,i).concat(str.slice(i+1,str.length)),now+str[i]);
        }
    }

    loop(numbers,'');

    return count;
}

console.log(solution('17'))