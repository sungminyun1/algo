//https://programmers.co.kr/learn/courses/30/lessons/86052

function solution(grid) {
	let data = [];
	for (let i = 0; i < grid.length; i++) {
		let ta = [];
		for (let j = 0; j < grid[i].length; j++) {
			let tmp = {};
			tmp.type = grid[i][j];
			ta.push(tmp);
		}
		data.push(ta);
	}
	console.log(data);
}

console.log(solution(["SL", "LR"])); //16
