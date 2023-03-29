var reversePrefix = function (word, ch) {
  for (let i = 0; i < word.length; i++)
    if (word.charAt(i) === ch)
      return word
        .substring(0, i + 1)
        .split("")
        .reverse()
        .join("")
        .concat(word.substring(i + 1, word.length));

  return word;
};
