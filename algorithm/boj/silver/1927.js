const input = `9
0
12345678
1
2
0
0
0
0
32`.split('\n').map(val=>+val);
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(val=>+val);
main(input)
function main(arr){
    let heap = [0];
    const swap = (a,b)=>{
        let tmp = heap[a];
        heap[a] = heap[b];
        heap[b] = tmp;
    }
    const insert = (val) =>{
        heap.push(val);
        let now = heap.length -1 ;
        while(now > 1){
            let parent = Math.floor(now/2);
            if(heap[parent] > heap[now]){
                swap(now,parent);
                now = parent;
            }else{
                break;
            }
        }
    }

    const remove = () =>{
        if(heap.length <= 1){
            console.log(0)
        }else if(heap.length === 2){
            console.log(heap.pop())
        }else{
            console.log(heap[1]);
            let val = heap.pop();
            heap[1] = val;
            let now = 1;
            while(true){
                let left = now*2;
                let right = now*2+1;
                if(heap[left] === undefined && heap[right] === undefined){
                    break;
                }else if(heap[right] === undefined && heap[left] !== undefined){
                    if(heap[left] < heap[now]){
                        swap(left,now);
                        now = left;
                    }else{
                        break;
                    }
                }else{
                    let smaller = heap[left] <= heap[right] ? left : right;
                    if(heap[smaller] < heap[now]){
                        swap(smaller,now);
                        now = smaller;
                    }else{
                        break;
                    }
                }
            }
        }
    }
    for(let i = 1; i<arr.length; i++){
        if(arr[i] === 0){
            remove()
        }else{
            insert(arr[i])
        }
    }
}

