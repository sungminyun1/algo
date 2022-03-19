// const input = `3 4
// ohhenrie
// charlie
// baesangwook
// obama
// baesangwook
// ohhenrie
// clinton`.toString().trim().split('\n');
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
let M = +input[0].split(' ')[0];
let N = +input[0].split(' ')[1];
let arr1 = []
for(let i = 0; i<M; i++){
    arr1.push(input[i+1]);
}
let arr2 = [];
for(let i =0; i<N; i++){
    arr2.push(input[i+M+1])
}
main(arr1,arr2)
function main(arr1,arr2){
    arr1 = arr1.sort();
    arr2 = arr2.sort();
    let res = [];
    let i =0, j =0;
    while(true){
        if(i >= arr1.length || j >= arr2.length){
            break;
        }
        if(arr1[i] === arr2[j]){
            res.push(arr1[i]);
            i++;
            j++
        }else if(arr1[i] > arr2[j]){
            j++;
        }else{
            i++;
        }
    }
    console.log(res.length)
    res.map(val=>console.log(val))
}