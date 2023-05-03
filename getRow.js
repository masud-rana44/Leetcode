var getRow = function (rowIndex) {
  const row = [];
  let ans = 1;
  row.push(ans);

  for (let i = 1; i <= rowIndex; i++) {
    ans *= rowIndex + 1 - i;
    ans /= i;
    row.push(ans);
  }

  return row;
};
