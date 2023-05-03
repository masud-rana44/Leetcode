var minAddToMakeValid = function (s) {
  let count = 0;
  const stack = [];

  for (let p of s) {
    if (p === ")") {
      const lastEl = stack.pop();
      if (lastEl !== "(") ++count;
    } else {
      stack.push(p);
    }
  }

  return count + stack.length;
};
