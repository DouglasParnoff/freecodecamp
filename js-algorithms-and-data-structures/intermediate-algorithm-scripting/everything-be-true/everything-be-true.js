function truthCheck(collection, pre) {  
  return collection
  .reduce(
    (found, o) => {
      if(found){
        found = Boolean(o[pre]);
      }
      return found;
    },
    true
  );
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");