//https://programmers.co.kr/learn/courses/30/lessons/72412
//이전에 풀었던 순위 검색 문제. 당시에 정확성 테스트는 다 맞았지만 효율성 테스트에서 통과하지 못함

function infoInit(arr){
    let result = [];
    for(let i =0; i<arr.length; i++){
        let person = {};
        let tmp = arr[i].split(' ');
        person.lang = tmp[0];
        person.posi = tmp[1];
        person.dur = tmp[2];
        person.food = tmp[3];
        person.score = Number(tmp[4])
        result.push(person)
    }

    return result;
}
function queryInit(arr){
    let result = [];
    for(let i =0; i<arr.length; i++){
        let tmp = arr[i].split(' and ');
        result.push({
            lang : tmp[0],
            posi : tmp[1],
            dur : tmp[2],
            food : tmp[3].split(' ')[0],
            score : Number(tmp[3].split(' ')[1]),
        })
    }
    return result;
}
function searchIndex(data,val){
    let p = Math.floor(data.length / 2), s = 0, e = data.length -1;
    while(true){
        let ps = p;
        if(p === 0 || p === data.length -1){
            break;
        }else if(data[p].score === val){
            while(val === data[p].score){
                p--;
            }
            break;
        }else if(data[p].score > val){
            e = p;
            p = Math.floor((s+p)/2);
        }else if(data[p].score < val){
            s = p;
            p = Math.floor((p+e)/2);
        }
        if(ps === p){
            break;
        }
    }
    return p;
}
function solution(info, query) {
    let data = infoInit(info);
    data = data.sort((a,b)=>a.score - b.score)
    let q_data = queryInit(query);
    let answer = [];
    for(let i = 0; i<q_data.length; i++){
        let count = 0;
        let idx = searchIndex(data,q_data[i].score);
        for(let j = idx+1; j<data.length; j++){
            if(q_data[i].lang !== '-' && q_data[i].lang !== data[j].lang){
                continue;
            };
            if(q_data[i].posi !== '-' && q_data[i].posi !== data[j].posi){
                continue;
            };
            if(q_data[i].dur !== '-' && q_data[i].dur !== data[j].dur){
                continue;
            };
            if(q_data[i].food !== '-' && q_data[i].food !== data[j].food){
                continue;
            };
            count++;
        }
        answer.push(count);
    }
    return answer;
}

console.log(solution(
    [
        "java backend junior pizza 150",
        "python frontend senior chicken 210",
        "python frontend senior chicken 150",
        "cpp backend senior pizza 260",
        "java backend junior chicken 80",
        "python backend senior chicken 50"
    ],
    [
        "java and backend and junior and pizza 100",
        "python and frontend and senior and chicken 200",
        "cpp and - and senior and pizza 250",
        "- and backend and senior and - 150",
        "- and - and - and chicken 100",
        "- and - and - and - 150"
    ]
)) //[1,1,1,1,2,4]

// "python backend senior chicken 50"
// "java backend junior chicken 80",
// "java backend junior pizza 150",
// "python frontend senior chicken 150",
// "python frontend senior chicken 210",       
// "cpp backend senior pizza 260",    
        
        