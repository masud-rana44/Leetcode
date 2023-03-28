var isValid = function (s) {
  if (s.length % 2 === 1) return false;

  // const checkArr = new Array(s.length).fill(false);

  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] === true) continue;

  //   for (let j = s.length - 1; j > i; j--) {
  //     if (
  //       (s[i] === "(" && s[j] === ")") ||
  //       (s[i] === "{" && s[j] === "}") ||
  //       (s[i] === "[" && s[j] === "]")
  //     ) {
  //       console.log(s.substring(i + 1, j));
  //       const temp = isValid(s.substring(i, j));
  //       console.log(temp);
  //       if (temp === false) return false;
  //       checkArr[i] = true;
  //       checkArr[j] = true;
  //     }
  //   }
  // }

  // return checkArr.includes(false) ? false : true;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") continue;

    if (
      (s[i] === ")" && s[i - 1] !== "(") ||
      (s[i] === "{" && s[i - 1] !== "{") ||
      (s[i] === "[" && s[i - 1] !== "[")
    )
      return false;

    console.log(s, i);
    const temp1 = s.replace(s[i - 1], "");
    const temp2 = temp1.replace(s[i - 1], "");
    console.log(s, temp1, temp2, i);
    s = temp2;
    // if (i > 1) i = i - 2;
    i = 0;
  }

  return s[s.length - 1] === "(" ||
    s[s.length - 1] === "{" ||
    s[s.length - 1] === "["
    ? false
    : true;
};

console.log(isValid("([()])"));
