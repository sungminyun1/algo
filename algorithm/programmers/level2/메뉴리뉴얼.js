https://programmers.co.kr/learn/courses/30/lessons/72411?language=javascript

function solution(orders, course) {
  let dic = {};
  let answer = []
  const func = (now,remain,length) =>{
    if(length === 0){
      dic[now] = dic[now]? dic[now]+1 : 1;
      return;
    }

    for(let i =0; i<remain.length; i++){
      func(now+remain[i],remain.slice(i+1),length-1)
    }
  }

  for(let i =0; i<course.length; i++){
    dic = {};
    for(let j =0; j<orders.length; j++){
      func('',orders[j].split('').sort().join(''),course[i])
    }
    let max = 2;
    for(let key in dic){
      if(dic[key]>=max) max = dic[key]
    }
    for(let key in dic){
      if(dic[key] === max) answer.push(key)
    }
  }
  
  return answer.sort()
}

console.log(solution(["XYZ", "XWY", "WXA"],[2, 3, 4]))
//["WX", "XY"]