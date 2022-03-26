/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  const find = (len, stack, str) => {
    if (len === n) {
      while (stack > 0) {
        stack--;
        str += ")";
      }
      res.push(str);
      return;
    }
    find(len + 1, stack + 1, str + "(");
    if (stack > 0) {
      find(len, stack - 1, str + ")");
    }
  };

  find(0, 0, "");

  return res;
};

let n = 3;
console.log(generateParenthesis(n)); //["((()))","(()())","(())()","()(())","()()()"]
