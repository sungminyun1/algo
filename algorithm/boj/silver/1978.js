const { off } = require("process");

function main(arr){
    const check = (num) =>{
        if(num === 2){
            return true;
        }
        if(num === 1){
            return false;
        }
        for(let i = 2; i<num; i++){
            if(num%i === 0){
                return false;
            }
        }
        return true;
    }
    let count = 0;
    for(let i =0; i<arr.length; i++){
        if(check(arr[i])){
            count++;
        }
    }

    return count;
}
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')[1].split(' ');
// console.log(main(input))
console.log(main([1,3,5,7]))