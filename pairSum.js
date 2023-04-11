/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  if (!head) return head;
  let current = head;
  let value = [];

  while (current) {
    value.push(current.val);
    current = current.next;
  }

  let max = -1;
  const len = value.length;
  for (let i = 0; i < len / 2; i++) {
    const temp = value[i] + value[len - 1 - i];
    if (temp > max) max = temp;
  }

  return max;
};
