

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
 // 1. invoke hashing function to get an index in the limited storage array.
  var index = getIndexBelowMaxForKey(k, this._limit);
   // 2.  if there isn't yet an array at that index in the storage array, then: 
  
  if (this._storage.get(index) === undefined) {
 // 3. set an empty 'bucket' array there; 
    this._storage.set(index, []);
 // 4. and then push the tuple [k, v] to the bucket
    this._storage.get(index).push([k, v]);
 // 5. if there is already an array/bucket, 
  } else if (this._storage.get(index).length > 1) {  
 // 6. check the 0th index of each of the tuples.
    for (var i = 0; i < this._storage.get(index).length; i ++) {
 // 7. if the 0th index at any of the tuples is equal to the key we're passing in,
      if (this._storage.get(index)[i][0] === k) {
  //   set (update) the 1st index to be the value we're passing in.
        this._storage.get(index)[i][1] = v;   
      }
    }
  // 8. if none of the buckets contain the key we're passing in, 
  } else {
  // 9. push the tuple [k, v] to the bucket     
    this._storage.get(index).push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i ++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];    
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


