var mergeAlternately = function (word1, word2) {
  let str = "";
  const k = word1.length < word2.length ? word1.length : word2.length;

  for (let i = 0; i < k; i++) {
    str += word1.charAt(i);
    str += word2.charAt(i);
  }

  if (k === word1.length) stt = str.concat(word2.substring(k, word2.length));
  else str = str.concat(word1.substring(k, word1.length));

  return str;
};

console.log(mergeAlternately("ab", "pqrs"));
