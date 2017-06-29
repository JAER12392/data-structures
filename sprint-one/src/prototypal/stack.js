var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.counter = 0;
  
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  stackMethods[this.counter] = value;  
  this.counter++;  
};

stackMethods.pop = function() {
  if (this.counter > 0) {
    this.counter--;
  }  
  return stackMethods[this.counter];  
  
};

stackMethods.size = function() {
  if (this.counter < 0) {
    this.counter = 0;
  }  
  return this.counter;
};


