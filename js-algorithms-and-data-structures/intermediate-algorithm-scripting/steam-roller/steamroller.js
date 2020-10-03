function steamrollArray(arr) {
  var stuffStorage = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var aggregateElement = function(element) {
    if(Array.isArray(element)){
      element.forEach((e) => {
        aggregateElement(e);
      });
    } else {
      stuffStorage.push(element);      
    }
  };

  // Call the function for each element in the array
  arr.forEach(aggregateElement);
  return stuffStorage;
}

steamrollArray([1, [2], [3, [[4]]]]);
