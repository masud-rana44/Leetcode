/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

const reverse = function (head) {
  if (!head || !head.next) return head;
  let first = head;
  tail = head;
  let second = head.next;

  while (second) {
    const temp = second.next;
    second.next = first;
    first = second;
    second = temp;
  }
  head.next = null;
  head = first;

  return head;
};

var isPalindrome = function (head) {
  const dupList = JSON.parse(JSON.stringify(head));
  const revList = reverse(dupList);
  let left = head;
  let right = revList;

  while (left) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }

  return true;
};
