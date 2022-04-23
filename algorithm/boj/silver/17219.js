const input = `16 4
noj.am IU
acmicpc.net UAENA
startlink.io THEKINGOD
google.com ZEZE
nate.com VOICEMAIL
naver.com REDQUEEN
daum.net MODERNTIMES
utube.com BLACKOUT
zum.com LASTFANTASY
dreamwiz.com RAINDROP
hanyang.ac.kr SOMEDAY
dhlottery.co.kr BOO
duksoo.hs.kr HAVANA
hanyang-u.ms.kr OBLIVIATE
yd.es.kr LOVEATTACK
mcc.hanyang.ac.kr ADREAMER
startlink.io
acmicpc.net
noj.am
mcc.hanyang.ac.kr`.split('\n');
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let [n,m] = input.shift().split(' ').map(Number);
let mymap = {};
for(let i =0; i<n; i++){
    let [key,val] = input[i].split(' ');
    mymap[key] = val;
}
for(let i = n; i<input.length; i++){
    console.log(mymap[input[i]])
}