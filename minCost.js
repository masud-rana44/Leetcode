var minCostToMoveChips = function (position) {
  if (position.length === 0) return 0;
  const ans = [];
  for (let i = 0; i < position.length; i++) {
    let count = 0;
    if (i > 0 && position[i] === position[i - 1]) continue;
    position.forEach((j) => {
      if (Math.abs(position[i] - j) % 2 === 1) count++;
    });
    ans.push(count);
  }

  return Math.min(...ans);
};

// minCostToMoveChips([2, 2, 2, 3, 3]);
minCostToMoveChips([1, 1000000000]);
