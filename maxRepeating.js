var maxRepeating = function (sequence, word) {
  // let count = 0;
  // for (let i = 0; i < sequence.length; i++) {
  //   if (sequence.substring(i, i + word.length) === word) {
  //     count++;
  //     i += word.length - 1;
  //   }
  // }
  let count = 1;
  while (sequence.includes(word.repeat(count))) count++;
  return count - 1;
};
console.log(maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba"));
