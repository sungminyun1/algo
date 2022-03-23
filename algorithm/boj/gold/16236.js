const input = `6
6 0 6 0 6 1
0 0 0 0 0 2
2 3 4 5 6 6
0 0 0 0 0 2
0 2 0 0 0 0
3 9 3 0 0 1`.split("\n");
const N = +input.shift();
main(N, input);

function main(N, input) {
  const prey = {};
  const shark = {
    size: 2,
    eat: 0,
    col : 0,
    row : 0
  };

  let board = input.map((val1, row) => {
    return val1.split(" ").map((val2, col) => {
      val2 = +val2;
      switch(val2){
        case 9 :
          shark.row = row;
          shark.col = col;
          return 0;
        case 0 :
          break;
        default :
          if(!prey[val2]){
            prey[val2] = [[row,col]];
          }else{
            prey[val2].push([row,col])
          }
          break;
      }
      return val2;
    });
  });
  console.log(prey);
  console.log(board);
}

// function main(N,Arr){
//     const prey = new Array(7).fill(0)
//     const shark = {
//         size : 2,
//         eat : 0,
//         point : []
//     }
//     let board = Arr.map((val,row) =>{
//         return val.split(' ').map((val2, col) =>{
//             val2 = +val2;
//             if(0 < val2 && val2 <7){
//                 prey[val2]++;
//             }else if(val2 === 9){
//                 shark.point = [row,col];
//                 return 0;
//             }
//             return val2;
//         })
//     })

//     const done = () =>{
//         for(let i = 1; i<shark.size; i++){
//             if(prey[i] > 0){
//                 return false;
//             }
//         }
//         return true;
//     }
//     let time = 0;

//     const raider = (row,col) =>{
//         let nrow, ncol;
//         let len = 1;
//         while(true){
//             let isfind = false;
//             for(let i =0; i< (2*len)+1; i++){
//                 let rowidx = i-len;
//                 let colidx = len - Math.abs(rowidx);
//                 let trow = row + rowidx;
//                 let tlcol = col - colidx;
//                 let trcol = col + colidx;

//                 if(trow >=0 && trow < N && tlcol >= 0 && tlcol < N){
//                     if(board[trow][tlcol] > 0 && board[trow][tlcol] < shark.size){
//                         isfind = true;
//                         nrow = trow;
//                         ncol = tlcol;
//                         break;
//                     }
//                 }

//                 if(trow >= 0 && trow < N && trcol >= 0 && trcol < N){
//                     if(board[trow][trcol] > 0 && board[trow][trcol] < shark.size){
//                         isfind = true;
//                         nrow = trow;
//                         ncol = trcol;
//                         break;
//                     }
//                 }
//             }
//             if(isfind){
//                 break;
//             }
//             len++;
//         }

//         time += len;
//         prey[board[nrow][ncol]]--;
//         board[nrow][ncol] = 0;
//         shark.point = [nrow, ncol];
//         return;
//     }
//     while(!done()){
//         raider(shark.point[0], shark.point[1]);
//         if(++shark.eat === shark.size){
//             shark.size++;
//             shark.eat = 0;
//         }
//     }

//     console.log(time)
// }
