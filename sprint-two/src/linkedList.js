var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.node = null;
  
  list.addToTail = function(value) {
    list.node = Node(value);    
    if (list.head === null) {
      list.head = list.node;
      
    } 
    list.head.next = list.node;
    // list.head.next = list.tail;
    // list.tail = list.tail.next;
// node.next = pointer!
  };

  list.removeHead = function() {
    var orginal = list.head.value;
    list.head.value = list.tail.value;
    return orginal;
    
  };

  list.contains = function(target) {
  
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


