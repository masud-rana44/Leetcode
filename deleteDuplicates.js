var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;

  const sentinel = {
    val: 0,
    next: head,
  };
  let predecessor = sentinel;

  while (head) {
    if (head.next && head.val === head.next.val) {
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }
      predecessor.next = head.next;
    } else {
      predecessor = predecessor.next;
    }

    head = head.next;
  }

  return sentinel.next;
};
