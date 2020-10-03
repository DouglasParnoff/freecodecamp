var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast;

  this.getFullName = function() {
    return fullName;
  };

  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
  };

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.setFirstName = function(firstName) {
    fullName = firstName + " " + fullName.split(" ")[1];
  };  

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.setLastName = function(lastName) {
    fullName = fullName.split(" ")[0] + " " + lastName;
  };

  return fullName;

};

var bob = new Person('Bob Ross');
