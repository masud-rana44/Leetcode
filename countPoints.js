var countPoints = function (points, queries) {
  const res = new Array(queries.length).fill(0);
  for (let i = 0; i < queries.length; i++) {
    const rangeX = [
      queries[i][0] + queries[i][2],
      queries[i][0] - queries[i][2],
    ];
    const rangeY = [
      queries[i][1] + queries[i][2],
      queries[i][1] - queries[i][2],
    ];

    const m = queries[i][1] + queries[i][1] / 2;
    const n = queries[i][1] - queries[i][1] / 2;

    const p = queries[i][0] + queries[i][0] / 2;
    const q = queries[i][0] - queries[i][0] / 2;

    for (let j = 0; j < points.length; j++) {
      const x = points[j][0];
      const y = points[j][1];

      if (
        (x <= rangeX[0] && x >= rangeX[1] && y <= m && y >= n) ||
        (y <= rangeY[0] && y >= rangeY[1] && x <= p && x >= q)
      ) {
        ++res[i];
      }
    }
  }

  return res;
};

console.log(
  countPoints(
    [
      [1, 3],
      [3, 3],
      [5, 3],
      [2, 2],
    ],
    [
      [2, 3, 1],
      [4, 3, 1],
      [1, 1, 2],
    ]
  )
);
