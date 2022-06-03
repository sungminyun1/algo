const input = `3
26 40 83
49 60 57
13 89 99`.split('\n').map(val=>val.split(' ').map(Number));

input.shift();

main(input);

function main(Arr){
    const memo1 = [[Arr[0][0],Infinity,Infinity]];
    const memo2 = [[Infinity,Arr[0][1],Infinity]];
    const memo3 = [[Infinity,Infinity,Arr[0][2]]];

    for(let i =1; i<Arr.length; i++){
    }
}