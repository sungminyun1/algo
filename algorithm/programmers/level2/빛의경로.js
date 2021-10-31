//https://programmers.co.kr/learn/courses/30/lessons/86052

function solution(grid) {
	let data = [];
	let answer = [];
	for (let i = 0; i < grid.length; i++) {
		let ta = [];
		for (let j = 0; j < grid[i].length; j++) {
			let tmp = {};
			tmp.type = grid[i][j];
			tmp.up = 0;
			tmp.down = 0;
			tmp.left = 0;
			tmp.right = 0;
			ta.push(tmp);
		}
		data.push(ta);
	}

	const travle = (start, now) => {
		if (start === 1) {
			answer.push(now);
			return;
		}
	};
}

console.log(solution(["SL", "LR"])); //16
