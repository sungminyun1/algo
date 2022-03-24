// let input = `1000 1 1000
// 999 1000`.split("\n");
const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [N, M, Start] = input.shift().split(" ");
input = input
  .map((val, idx) => {
    return val.split(" ").map((val2) => +val2);
  })
  .sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    return b[0] - a[0];
  });
const graph = {};
for (let i = 0; i < input.length; i++) {
  let [from, to] = input[i];
  if (!graph[from]) {
    graph[from] = [to];
  } else {
    graph[from].push(to);
  }

  if (!graph[to]) {
    graph[to] = [from];
  } else {
    graph[to].push(from);
  }
}
DFS(+Start, graph);
BFS(+Start, graph);
function DFS(Start, Graph) {
  let visited = [];
  let dfs = [Start];
  let res = [];
  while (dfs.length) {
    let now = dfs.pop();
    if (visited[now]) {
      continue;
    }
    visited[now] = true;
    res.push(now);
    dfs.push(...Graph[now]);
  }
  console.log(res.join(" "));
}

function BFS(Start, Graph) {
  let visited = [];
  let bfs = [Start];
  let res = [];
  while (bfs.length) {
    let now = bfs.shift();
    if (visited[now]) {
      continue;
    }
    visited[now] = true;
    res.push(now);
    while (Graph[now].length) {
      bfs.push(Graph[now].pop());
    }
  }
  console.log(res.join(" "));
}
