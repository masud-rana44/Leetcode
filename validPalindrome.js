const isPalindrome = function (str, start, end) {
  while (start < end) if (str[start++] != str[end--]) return false;
  return true;
};

var validPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] != s[end])
      return isPalindrome(s, start, end - 1) || isPalindrome(s, start + 1, end);

    start++;
    end--;
  }
  return true;
};

console.log(validPalindrome("aabbaa"));
