//https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript

function solution(priorities, location) {
	var answer = 0;

	while (1) {
		let now = priorities.shift();

		let print = true;
		for (let i = 0; i < priorities.length; i++) {
			if (priorities[i] > now) {
				print = false;
				break;
			}
		}

		if (print) {
			answer++;
			if (location === 0) break;
		} else {
			priorities.push(now);
			if (location === 0) location = priorities.length;
		}
		location--;
	}
	return answer;
}

console.log(solution([2, 1, 3, 2], 2)); //1
