const getRow = (row) => {
  let ans = 1;
  const res = [ans];

  for (let i = 1; i < row; i++) {
    ans = ans * (row - i);
    ans = ans / i;
    res.push(ans);
  }

  return res;
};

var generate = function (numRows) {
  const triangle = [];

  for (let i = 1; i <= numRows; i++) {
    const row = getRow(i);
    triangle.push(row);
  }

  return triangle;
};
