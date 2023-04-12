/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  tokens.forEach((token) => {
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      const first = stack.pop();
      const second = stack.pop();
      console.log(first, second);
      if (token === "+") stack.push(second + first);
      if (token === "-") stack.push(second - first);
      if (token === "*") stack.push(second * first);
      if (token === "/") stack.push(Math.trunc(second / first));
    } else {
      stack.push(token * 1);
    }
  });

  return stack.pop();
};
