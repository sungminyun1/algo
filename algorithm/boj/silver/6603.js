const input = `7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`.split('\n').map(val=>val.split(' ').map(Number));

const consoleRes = [];
for(let i =0; i<input.length-1; i++){
    main(input[i])
}
function main(Arr){
    const res = [];
    Arr.shift();

    const make = (arr,now) =>{
        if(!arr.length){
            res.push(now.join(' '));
            return;
        }

        for(let i =0; i< arr.length; i++){
            let t_val = arr[i]
            let t_arr = [...arr];
            t_arr.splice(i,1);
            make(t_arr,[...now,t_val]);
        }
    }

    make(Arr,[])
    console.log(res)
}