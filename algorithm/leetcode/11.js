//https://leetcode.com/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let s = 0;
  let e = height.length - 1;

  while (s < e) {
    let now = (e - s) * Math.min(height[e], height[s]);
    max = max > now ? max : now;
    if (height[s] < height[e]) {
      s++;
    } else {
      e--;
    }
  }

  return max;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
