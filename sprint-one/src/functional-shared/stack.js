var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.counter = 0;
  extend(someInstance, stackMethods);

  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.size = function() {
  if (this.counter < 0) {
    this.counter = 0;
  }  
  return this.counter;
};

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

