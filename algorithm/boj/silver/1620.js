const input = `26 5
Bulbasaur
Ivysaur
Venusaur
Charmander
Charmeleon
Charizard
Squirtle
Wartortle
Blastoise
Caterpie
Metapod
Butterfree
Weedle
Kakuna
Beedrill
Pidgey
Pidgeotto
Pidgeot
Rattata
Raticate
Spearow
Fearow
Ekans
Arbok
Pikachu
Raichu
25
Raichu
3
Pidgey
Kakuna`.toString().trim().split('\n')
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
const [list_num, q_num] = input.shift().split(' ').map(val => +val);
const po_map =new Map();
const q_list = [];
for(let i =0; i<list_num + q_num; i++){
    if(i<list_num){
        po_map.set(''+i,input[i])
        po_map.set(input[i],i)
    }else{
        q_list.push(input[i])
    }
}
main(list_num,q_num,po_map,q_list)

function main(list_num,q_num,po_map,q_list){
    for(let i =0; i<q_num; i++){
        console.log(po_map.get(q_list[i]))
    }
}