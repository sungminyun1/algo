//https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const phone = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const res = [];
  if (!digits.length) {
    return res;
  }
  const find = (num, letter) => {
    if (!num.length) {
      res.push(letter);
      return;
    }
    let nowNum = num[0];
    let leftNum = num.substr(1, num.length);
    for (let i of phone[nowNum]) {
      find(leftNum, letter + i);
    }
  };
  find(digits, "");

  return res;
};

let digits = "2";
console.log(letterCombinations(digits));
