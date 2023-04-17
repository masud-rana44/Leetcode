var swapPairs = function (head) {
  if (!head || !head.next) return head;
  const sentinel = {
    val: 0,
    next: head,
  };
  let pred = sentinel;
  let curr = head;
  while (curr && curr.next) {
    pred.next = curr.next;
    curr.next = pred.next.next;
    pred.next.next = curr;
    pred = curr;
    curr = curr.next;
  }
  return sentinel.next;
};
