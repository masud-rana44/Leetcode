var firstUniqChar = function (s) {
  const len = s.length;
  for (let i = 0; i < len; i++) {
    let find = false;
    for (let j = 0; j < len; j++) {
      if (i !== j && s[i] === s[j]) {
        find = true;
        break;
      }
    }
    if (!find) return i;
  }
  return -1;
};
