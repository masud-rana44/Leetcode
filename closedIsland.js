var closedIsland = function (grid) {
  let closedIslands = 0;
  let n = grid.length;
  for (let i = 0; i < n; i++) {
    let m = grid[i].length;
    for (let j = 0; j < m; j++) {
      if (
        // i > 0 &&
        // i < n - 1 &&
        // j > 0 &&
        // j < m - 1 &&
        grid[i][j] === 0 &&
        grid[i + 1][j] === 1 &&
        grid[i - 1][j] === 1 &&
        grid[i][j + 1] === 1 &&
        grid[i][j - 1] === 1
      )
        closedIslands++;
    }
  }

  return closedIslands;
};

console.log(
  closedIsland([
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ])
);
