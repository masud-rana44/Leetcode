var getDecimalValue = function (head) {
  if (!head) return head;
  let binary = "";
  let node = head;

  while (node) {
    binary += node.val;
    node = node.next;
  }

  return parseInt(binary, 2);
};
