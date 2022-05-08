const input = `10
A
B
C
D
E
F
G
H
I
J`.split('\n')
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
main(input)
function main(arr){
    let result = -Infinity;

    const alpha = {
        A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9
    }
    const clac = (map) =>{
        let tresult = 0;
        for(let i =1; i<arr.length; i++){
            let num = '';
            for(let j =0; j<arr[i].length; j++){
                let idx = alpha[arr[i][j]]
                num += map[idx];
            }
            tresult += Number(num);
        }
        if(tresult > result){
            result = tresult;
        }
    }

    const find = (map,list) =>{
        if(!list.length){
            clac(map);
            return;
        }

        for(let i =0; i<list.length; i++){
            let tmp = [...list];
            tmp.splice(i,1);
            find([...map,list[i]],tmp)
        }
    }

    find([],[0,1,2,3,4,5,6,7,8,9]);

    console.log(result)
}