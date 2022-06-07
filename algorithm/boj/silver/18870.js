const input = `6
1000 999 1000 999 1000 999`.split('\n').map(val => val.split(' ').map(Number));

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(val => val.split(' ').map(Number));

main(input[1])
function main(Arr){
    const map = {}
    const result = [];
    let i = 0;
    [...Arr].sort((a,b)=>a-b).map((val,idx,arr)=>{
        if(idx === 0){
            map[val] = i++;
            return val;
        }

        if(val !== arr[idx-1]){
            map[val] = i++
        }
        return val
    })

    Arr.map(val=>{
        result.push(map[val]);
    })
    console.log(result.join(' '))

}