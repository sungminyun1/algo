//https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  let res = [];
  const search = (s, e, i) => {
    while (s < e) {
      let sum = nums[s] + nums[e] + nums[i];
      if (sum === 0) {
        res.push([nums[i], nums[s], nums[e]]);
      }
      if (sum < 0) {
        while (nums[s] === nums[++s]) {}
      } else {
        while (nums[e] === nums[--e]) {}
      }
    }
  };
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    search(i + 1, nums.length - 1, i);
  }

  return res;
};

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
