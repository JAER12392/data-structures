var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instanceMethods = {};
  instanceMethods.counter = 0;
  instanceMethods.entries = 0;
  extend(instanceMethods, queueMethods);
  return instanceMethods;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


var queueMethods = {};

queueMethods.dequeue = function() {
  var result = queueMethods[this.entries - this.counter];
  this.counter--;
  return result;
  

};

queueMethods.enqueue = function(value) {
  queueMethods[this.entries] = value;
  this.counter++;
  this.entries++;
};

queueMethods.size = function() {
  if (this.counter < 0) {
    this.counter = 0;
  }
  return this.counter;
};

