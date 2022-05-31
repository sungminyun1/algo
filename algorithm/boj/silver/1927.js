const input = `9
0
12345678
1
2
0
0
0
0
32`.split('\n').map(Number);
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number);

input.shift();

main(input);

function main(Arr){
    const arr = [0];
    let result = [];

    const remove = () =>{
        if(!arr[1]){
            result.push(0);
            return;
        }
        if(arr.length === 2){
            result.push(arr.pop());
            return;
        }

        result.push(arr[1]);
        arr[1] = arr.pop();
        let i = 1;
        while(true){
            let left = arr[i*2] || Infinity;
            let right = arr[i*2 +1] || Infinity;
            if(left === Infinity && right === Infinity) break;
            let min = left <= right ? i*2 : i*2 + 1
            if(arr[i] > arr[min]){
                let tmp = arr[i];
                arr[i] = arr[min];
                arr[min] = tmp
                i = min;
            }else{
                break;
            }
        }
    }

    const insert = (val) =>{
        arr.push(val);
        let i = arr.length-1;

        while(true){
            if(i === 1) break;

            let parent = Math.floor(i/2);
            if(arr[parent] > arr[i]){
                let tmp = arr[i];
                arr[i] = arr[parent];
                arr[parent] = tmp;
                i = parent;
            }else{
                break;
            }
        }
    }

    for(let i =0; i<Arr.length; i++){
        if(Arr[i] === 0){
            remove()
        }else{
            insert(Arr[i])
        }
    }

    console.log(result.join('\n'));
}