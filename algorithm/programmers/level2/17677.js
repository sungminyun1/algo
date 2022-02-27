//https://programmers.co.kr/learn/courses/30/lessons/17677
//solved
function init(string){
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const result = [];
    string = string.toLowerCase();
    for(let i =0; i<string.length; i++){
        if(alphabet.includes(string[i]) && alphabet.includes(string[i+1])){
            result.push(string[i]+string[i+1]);
        }
    }

    return result;
}
function getAll(arr1, arr2){
    let val1 = arr1.slice();
    let val2 = arr2.slice();
    const result = [];

    for(let i =0; i<val1.length; i++){
        result.push(val1[i]);
        let idx = val2.indexOf(val1[i]);
        if(idx >= 0){
            val2 = val2.slice(0,idx).concat(val2.slice(idx+1,val2.length));
        }
    }
    result.push(...val2);
    return result;
}
function getCommon(arr1,arr2){
    let val1 = arr1.slice();
    let val2 = arr2.slice();
    const result = [];

    for(let i =0; i<val1.length; i++){
        let idx = val2.indexOf(val1[i]);
        if(idx >= 0){
            result.push(val1[i])
            val2 = val2.slice(0,idx).concat(val2.slice(idx+1,val2.length));
        }
    }
    return result;
}
function solution(str1, str2) {
    const arr1 = init(str1);
    const arr2 = init(str2);
    const all = getAll(arr1,arr2);
    const common = getCommon(arr1,arr2);

    console.log(arr1);
    console.log(arr2);
    console.log(all.length);
    console.log(common);
    return all.length > 0?Math.floor(common.length/all.length * 65536) : 65536;
}

console.log(solution("E=M*C^2","e=m*c^2"))