/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let nodeA = headA;

  while (nodeA) {
    let nodeB = headB;
    while (nodeB) {
      if (nodeA === nodeB) return nodeA;
      nodeB = nodeB.next;
    }
    nodeA = nodeA.next;
  }

  return null;
};
