const [_,...input] = `2
5 6
0 0 1 0`.split('\n');
// const fs = require('fs');
// const [_,...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const arr = input.map(val=>val.split(' ').map(Number))
main(arr)
function main(arr){
    let result = [];

    const calc = (comm)=>{
        let res = arr[0][0];
        for(let i =0; i<comm.length; i++){
            switch(comm[i]){
                case 0:
                    res += arr[0][i+1];
                    break;
                case 1:
                    res -= arr[0][i+1];
                    break;
                case 2 :
                    res *= arr[0][i+1];
                    break;
                case 3:
                    if(res<0){
                        res = Math.floor((res * (-1))/arr[0][i+1]) * (-1);
                    }else{
                        res = Math.floor(res/arr[0][i+1]);
                    }
                    break;
            }
        }
        result.push(res);
    }
    const find = (comm,res) =>{
        if(comm.length >= arr[0].length-1){
            calc(comm);
            return
        }

        for(let i =0; i<res.length; i++){
            if(res[i]>0){
                let tmp = [...res];
                tmp[i]--;

                find([...comm,i],tmp);
            }
        }
    }

    find([],[...arr[1]])

    console.log(Math.max(...result))
    console.log(Math.min(...result))
}