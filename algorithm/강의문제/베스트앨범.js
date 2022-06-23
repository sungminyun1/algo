function solution(genres, plays) {
    const map = {};

    for(let i =0; i<genres.length; i++){
        if(!map[genres[i]]){
            map[genres[i]] = [plays[i],[i]]
        }else{
            map[genres[i]][0] += plays[i];
            map[genres[i]][1].push(i);
        }
    }

    const result = []
    //Object.keys(map).sort((a,b)=>map[b][0]- map[a][0])
    let keys = Object.keys(map).sort((a,b)=>map[b][0]- map[a][0])
    Object.keys(map).sort((a,b)=>map[b][0]- map[a][0]).map(val => map[val][1].sort((a,b)=>{
        if(a !== b){
            return plays[b] - plays[a];
        }else{
            return a - b
        }
    }).map((val2,idx) => {

        if(idx<2){
            result.push(val2)
            return val2
        }
    }))
    return result
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"],[500, 600, 150, 800, 2500]	))