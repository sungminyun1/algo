const input = `4
4 3 2 1
0 0 0 0
0 0 9 0
1 2 3 4`.split("\n");
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
const N = +input.shift();
main(N, input);
function main(N, Arr) {
  const prey = new Array(7).fill(0);
  const shark = {
    size: 2,
    eat: 0,
    point: [],
  };
  let board = Arr.map((val, row) => {
    return val.split(" ").map((val2, col) => {
      val2 = +val2;
      if (0 < val2 && val2 < 7) {
        prey[val2]++;
      } else if (val2 === 9) {
        shark.point = [row, col];
        return 0;
      }
      return val2;
    });
  });

  const done = () => {
    for (let i = 1; i < shark.size; i++) {
      if (prey[i] > 0) {
        return false;
      }
    }
    return true;
  };
  let time = 0;
  const direction = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];
  const raider = (row, col) => {
    let queue = new Set().add(`${row} ${col}`);
    let len = 1;
    let p_list = [];
    let visited = new Set();
    while (true) {
      let needVisit = new Set();
      for (let j of queue) {
        let [nrow, ncol] = j.split(" ").map((val) => +val);
        visited.add(j);
        for (let i = 0; i < 4; i++) {
          let nextr = nrow + direction[i][0];
          let nextc = ncol + direction[i][1];
          if (nextc >= 0 && nextc < N && nextr >= 0 && nextr < N) {
            if (board[nextr][nextc] > 0 && board[nextr][nextc] < shark.size) {
              p_list.push([nextr, nextc]);
            } else if (
              board[nextr][nextc] <= shark.size &&
              !needVisit.has(`${nextr} ${nextc}`) &&
              !visited.has(`${nextr} ${nextc}`)
            ) {
              needVisit.add(`${nextr} ${nextc}`);
            }
          }
        }
      }
      if (p_list.length) {
        break;
      }
      queue = needVisit;
      len++;
    }
    time += len;
    if (p_list.length > 1) {
      p_list.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        else return a[0] - b[0];
      });
    }
    let [nrow, ncol] = p_list[0];
    prey[board[nrow][ncol]]--;
    board[nrow][ncol] = 0;
    shark.point = [nrow, ncol];
    return;
  };
  while (!done()) {
    raider(shark.point[0], shark.point[1]);
    if (++shark.eat === shark.size) {
      shark.size++;
      shark.eat = 0;
    }
  }

  console.log(time);
}
