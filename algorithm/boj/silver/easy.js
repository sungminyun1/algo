
function main(num){
    let count = 99;
    const check = (num)=>{
        let arr = String(num).split('');
        let dif = Number(arr[0]) - Number(arr[1]);
        for(let i =0; i<arr.length-1; i++){
            if(Number(arr[i]) - Number(arr[i+1]) !== dif){
                return false;
            }
        }
        return true;
    }

    if(num < 100){
        return num;
    }
    for(let i = 100; i<=num; i++){
        if(check(i)){
            count++;
        }
    }

    return count;
}
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim();
console.log(main(Number(input)))
console.log(main(210))

