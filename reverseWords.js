var reverseWords = function (s) {
  return s
    .split(" ")
    .map((el) => el.split("").reverse().join(""))
    .join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
