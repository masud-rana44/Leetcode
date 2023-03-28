var countConsistentStrings = function (allowed, words) {
  // let count = 0,
  //   allowedSet = new Set(allowed);

  // console.log(typeof allowedSet);

  // for (let i = 0; i < words.length; i++) {
  //   console.log([...words[i]]);
  //   if ([...words[i]].every((letter) => allowedSet.has(letter))) {
  //     count++;
  //   }
  // }

  // return count;

  let res = words.length;

  const alpha = new Array(26).fill(false);
  [...allowed].forEach(
    (letter) => (alpha[letter.charCodeAt() - "a".charCodeAt()] = true)
  );

  words.forEach((word) => {
    for (let char of word) {
      if (!alpha[char.charCodeAt() - "a".charCodeAt()]) {
        res--;
        break;
      }
    }
  });

  return res;
};

console.log(
  countConsistentStrings("ab", ["ad", "abab", "bd", "aaab", "baa", "badab"])
);
