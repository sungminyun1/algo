const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim();
function main(input){
    let arr = [0,0];
    for(let i = 2; i<=input; i++){
        let candi = Infinity
        if(i%3 === 0 && arr[i/3] !== undefined){
            if(candi > arr[i/3]){
                candi = arr[i/3]
            }
        }
        if(i%2 === 0 && arr[i/2] !== undefined){
            if(candi > arr[i/2]){
                candi = arr[i/2]
            }
        }
        if(candi > arr[i-1]){
            candi = arr[i-1]
        }
        arr[i] = candi+1
    }
    console.log(arr[input])
}
main(input);