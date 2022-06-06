const input = `3
1000 1
1 16`
  .toString()
  .trim()
  .split("\n");
//const N = +input.shift();
for (let i = 1; i < input.length; i++) {
  const [Before, After] = input[i].split(" ").map((val) => +val);
  main(Before, After);
}

function main(Before, After) {
  let queue = [[Before, ""]];
  const visited = [];

  const LShift = (num) => {
    return (num * 10 + Math.floor(num / 1000)) % 10000;
  };

  const RShift = (num) => {
    return (num % 10) * 1000 + Math.floor(num / 10);
  };

  while (queue.length) {
    let nextStep = [];
    let isFind = false;
    for (let i = 0; i < queue.length; i++) {
      let [now, comm] = queue[i];
      if (now === After) {
        console.log(comm);
        isFind = true;
        break;
      }
      visited[now] = true;
      //D
      let dNum = (now * 2) % 10000;
      let dComm = comm + "D";
      if (!visited[dNum]) {
        nextStep.push([dNum, dComm]);
      }

      //S
      let sNum = now === 0 ? 9999 : now - 1;
      let sComm = comm + "S";
      if (!visited[sNum]) {
        nextStep.push([sNum, sComm]);
      }

      //L
      let lNum = LShift(now);
      let lComm = comm + "L";
      if (!visited[lNum]) {
        nextStep.push([lNum, lComm]);
      }

      //R
      let rNum = RShift(now);
      let rComm = comm + "R";
      if (!visited[rNum]) {
        nextStep.push([rNum, rComm]);
      }
    }
    if (isFind) {
      break;
    }
    queue = nextStep;
  }
}
