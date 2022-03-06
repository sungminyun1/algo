//https://leetcode.com/problems/integer-to-roman/

/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
  let answer = '';
  const token = {
      '1' : 'I',
      '5' : 'V',
      '10' : 'X',
      '50' : 'L',
      '100' : 'C',
      '500' : 'D',
      '1000' : 'M',
  };
  let t_arr = [1000,500,100,50,10,5,1];

  while(num > 0){
      let head = String(num)[0];
      let len = String(num).length -1;
      if(head === '4' || head === '9'){
          let tmp = Math.pow(10,len)
          num += tmp;
          answer += token[String(tmp)];
      }
      for(let i =0; i<t_arr.length; i++){
            if(num - t_arr[i] >= 0){
                num -= t_arr[i];
                answer += token[String(t_arr[i])];
                break;
            }
        }
  }

  return answer;
};

console.log(intToRoman(1994));