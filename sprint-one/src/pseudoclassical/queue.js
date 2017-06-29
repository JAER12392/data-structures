var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.entries = 0;
  this.counter = 0;
};


Queue.prototype.enqueue = function(value) {
  Queue.prototype[this.entries] = value;
  this.counter++;
  this.entries++; 
};

Queue.prototype.dequeue = function() {
  var result = Queue.prototype[this.entries - this.counter];
  this.counter--;
  return result;
};

Queue.prototype.size = function() {
  if (this.counter < 0) {
    this.counter = 0;
  }
  return this.counter;
};

var newQueue = new Queue();

