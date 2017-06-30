var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  
  list.addToTail = function(value) {
// declared node 
    var node = Node(value);
// updating the list head to be the value we've passed in
    if (list.head === null) {
// and setting both the tail and the head to be the value we're passing in to aTT
      list.head = node;
      list.tail = node; 
// so now we've dealt with the case of starting off the linked list - right now,
// we've set the single node in our list to be both the head and the tail.
    } else {
// now if the function is run again, we're taking the tail node, and setting it to 
// point (using next property) to the newly added node, which is now the tail.
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var head = list.head.value;
    list.head = list.head.next;
    return head;
  };

  list.contains = function(target) {
  
    var lookThroughLinkedList = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        return lookThroughLinkedList(node.next);
      }
    };
    return lookThroughLinkedList(list.head);
    // return lookThroughLinkedList(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


