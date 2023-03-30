const strPrefixMatch = function (str1, str2) {
  if (str1 === str2) return str1;
  let res = "";
  let i = 0;
  while (str1.charAt(i) === str2.charAt(i)) {
    res += str1.charAt(i);
    i++;
  }
  return res;
};

var longestCommonPrefix = function (strs) {
  if (strs === null || strs.length === 0) return "";
  // let prevStr = strs[0];

  // strs.forEach((str) => {
  //   prevStr = strPrefixMatch(prevStr, str);
  // });

  // return prevStr;

  strs.sort();
  return strPrefixMatch(strs[0], strs[strs.length - 1]);
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
