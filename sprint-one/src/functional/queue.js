var Queue = function() {
  var someInstance = {};
 
  // Use an object with numeric keys to store values
  var storage = {};
  
  var size = 0;
  var entries = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[entries] = value;
    size++;
    entries++;
  };

  someInstance.dequeue = function() {
    var result = storage[entries - size];
    size--;
    return result;
    
    
  };

  someInstance.size = function() {
    if (size < 0) {
      size = 0; 
    }
    return size;
  };

  return someInstance;
};
