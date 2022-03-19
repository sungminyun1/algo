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
const [list_num, q_num] = input.shift().split(' ').map(val => +val);
const po_list = [];
const q_list = [];
for(let i =0; i<list_num + q_num; i++){
    if(i<list_num){
        po_list.push(input[i])
    }else{
        q_list.push(input[i])
    }
}
main(list_num,q_num,po_list,q_list)

function main(list_num,q_num,po_list,q_list){
    console.log(list_num)
    console.log(q_num)
    console.log(po_list)
    console.log(q_list)
}