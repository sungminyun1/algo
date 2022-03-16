//const input = `00009-00009`
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim();
console.log(main(input))
function main(input){
    return input.split('-').reduce((prev,now,idx)=>{
        let tmp = now.split('+');
        let add = tmp.reduce((tprev,tnow)=>tprev+Number(tnow),0)
        if(idx === 0){
            return add;
        }else{
            return prev - add
        }
    },0)
}