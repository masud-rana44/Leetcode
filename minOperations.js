var minOperations = function (boxes) {
  const res = [];
  const n = boxes.length;
  for (let i = 0; i < n; i++) {
    let move = 0;
    for (let j = 0; j < n; j++) {
      if (i !== j && boxes[j] === "1") {
        move += Math.abs(i - j);
      }
    }
    res.push(move);
  }
  return res;
};
