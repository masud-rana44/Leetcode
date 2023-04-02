var isLongPressedName = function (name, typed) {
  let idx = 0;

  for (let i in name) {
    if (typed[idx] !== name[+i]) return false;
    while (typed[idx] === typed[idx + 1] && name[+i] !== name[+i + 1]) idx++;
    idx++;
  }

  while (idx < typed.length) {
    if (name[name.length - 1] !== typed[idx]) return false;
    idx++;
  }

  return true;
};

console.log(isLongPressedName("leelee", "lleeelee"));
