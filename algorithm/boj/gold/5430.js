// const input = `4
// RDD
// 4
// [1,2,3,4]
// DD
// 1
// [42]
// RRD
// 6
// [1,1,2,3,5,8]
// D
// 1
// [3]`.toString().trim().split('\n');
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
for(let i = 1; i<input.length;){
    let cmd = input[i++];
    let len = +input[i++];
    let arr = input[i++].slice(1,-1).split(',').map(val => {
        return val? +val : undefined;
    });
    main(cmd,len,arr);
}
function main(cmd,len,arr){
    let mod = 1 //1이면 shift -1이면 pop
    let e = false;
    for(let i =0; i<cmd.length; i++){
        if(cmd[i] === 'R'){
            mod *= -1;
        }else{
            let out = mod === 1 ? arr.shift() : arr.pop();
            if(out === undefined){
                e = true;
                break;
            }
        }
    }
    if(e){
        console.log('error')
    }else if(arr.length === 0){
        console.log('[]')
    }else{
        let res = '[';
        if(mod === 1){
            for(let i = 0 ; i < arr.length; i++){
                if(arr[i] !== undefined){
                    res += arr[i];
                }
                if(i === arr.length -1){
                    res +=']'
                }else{
                    res +=','
                }
            }
        }else if(mod === -1){
            for(let i = arr.length -1; i >= 0; i--){
                if(arr[i] !== undefined){
                    res += arr[i];
                }
                if(i === 0){
                    res +=']'
                }else{
                    res +=','
                }
            }
        }

        console.log(res)
    }
}
