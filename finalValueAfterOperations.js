var finalValueAfterOperations = function (operations) {
  let X = 0;
  operations.forEach((op) => {
    if (op === "--X" || op === "X--") --X;
    if (op === "++X" || op === "X++") ++X;
  });
  return X;
};
