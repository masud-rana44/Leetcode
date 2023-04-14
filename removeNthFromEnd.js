/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head || !head.next) {
    head = null;
    return head;
  }

  let currentNode = head;
  let length = 0;

  while (currentNode) {
    length++;
    currentNode = currentNode.next;
  }

  const deleteNodeIndex = length - n;
  let count = 0;
  let leader = {
    val: null,
    next: head,
  };

  while (count < deleteNodeIndex) {
    count++;
    leader = leader.next;
  }
  if (leader.next === head) return head.next;
  leader.next = leader.next.next;

  return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd2 = function (head, n) {
  let curNode = head;
  let delayPointer = head;
  let prevNode = null;
  let count = 1;

  while (curNode) {
    if (count > n) {
      prevNode = delayPointer;
      delayPointer = delayPointer.next;
    }
    curNode = curNode.next;
    count++;
  }

  if (prevNode) {
    prevNode.next = delayPointer.next;
  } else {
    head = head.next;
  }

  return head;
};
