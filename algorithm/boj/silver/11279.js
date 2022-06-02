const input = `13
0
1
2
0
0
3
2
1
0
0
0
0
0`.split('\n').map(Number);
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number);

input.shift();

main(input);

function main(Arr){
    let heap = [0];
    const result =[];

    const pop = () =>{
        if(heap.length === 1){
            result.push(0);
            return;
        }
        if(heap.length === 2){
            result.push(heap.pop());
            return;
        }
        result.push(heap[1]);
        heap[1] = heap.pop();
        let i =1;
        while(true){
            let left = heap[i*2] || -Infinity;
            let right = heap[i*2 +1] || -Infinity;
            if(left === -Infinity && right === -Infinity){
                break;
            }
            let max = left >= right? i*2 : i*2 +1;
            if(heap[i] > max){
                break;
            }
            let tmp = heap[i];
            heap[i] = heap[max];
            heap[max] = tmp;
            i = max;
        }
    }

    const insert = (val) =>{
        heap.push(val);
        let i = heap.length -1;
        while(true){
            if(i === 1){
                break;
            }
            let parent = Math.floor(i/2);
            if(heap[parent] > heap[i]){
                break;
            }
            let tmp = heap[i];
            heap[i] = heap[parent];
            heap[parent] = tmp;
            i = parent;
        }
    }
    for(let i =0; i<Arr.length; i++){
        if(Arr[i] === 0){
            pop()
        }else{
            insert(Arr[i])
        }
    }

    console.log(result.join('\n'))
}



