var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.key = 0;
};

Stack.prototype.push = function(value) {
  Stack.prototype[this.key] = value;
  this.key++; 
};

Stack.prototype.pop = function() {
  if (this.key > 0) {
    this.key--;
  }
  return Stack.prototype[this.key];
};

Stack.prototype.size = function() {
  if (this.key < 0) {
    this.key = 0;
  }  
  return this.key;
};

var newStack = new Stack();



