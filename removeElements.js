/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (head === null) return head;
  let node = head;

  while (head) {
    if (head.val === val) {
      head = head.next;
    } else {
      break;
    }
  }

  while (node && node.next) {
    if (node.next.val === val) {
      node.next = node.next.next;
    } else node = node.next;
  }

  return head;
};
