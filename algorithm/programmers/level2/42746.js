//https://programmers.co.kr/learn/courses/30/lessons/42746
//못풀어서 참고했는데; 문제를 잘못 이해했었다.. 다음에 보면 풀듯
function solution(numbers) {

    var answer = numbers.map(c=> c + '').
    sort((a,b) => (b+a) - (a+b)).join('');

    return answer[0]==='0'? '0' : answer;
}
console.log(solution([40,4,3,9,42]))//9442403