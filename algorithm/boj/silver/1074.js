// 0,0  0,1  0,2  0,3
// 1,0  1,1  1,2  1,3
// 2,0  2,1  2,2  2,3
// 3,0  3,1  3,2  3,3   2 2


const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(val => +val);
main(input[0],input[1],input[2])
function main(N,r,c){
    let x = 0;
    let y = 0;
    let count = 0;
    while(N>0){
        let size = Math.pow(2,N);
        let mx = x + size/2
        let my = y + size/2
        let block = Math.pow(2,N-1) * Math.pow(2,N-1);
        if(r<mx){
            if(c<my){ //1
            }else{ // 2
                y = my;
                count += block
            }
        }else{
            if(c<my){ //3
                x = mx
                count += (block*2)
            }else{ //4
                x = mx;
                y = my;
                count += (block*3)
            }
        }
        N--;
    }

    console.log(count)
}

main(10,512,512)