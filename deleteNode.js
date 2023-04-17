var deleteNode = function (node) {
  nextNode = node.next;
  node.val = nextNode.val;
  node.next = nextNode.next;
};
