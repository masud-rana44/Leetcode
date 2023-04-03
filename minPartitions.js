var minPartitions = function (n) {
  // let max = 0;
  // n.split("").forEach((e) => {
  //   if (max < +e) max = +e;
  // });
  // return max;

  for (let i = 9; i >= 0; i--) {
    if (n.indexOf(i) !== -1) return i;
  }
};

console.log(minPartitions("27346209830709182346"));
