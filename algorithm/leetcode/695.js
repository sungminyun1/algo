let grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1],
];
var maxAreaOfIsland = function (grid) {
  let visited = new Map();
  let max = 0;
  let maxRow = grid.length;
  let maxCol = grid[0].length;
  const dfs = (row, col) => {
    let count = 0;
    const direction = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    const needVisit = [[row, col]];
    while (needVisit.length) {
      let [nowRow, nowCol] = needVisit.pop();
      if (visited.has(`${nowRow} ${nowCol}`)) {
        continue;
      }
      visited.set(`${nowRow} ${nowCol}`, true);
      count++;
      for (let i = 0; i < direction.length; i++) {
        let newRow = nowRow + direction[i][0];
        let newCol = nowCol + direction[i][1];
        if (newRow >= 0 && newRow < maxRow && newCol >= 0 && newCol < maxCol) {
          if (
            grid[newRow][newCol] === 1 &&
            !visited.has(`${newRow} ${newCol}`)
          ) {
            needVisit.push([newRow, newCol]);
          }
        }
      }
    }
    max = max > count ? max : count;
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1 && !visited.has(`${i} ${j}`)) {
        dfs(i, j);
      }
    }
  }

  return max;
};

console.log(maxAreaOfIsland(grid));

//아래는 해답
const maxAreaOfIsland = (grid) => {
  const res = { count: 0 };
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      dfs(grid, r, c, res);
    }
  }
  return res.count;
};

const dfs = (grid, r, c, res, area = { count: 0 }) => {
  if (!grid[r] || !grid[r][c]) return;
  res.count = Math.max(res.count, (area.count += grid[r][c]));
  grid[r][c] = 0;
  dfs(grid, r, c - 1, res, area);
  dfs(grid, r, c + 1, res, area);
  dfs(grid, r - 1, c, res, area);
  dfs(grid, r + 1, c, res, area);
};
