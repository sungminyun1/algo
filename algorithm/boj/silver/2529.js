const input = `9
> < < < > > > < <`.split('\n')
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const arr = input[1].split(' ');
main(arr);
function main(arr){
    const result = [];
    const compare = (token,a,b) =>{
        let ta = Number(a);
        switch(token){
            case '<':
                if(ta<b){
                    return true;
                }else{
                    return false;
                }
            case '>' :
                if(ta>b){
                    return true;
                }else{
                    return false;
                }
        }
    }
    const make=(now,nums)=>{
        if(now.length > arr.length){
            result.push(+now);
            return;
        }
        let idx = now.length-1;
        for(let i =0; i<nums.length; i++){
            if(idx === -1){
                let tmp = [...nums]
                tmp.splice(i,1)
                make(now+nums[i],tmp);
            }else{
                if(compare(arr[idx],now[now.length-1],nums[i])){
                    let tmp = [...nums]
                    tmp.splice(i,1)
                    make(now+nums[i],tmp)
                }
            }
        }
    }
    make('',[0,1,2,3,4,5,6,7,8,9])

    const padding = (str) =>{
        while(str.length<arr.length+1){
            str = '0'+str;
        }
        return str;
    }
    let min = padding(''+ Math.min(...result));
    let max = padding(''+ Math.max(...result));
    console.log(max)
    console.log(min)
}