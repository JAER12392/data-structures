

// Instantiate a new graph
var Graph = function() {
  this.vertices = [];
  //console.log(this.vertices);
  this.edges = [];
  //console.log(this.edges);
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices.push(node);
  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i] === node) {
      this.vertices.splice(i, 1);
    } 
  }

  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i][0] === node || this.edges[i][1] === node) {
      this.edges.splice(i, 1);
    }
  }
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
//console.log(this.edges[i] + 'index here')
    if ((this.edges[i][0] === fromNode || this.edges[i][0] === toNode) && (this.edges[i][1] === toNode || this.edges[i][1] === fromNode)) {
      return true;
    }
  } 
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {  

  if (this.contains(fromNode) && this.contains(toNode)) {
    this.edges.push([fromNode, toNode]);    
  }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  for (var i = 0; i < this.edges.length; i++) {
    if ((this.edges[i][0] === fromNode || this.edges[i][0] === toNode) && (this.edges[i][1] === toNode || this.edges[i][1] === fromNode)) {
      this.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.vertices.length; i++) {
    cb(this.vertices[i]);
  }
};

var newGraph = new Graph();

/*
 * Complexity: What is the time complexity of the above functions?
 */


