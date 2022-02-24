//https://programmers.co.kr/learn/courses/30/lessons/67257
//solve
function solution(expression){

    let token = ['+','-','*'];
    let arr = []
    let result = 0;
    let k =0;
    for(let i =0; i<expression.length; i++){
        if(token.includes(expression[i])){
            arr.push(Number(expression.slice(k,i)))
            arr.push(expression[i]);
            k = i+1;
        }
    }
    arr.push(Number(expression.slice(k,expression.length)))

    function solve(tokens,array){
        if(tokens.length === 0){
            let tmp = array[0];
            if(tmp < 0){
                tmp = tmp * (-1);
            }
            if(tmp > result){
                result = tmp;
            }
            return;
        }
        for(let i =0; i<tokens.length; i++){
            let save = array.slice();
            for(let j = 0; j<array.length; j++){
                if(array[j] === tokens[i]){
                    let tmp = [];
                    for(let k = 0; k<array.length; k++){
                        if(k === j -1){
                            switch(tokens[i]){
                                case '+' :
                                    tmp.push(array[k] + array[k+2])
                                    break;
                                case '-' :
                                    tmp.push(array[k] - array[k+2])
                                    break;
                                case '*' :
                                    tmp.push(array[k] * array[k+2])
                                    break;
                            }
                            k +=2
                        }else{
                            tmp.push(array[k])
                        }
                    }
                    j--;
                    array = tmp;
                }
            }
            solve(tokens.slice(0,i).concat(tokens.slice(i+1,tokens.length)),array)
            array = save;
        }
    }

    solve(['+','-','*'],arr)

    return result;
}

console.log(solution("100-200*300-500+20"))
//60420