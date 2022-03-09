function main(arr){
    let min = Infinity;
    let sum = 0;

    const check = (num)=>{
        if(num === 1) {
            return false;
        }
        if(num === 2){
            return true;
        }
        for(let i = 2; i<num; i++){
            if(num%i === 0){
                return false;
            }
        }
        return true;
    }

    for(let i = arr[0]; i<=arr[1]; i++){
        if(check(i)){
            if(i<min){
                min = i;
            }
            sum += i;
        }
    }
    if(min === Infinity){
        console.log('-1')
    }else{
        console.log(sum);
        console.log(min)
    }
}
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(val=>+val)
main(input)
//console.log(main(input))