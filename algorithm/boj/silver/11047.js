// const [first,...arr] = `10 4790
// 1
// 5
// 10
// 50
// 100
// 500
// 1000
// 5000
// 10000
// 50000`.split('\n')
const fs = require('fs');
const [first,...arr] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const total = +first.split(' ')[1]
main(+total,arr)
function main(total,arr){
    let count = 0;
    let idx = arr.length -1;
    while(total >0){
        if(+arr[idx] <= total){
            count++;
            total -= Number(arr[idx]);
        }else{
            idx--
        }
    }
    console.log(count)
}
