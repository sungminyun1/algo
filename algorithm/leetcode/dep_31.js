/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//https://jins-dev.tistory.com/80 참고한 사이트

var nextPermutation = function (nums) {
  let a = nums.length - 2;
  let b = nums.length - 1;
  if (nums.length <= 1) {
    return nums;
  }
  while (a >= 0) {
    if (nums[a] < nums[a + 1]) {
      break;
    }
    a--;
  }
  if (a === -1) {
    return nums.sort((a, b) => a - b);
  }
  while (b > a) {
    if (nums[b] > nums[a]) {
      break;
    }
    b--;
  }
  let tmp = nums[a];
  nums[a] = nums[b];
  nums[b] = tmp;
  let rev = nums.splice(a + 1, Infinity).reverse();
  return nums.concat(rev);
};

let nums = [1, 2, 3];
console.log(nextPermutation(nums));
