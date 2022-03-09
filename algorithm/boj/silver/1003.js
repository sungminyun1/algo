
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(val => +val);
// main(input)

function main(arr){
    

    let dp = new Array();
    const fib = (n) =>{
        if(n===0){
            dp[n] = [1,0];
            return [1,0];
        } else if(n === 1){
            dp[n] = [0,1];
            return [0,1];
        } else if(dp[n] !== undefined){
            return dp[n];
        }
        let ans1 = fib(n-1)
        let ans2 = fib(n-2)
        dp[n] = [ans1[0]+ans2[0], ans1[1]+ ans2[1]];
        return dp[n]
    }

    for(let i =0; i<arr.length; i++){
      
        fib(arr[i]);
        console.log(dp[arr[i]][0] + ' ' + dp[arr[i]][1]);
    }
}

main([6,22])