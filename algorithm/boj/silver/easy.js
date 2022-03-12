const readline = require('readline');
const std = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})


std.on('line',(line) =>{
    console.log(line);
    std.close();
}).on('close',()=>process.exit())