var strStr = function (haystack, needle) {
  const len = needle.length;
  for (let i = 0; i < haystack.length - len + 1; i++) {
    if (haystack.substring(i, i + len) === needle) return i;
  }
  return -1;
};
