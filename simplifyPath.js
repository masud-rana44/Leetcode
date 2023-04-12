/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const temp = path.split("/");
  const n = temp.length;
  const stack = [];

  for (let i = 0; i < n; i++) {
    const el = temp[i];
    if (el === "" || el === ".") continue;
    if (el === "..") stack.pop();
    else stack.push(el);
  }

  return "/" + stack.join("/");
};
