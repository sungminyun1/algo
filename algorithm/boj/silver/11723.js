const input = `26
add 1
add 2
check 1
check 2
check 3
remove 2
check 1
check 2
toggle 3
check 1
check 2
check 3
check 4
all
check 10
check 20
toggle 10
remove 20
check 10
check 20
empty
check 1
toggle 1
check 1
toggle 1
check 1`.split('\n').map(val => val.split(' '));
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(val => val.split(' '));

input.shift()

main(input);

function main(Arr){
    const bit = [];
    const result = []
    for(let item of Arr){
        let [comm,val] = item;

        switch(comm){
            case 'add':
                bit[Number(val)] = 1;
                break;
            case 'remove':
                bit[Number(val)] = 0;
                break;
            case 'check':
                result.push(bit[Number(val)]?1:0)
                break;
            case 'toggle':
                if(bit[Number(val)]){
                    bit[Number(val)] = 0;
                }else{
                    bit[Number(val)] = 1;
                }
                break;
            case 'all':
                bit.fill(0);
                for(let i =1; i<=20; i++){
                    bit[i] = 1;
                }
                break;
            case 'empty':
                bit.fill(0)
        }
    }

    console.log(result.join('\n'))
}


// function main(Arr){
//     let result = [];
//     const map = new Map();
//     for(let item of Arr){
//         let [comm,val] = item;
//
//         switch(comm){
//             case 'add':
//                 map.set(val,true);
//                 break;
//             case 'remove':
//                 map.delete(val);
//                 break;
//             case 'check':
//                 result.push(map.has(val)?1:0)
//                 break;
//             case 'toggle':
//                 if(map.has(val)){
//                     map.delete(val);
//                 }else{
//                     map.set(val,true)
//                 }
//                 break;
//             case 'all':
//                 map.clear();
//                 for(let i =1; i<= 20; i++){
//                     map.set(''+i,true)
//                 }
//                 break;
//             case 'empty':
//                 map.clear()
//         }
//     }
//
//     console.log(result.join('\n'))
// }

