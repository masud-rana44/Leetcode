/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return head;
  let currentNode = head;
  let prevNode = null;
  while (currentNode) {
    const newNode = new ListNode(currentNode.val, prevNode);
    prevNode = newNode;
    currentNode = currentNode.next;
  }
  return prevNode;
};
