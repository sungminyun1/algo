// https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html

function solution(w, h) {
	let big = w > h ? w : h;
	let small = w < h ? w : h;
	let left = big % small;

	while (left !== 0) {
		big = small;
		small = left;
		left = big % small;
	}

	const gcd = small;
	let wrong_square = w / gcd + h / gcd - 1;

	return w * h - gcd * wrong_square;
}

console.log(solution(8, 12));

// gcd 구하는 코드가 너무 구지다

let gcd2 = (a, b) => {
	return b === 0 ? a : gcd2(b, a % b);
};
//이게 더 좋은듯
