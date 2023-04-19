const calcDistance = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

var countPoints = function (points, queries) {
  const res = [];
  for (const circle of queries) {
    let count = 0;
    for (const p of points)
      if (calcDistance(circle[0], circle[1], p[0], p[1]) <= circle[2]) ++count;
    res.push(count);
  }
  return res;
};
