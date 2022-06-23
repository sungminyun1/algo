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

    console.log(map)
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"],[500, 600, 150, 800, 2500]	))