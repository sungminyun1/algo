//https://programmers.co.kr/learn/courses/30/lessons/64065
function solution(s){
    let arr = []
    let result = []
    for(let i =1; i<s.length-1; i++){
        let tmp = []
        if(s[i] === '{'){
            i++;
            let k = i;
            while(s[i] !== '}'){
                if(s[i] === ','){
                    tmp.push(Number(s.slice(k,i)));
                    k = i+1;
                }
                i++;
            }
            tmp.push(Number(s.slice(k,i)))
        }
        if(tmp.length >0){
            arr.push(tmp);
        }
    }

    arr = arr.sort((a,b)=>a.length-b.length)
    for(let i =0; i<arr.length; i++){
        for(let j =0; j<arr[i].length; j++){
            if(!result.includes(arr[i][j])){
                result.push(arr[i][j])
            }
        }
    }

    return result;
}

console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"))