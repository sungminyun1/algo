//https://programmers.co.kr/learn/courses/30/lessons/72412
function solution(info, query) {
	let data = [];
	let answer = [];
	for (let i = 0; i < info.length; i++) {
		let tmp = info[i].split(" ");
		let person = [];
		for (let j = 0; j < 4; j++) {
			person.push(tmp[j]);
		}
		person.push(Number(tmp[4]));
		data.push(person);
	}

	const search = (search_data) => {
		let tmp = data.map((v) => v);

		for (let i = 0; i < search_data.length; i++) {
			if (search_data[i] === "-") continue;
			else {
				tmp = tmp.filter((v) => {
					if (i !== 4 && v[i] === search_data[i]) return true;
					if (i === 4 && v[i] >= search_data[i]) return true;
				});
			}
		}
		answer.push(tmp.length);
	};

	for (let i = 0; i < query.length; i++) {
		let tmp = query[i].split(" and ");
		let lang = tmp[0];
		let position = tmp[1];
		let age = tmp[2];
		let food = tmp[3].split(" ")[0];
		let score = tmp[3].split(" ")[1];
		search([lang, position, age, food, score]);
	}
	return answer;
}

console.log(
	solution(
		[
			"java backend junior pizza 150",
			"python frontend senior chicken 210",
			"python frontend senior chicken 150",
			"cpp backend senior pizza 260",
			"java backend junior chicken 80",
			"python backend senior chicken 50",
		],
		[
			"java and backend and junior and pizza 100",
			"python and frontend and senior and chicken 200",
			"cpp and - and senior and pizza 250",
			"- and backend and senior and - 150",
			"- and - and - and chicken 100",
			"- and - and - and - 150",
		]
	)
); //[1,1,1,1,2,4]

//https://mofari.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%88%9C%EC%9C%84-%EA%B2%80%EC%83%89-javascript
//이거좀 봐야될듯
