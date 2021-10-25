//https://programmers.co.kr/learn/courses/30/lessons/42578?language=javascript

function solution(clothes) {
	let menu = {};
	for (let i = 0; i < clothes.length; i++) {
		menu[clothes[i][1]] = menu[clothes[i][1]] ? menu[clothes[i][1]] + 1 : 1;
	}
	let menu_array = Object.keys(menu);

	let count = 0;
	const func = (now, now_array, remain) => {
		if (remain === 0) {
			count += now;
			return;
		}
		for (let i = 0; i < now_array.length; i++) {
			func(now * menu[now_array[i]], now_array.slice(i + 1), remain - 1);
		}
	};

	for (let i = 1; i <= menu_array.length; i++) {
		func(1, menu_array, i);
	}

	return count;
}

console.log(solution([["yellowhat", "headgear"]]));
//5
