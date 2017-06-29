var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
 
  
  

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
    }

    list.tail = Node(value);            //{node.value: 4, node.next: null}, {node.value: 5, node.next: null}
        
  };

  list.removeHead = function() {
    var orginal = list.head.value;
    list.head.value = list.tail.value;
    return orginal;
    
  };

  list.contains = function(target) {
    return list.head.value === target || list.tail.value === target;
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
