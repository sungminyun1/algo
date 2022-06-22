const input = `1000`;

main(+input);

function main(Num){
    const memo = [0,1,1];
    const mod = 1000000007

    const find = (N) =>{
        if(N<3){
            return memo[N];
        }
        if(N%2 === 0){
            let pib1 = find(N/2)
            let pib2 = find(N/2 + 1)
            let pib3 = find(N/2 - 1);
            return pib1*(pib2+pib3)%mod
            // return find(N/2)*(find(N/2-1) + find(N/2 +1))
            // return (find(N/2)*(find(N/2-1) + find(N/2 +1)))%mod
        }else{
            let pib1 = find((N-1)/2);
            let pib2 = find((N-1)/2 +1)
            return ((pib1*pib1)%mod + (pib2*pib2)%mod )%mod
            // return find((N-1)/2) * find((N-1)/2) + find((N-1)/2 +1) * find((N-1)/2 +1)
            // return (find((N-1)/2) * find((N-1)/2) + find((N-1)/2 +1) * find((N-1)/2 +1))%mod
        }
    }

    console.log(find(Num)%mod)
}