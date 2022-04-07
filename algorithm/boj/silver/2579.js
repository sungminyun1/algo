const input = `9
1
5
7`.split('\n').map(val=>+val); //75
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
console.log(main(input))
function main(arr){
    if(arr.length === 2){
        return arr[1];
    }
    if(arr.length === 3){
        return arr[1] + arr[2];
    }
    const dp = [[0],[arr[1],false], [arr[2] + arr[1], true]]
    for(let i = 3; i<arr.length; i++){
        if(dp[i-1][1]){
            dp[i] = [dp[i-2][0] + arr[i],false];
        }else{
            let bigger = dp[i-1][0] > dp[i-2][0] ? i-1 : i-2;
            dp[i] = [dp[bigger][0]+arr[i],bigger=== i-1 ? true : false]
        }
    }
    console.log(dp)
    return dp[arr.length -1][0]
    
}