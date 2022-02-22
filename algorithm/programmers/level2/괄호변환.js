//solved
function solution(p) {
    function isCorrect(text){
        let checkStack = [];
        for(let i =0; i<text.length; i++){
            if(text[i] === '('){
                checkStack.push(text[i]);
            }else{
                let tmp = checkStack.pop();
                if(tmp !== '('){
                    return false;
                }
            }
        }

        return true;
    }

    function makeInverse(text){
        let result = '';
        for(let i =1; i<text.length-1; i++){
            if(text[i] === '('){
                result += ')';
            }else{
                result += '(';
            }
        }
        return result;
    }
    const solve = (text, sum) =>{
        if(text.length === 0){
            return sum;
        }

        let count = 0;
        let u = '', v ='';
        for(let i =0; i<text.length; i++){
            if(text[i] === '('){
                count++;
            }else{
                count--;
            }

            if(count === 0){
                u = text.slice(0,i+1);
                v = text.slice(i+1,text.length);
                break;
            }
        }
        if(isCorrect(u)){
            return solve(v,sum+u)
        }else{
            return(sum+'('+solve(v,'')+')'+makeInverse(u));
        }
    }

    return solve(p,'');
}

console.log(solution('()))((()'))
//()(())()   (())()
