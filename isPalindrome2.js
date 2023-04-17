var isPalindrome = function (head) {
  if (!head.next) return true;
  const check = [];

  while (head) {
    check.push(head.val);
    head = head.next;
  }

  const length = check.length;
  const halfIdx = Math.floor(length / 2);

  for (let i = 0; i < halfIdx; i++) {
    if (check[i] !== check[length - 1 - i]) return false;
  }

  return true;
};
