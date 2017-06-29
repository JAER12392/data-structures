var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.counter = 0;
  someInstance.entries = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  queueMethods[this.entries] = value;
  this.counter++;  
  this.entries++;  
};

queueMethods.dequeue = function() {
  var result = queueMethods[this.entries - this.counter];
  this.counter--;
  return result;
};

queueMethods.size = function() {
  if (this.counter < 0) {
    this.counter = 0;
  }
  return this.counter;
};