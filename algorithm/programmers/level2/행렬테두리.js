//https://programmers.co.kr/learn/courses/30/lessons/77485?language=javascript

function solution(rows, columns, queries) {
	var answer = [];

	let matrix_init = () => {
		let matrix = [];
		for (let i = 0; i <= rows; i++) {
			let tmp = [];
			for (let j = 0; j <= columns; j++) {
				if (i === 0 || j === 0) tmp.push(0);
				else tmp.push((i - 1) * columns + j);
			}
			matrix.push(tmp);
		}
		return matrix;
	};

	let matrix = matrix_init();
	for (let i = 0; i < queries.length; i++) {
		let dir = [0, 1];
		let now = [queries[i][0], queries[i][1]];
		let tmp = matrix[now[0]][now[1]];
		let tmp2;
		let min = Infinity;
		let count =
			(queries[i][2] - queries[i][0] + 1) * 2 +
			(queries[i][3] - queries[i][1] + 1) * 2 -
			4;

		for (let j = 0; j < count; j++) {
			if (now[1] + dir[1] > queries[i][3]) dir = [1, 0];
			else if (now[0] + dir[0] > queries[i][2]) dir = [0, -1];
			else if (now[1] + dir[1] < queries[i][1]) dir = [-1, 0];
			else if (now[0] + dir[0] < queries[i][0]) dir = [0, 1];

			if (tmp < min) min = tmp;
			now = [now[0] + dir[0], now[1] + dir[1]];
			tmp2 = matrix[now[0]][now[1]];
			matrix[now[0]][now[1]] = tmp;
			tmp = tmp2;
		}
		answer.push(min);
	}

	return answer;
}

console.log(
	solution(6, 6, [
		[2, 2, 5, 4],
		[3, 3, 6, 6],
		[5, 1, 6, 3],
	])
);
