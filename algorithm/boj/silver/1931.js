const input = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`.split('\n');
const arr = []
for(let i =1; i<input.length; i++){
    let tmp = input[i].split(' ').map(val=>+val);
    tmp.push(tmp[1]-tmp[0])
    arr.push(tmp);
}
main(arr)
function main(arr){
    arr.sort((a,b)=>a[2]-b[2])
    console.log(arr)
}
