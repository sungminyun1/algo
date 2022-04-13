const input = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`.split('\n');
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const arr = []
for(let i =1; i<input.length; i++){
    let tmp = input[i].split(' ').map(val=>+val);
    arr.push(tmp);
}
main(arr)
function main(arr){
    arr.sort((a,b)=>{
        if(a[1]===b[1]) return a[0]-b[0]
        else return a[1] - b[1]
    })
    let count =1;
    let selected = arr[0];
    for(let i = 1; i<arr.length; i++){
        if(arr[i][0]>= selected[1]){
            count++;
            selected = arr[i]
        }
    }
    console.log(count)
}
