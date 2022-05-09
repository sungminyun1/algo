const input = `2
GCF
ACDEB`.split('\n');
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
input.shift();
main(input);
function main(arr){
    const map = {};
    for (let i =0; i<arr.length; i++) {
        for (let j =0; j<arr[i].length; j++) {
            let idx = arr[i].length -1 - j;
            if(!map[arr[i][j]]){
                map[arr[i][j]] = idx;
            }else if(map[arr[i][j]] < idx){
                map[arr[i][j]] = idx;
            }
        }
    }

    let order = Object.keys(map).sort((a,b)=>map[b] - map[a]);
    console.log(arr.reduce((prev,cur)=>{
        let now = 0;
        for(let i =0; i<cur.length; i++){
            let token = 9 - order.indexOf(cur[i]);
            now += token * Math.pow(10,cur.length -1 - i);
        }
        return prev += now;
    },0))
}