var addTwoNumbers = function (l1, l2) {
  let cur1 = l1;
  let cur2 = l2;
  let newList = null;
  let prevNode = null;
  let carry = 0;
  while (cur1 || cur2) {
    const val1 = cur1 ? cur1.val : 0;
    const val2 = cur2 ? cur2.val : 0;
    const sum = val1 + val2 + carry;
    const val = sum >= 10 ? sum - 10 : sum;
    const newNode = new ListNode(val);
    if (!newList) {
      newList = newNode;
      prevNode = newNode;
    } else {
      prevNode.next = newNode;
      prevNode = newNode;
    }
    carry = sum >= 10 ? 1 : 0;
    if (cur1) cur1 = cur1.next;
    if (cur2) cur2 = cur2.next;
  }

  if (carry === 1) {
    const newNode = new ListNode(carry);
    prevNode.next = newNode;
    prevNode = newNode;
  }
  prevNode.next = null;
  return newList;
};
