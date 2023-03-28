var lengthOfLastWord = function (s) {
  // const arr = s.trim().split(" ");
  // return arr[arr.length - 1].length;

  let count = 0,
    i = s.length - 1;
  while (i >= 0 && s[i] === " ") i--;
  while (i >= 0 && s[i] !== " ") {
    count++;
    i--;
  }

  return count;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
