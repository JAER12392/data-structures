var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  this.children.push(newNode);
};


// if using inner function, then use an outer variable (like found) to simplify our recursion
// 
treeMethods.contains = function(target) {

  var found = false;

  var childrenNode = function(node, target) {
    if (node.value === target) {
      found = true;
    }
    for (var i = 0; i < node.children.length; i++) {
      childrenNode(node.children[i], target);
    }
  };

  childrenNode(this, target);

  return found;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
